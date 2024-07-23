import React from "react";
import { motion } from "framer-motion";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-[#09111f] text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pricing
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          className="w-full md:w-1/3 p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a2233]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <span className="text-2xl">🎉</span>
            <span>Free Plan</span>
          </h3>
          <p>
            Access basic features at no cost. Perfect for trying out the app!
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a2233]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span>Pro Plan</span>
          </h3>
          <p>
            Unlock advanced features for just $9.99/month. Ideal for frequent
            travelers.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a2233]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <span className="text-2xl">🏢</span>
            <span>Enterprise Plan</span>
          </h3>
          <p>
            Custom solutions for businesses. Contact us for a tailored quote and
            premium support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
