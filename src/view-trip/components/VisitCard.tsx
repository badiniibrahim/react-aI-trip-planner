import { Button } from "@/components/ui/button";
import usePlacePhoto from "@/hooks/useGetPhoto";
import { FC } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  visitData: any;
  bestTimeToVisit?: string;
  travelTime: string;
};

export const VisitCard: FC<Props> = ({ visitData, travelTime }) => {
  const photoUrl = usePlacePhoto(visitData?.name);

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${visitData?.name}`}
      target="_blank"
    >
      <motion.div
        className="bg-[#0d1b2a] p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex gap-4 items-center">
          <img
            src={photoUrl!}
            alt={visitData?.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              {visitData?.name}
            </h2>
            <p className="text-sm text-gray-300 mt-1">{visitData?.details}</p>
            <p className="text-sm text-gray-400 mt-2 flex items-center">
              <span className="mr-1 text-yellow-400">⏱️</span>
              {travelTime}
            </p>
            <p className="text-sm text-gray-400 mt-1 flex items-center">
              <span className="mr-1 text-green-400">💰</span>
              {visitData?.ticket_pricing}
            </p>
          </div>
        </div>
        <Button
          size="sm"
          className="mt-4 w-full flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          <CiLocationArrow1 className="mr-2" />
          View on Map
        </Button>
      </motion.div>
    </Link>
  );
};
