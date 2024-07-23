import { FC } from "react";
import { motion } from "framer-motion";
import { VisitCard } from "./VisitCard";

type Props = {
  trip: any;
};

const PlacesToVisit: FC<Props> = ({ trip }) => {
  const itinerary = trip?.tripData?.itinerary;

  return (
    <div className="bg-[#09111f] p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Places to Visit</h2>
      {itinerary?.map((item: any, index: number) => (
        <motion.div
          key={`${item.day}-${index}`}
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Day {item.day}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item?.activities.map((activity: any, index: number) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-medium text-orange-400 mb-1">
                  {activity?.opening_hours}
                </h4>
                <VisitCard
                  visitData={activity}
                  bestTimeToVisit={item.best_time_to_visit}
                  travelTime={item?.travel_time?.between_locations}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PlacesToVisit;
