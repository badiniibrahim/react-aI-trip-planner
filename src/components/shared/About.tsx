import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#09111f] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We are dedicated to revolutionizing the way you plan your trips.
            With AI Trip Planner, we use advanced technology to create
            personalized and efficient itineraries that make travel planning
            easy and enjoyable.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              Our mission is to simplify travel planning by leveraging
              artificial intelligence. We aim to provide travelers with
              optimized itineraries that match their interests and preferences,
              making every trip memorable and stress-free.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-300">
              Our team consists of passionate travel enthusiasts and tech
              experts. We combine our love for exploration with cutting-edge
              technology to offer the best travel planning solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
