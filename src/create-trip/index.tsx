import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  API_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/aiModal";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import useAxios from "@/hooks/useAxios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useDialog } from "@/hooks/useDialog";
import { useForm } from "@/hooks/useForm";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// Import modern icons from Heroicons
import {
  GlobeAltIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Counter from "@/components/shared/Counter";

const CreateTrip = () => {
  const { formData, handleInputChange } = useForm({});
  const { openDialog, toggleDialog } = useDialog();
  const axiosInstance = useAxios();
  const [place, setPlace] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigate();

  const handleGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toggleDialog();
      return;
    }
    if (
      (formData.noOfDays! > 5 && formData.location) ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast("Please fill all details.");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = API_PROMPT.replace(
      "{location}",
      formData.location!.label
    )
      .replace("{totalDays}", formData.noOfDays!.toString())
      .replace("{traveler}", formData.traveler!)
      .replace("{budget}", formData.budget!);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    setLoading(false);
    saveAITrips(result?.response?.text());
  };

  const saveAITrips = async (tripData: any) => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user")!);
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigation(`/view-trip/${docId}`);
  };

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      getUserProfile(credentialResponse.access_token);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  const getUserProfile = async (accessToken: string) => {
    try {
      const response = await axiosInstance.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      toggleDialog();
      handleGenerateTrip();
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  const handleCounterChange = (increment: number) => {
    const currentValue = formData.noOfDays ?? 0;
    const newValue = currentValue + increment;
    handleInputChange("noOfDays", newValue >= 0 ? newValue : 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-r from-[#1a202c] to-[#2d3748] text-white rounded-lg shadow-lg">
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Plan Your Trip
      </motion.h2>
      <p className="text-lg text-gray-300 mb-10 text-center">
        Answer a few questions to get a personalized itinerary based on your
        preferences.
      </p>
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            What's your destination?
          </h3>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
              styles: {
                input: (provided) => ({
                  ...provided,
                  color: "blue",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "blue",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "blue",
                }),
              },
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            How many days are you planning?
          </h3>
          <Counter
            value={formData.noOfDays || 0}
            onIncrement={() => handleCounterChange(1)}
            onDecrement={() => handleCounterChange(-1)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">What's your budget?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SelectBudgetOptions.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-6 border border-gray-700 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                  formData.budget === item.title
                    ? "bg-gray-900 border-blue-500 shadow-xl"
                    : "bg-gray-800"
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon === "globe" && (
                  <GlobeAltIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "calendar" && (
                  <CalendarIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "dollar" && (
                  <CurrencyDollarIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "users" && (
                  <UsersIcon className="w-8 h-8 mb-3" />
                )}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Who is traveling with you?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SelectTravelsList.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-6 border border-gray-700 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                  formData.traveler === item.people
                    ? "bg-gray-900 border-blue-500 shadow-xl"
                    : "bg-gray-800"
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon === "globe" && (
                  <GlobeAltIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "calendar" && (
                  <CalendarIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "dollar" && (
                  <CurrencyDollarIcon className="w-8 h-8 mb-3" />
                )}
                {item.icon === "users" && (
                  <UsersIcon className="w-8 h-8 mb-3" />
                )}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          disabled={loading}
          onClick={handleGenerateTrip}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </motion.div>

      <Dialog open={openDialog} onOpenChange={toggleDialog}>
        <DialogContent className="bg-[#1a202c] text-white rounded-lg p-6">
          <DialogHeader>
            <DialogDescription className="text-center">
              <h2 className="text-2xl font-bold mb-2">AI Trip Planner</h2>
              <p className="mb-4">Sign in with Google to continue</p>
              <Button
                onClick={() => login()}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-3 mt-4"
              >
                <FcGoogle className="w-6 h-6" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;
