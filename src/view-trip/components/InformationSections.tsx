import { Button } from "@/components/ui/button";
import usePlacePhoto from "@/hooks/useGetPhoto";
import { FC } from "react";
import { LuShare2 } from "react-icons/lu";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type Props = {
  trip: any;
};

const InformationSections: FC<Props> = ({ trip }) => {
  const photoUrl = usePlacePhoto(trip?.userSelection?.location?.label);

  return (
    <div className="bg-[#09111f] p-6 rounded-lg shadow-md mb-8">
      <motion.img
        src={photoUrl!}
        alt="Destination"
        className="h-80 w-full object-cover rounded-t-lg"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="text-3xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {trip?.userSelection?.location?.label}
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            <motion.div
              className="flex items-center bg-gray-700 p-2 px-4 rounded-full text-gray-300 text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#1d2a44" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              {trip?.userSelection?.noOfDays} Days
            </motion.div>
            <motion.div
              className="flex items-center bg-gray-700 p-2 px-4 rounded-full text-gray-300 text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#1d2a44" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CurrencyDollarIcon className="w-5 h-5 mr-2" />
              {trip?.userSelection?.budget}
            </motion.div>
            <motion.div
              className="flex items-center bg-gray-700 p-2 px-4 rounded-full text-gray-300 text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#1d2a44" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <UsersIcon className="w-5 h-5 mr-2" />
              {trip?.userSelection?.traveler} Travelers
            </motion.div>
          </div>
        </div>
        <motion.div
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button className="flex items-center justify-center w-full">
            <LuShare2 className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InformationSections;
