/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from "react";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InformationSections from "../components/InformationSections";
import { Hotels } from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";

const ViewTrips = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<any>();

  const getTripData = useCallback(async () => {
    const docRef = doc(db, "AITrips", tripId!);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setTrip(docSnap.data());
    } else {
      toast("No trip found");
    }
  }, [tripId]);

  useEffect(() => {
    tripId && getTripData();
  }, [tripId, getTripData]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-[#09111f] min-h-screen text-white">
      <InformationSections trip={trip} />
      <Hotels trip={trip} />
      <PlacesToVisit trip={trip} />
    </div>
  );
};

export default ViewTrips;
