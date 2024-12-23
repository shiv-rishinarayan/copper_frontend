import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full h-[330px] text-white md:px-4">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/HeroBG-5.mp4" // Replace with your video path
        autoPlay
        loop
        muted
      ></video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-10 py-10 h-full flex flex-col lg:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/logo.jpg" // Replace with your logo path
            alt="Logo"
            width={150}
            height={100}
            className="mb-4"
          />
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} PGM | All Rights Reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-gray-300">
          {["Home", "News", "Investments", "Data", "Community", "Videos"].map(
            (link, index) => (
              <a
                key={index}
                href={`/${link.toLowerCase()}`} // Example link structure
                className="text-sm hover:text-white"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center lg:items-end space-y-4">
          <h4 className="text-white font-semibold text-lg">Newsletter</h4>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-500 rounded-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-5 py-2 bg-accent text-white rounded-sm text-sm hover:bg-accent/90">
              Get Free Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
