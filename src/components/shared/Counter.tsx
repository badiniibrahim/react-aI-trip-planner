import React from "react";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Counter = ({ value, onIncrement, onDecrement }: any) => {
  return (
    <div className="flex items-center space-x-4">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onDecrement}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        <MinusIcon className="h-6 w-6" />
      </motion.button>
      <span className="text-lg font-semibold">{value}</span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onIncrement}
        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        <PlusIcon className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default Counter;
