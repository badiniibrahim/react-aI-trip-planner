import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative z-40 bg-[#09111f] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Plan Your Perfect Trip with AI
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover the easiest way to plan your travels with personalized
            itineraries tailored just for you. Let our AI handle the details so
            you can focus on making memories.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button onClick={() => navigate("/create-trip")}>Try Now</Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bg-gradient-to-r from-[#09111f] to-transparent opacity-50 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
};

export default Hero;
