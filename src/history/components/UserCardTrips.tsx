import usePlacePhoto from "@/hooks/useGetPhoto";
import { motion } from "framer-motion";
import { FC } from "react";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { CiLocationArrow1 } from "react-icons/ci";

type Props = {
  trip: any;
};
const UserCardTrips: FC<Props> = ({ trip }) => {
  const photoUrl = usePlacePhoto(trip?.userSelection?.location?.label);
  console.log({ trip });

  return (
    <div>
      <motion.div
        className="bg-[#0d1b2a] p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={photoUrl!}
          alt={trip?.userSelection?.location?.label}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-white">
            {trip?.userSelection?.location?.label}
          </h2>

          <p className="text-sm text-gray-300 flex items-center">
            <BanknotesIcon className="w-5 h-5 text-yellow-400 mr-2" />
            {trip?.userSelection?.budget}
          </p>
        </div>
        <div className="mt-4">
          <motion.div
            className="bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors duration-200"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CiLocationArrow1 className="w-5 h-5" />
            <span>View on Map</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserCardTrips;
