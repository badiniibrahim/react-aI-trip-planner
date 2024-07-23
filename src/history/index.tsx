import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCardTrips from "./components/UserCardTrips";

export const History = () => {
  const navigation = useNavigate();
  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    getUserTrip();
  }, []);

  const getUserTrip = useCallback(async () => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    const newTrips: any[] = [];
    querySnapshot.forEach((doc) => {
      newTrips.push(doc.data());
    });

    setTrips(newTrips);
  }, [navigation]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-[#09111f] min-h-screen text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
        {trips.map((item: any, index: number) => {
          return <UserCardTrips trip={item} key={index} />;
        })}
      </div>
    </div>
  );
};
