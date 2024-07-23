import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2d47] text-white py-4">
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:underline">
          Facebook
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          Instagram
        </a>
      </div>
      <p className="text-center mt-4">
        &copy; 2024 AI Trip Planner. All rights reserved.
      </p>
      <p className="text-center">
        <a href="#" className="hover:underline">
          Legal Notice
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
