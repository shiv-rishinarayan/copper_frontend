import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path) => {
    setMenuOpen(false); // Close menu on navigation
    router.push(path);
  };

  const isActive = (path) => router.pathname === path;

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="bg-white border-b fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-2 lg:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer scale-[1.9] ml-7"
            onClick={() => navigateTo("/")}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:space-x-8 font-medium">
          {[
            { name: "Home", path: "/home" },
            { name: "News", path: "/news" },
            { name: "Platinum Investments", path: "/investments" },
            { name: "Community", path: "/community" },
            { name: "Videos", path: "/videos" },
            { name: "Data", path: "/data" },
            { name: "Platinum 101", path: "/P101" },
          ].map((link, index) => (
            <div key={index} className="relative group">
              <motion.button
                className={`tracking-wide text-[15.6px] ${
                  isActive(link.path)
                    ? "text-accent font-semibold"
                    : "text-black/70"
                }`}
                onClick={() => navigateTo(link.path)}
                whileHover={{ color: "#227B94" }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.button>
              {/* Underline Animation */}
              <motion.div
                className={`absolute bottom-[-4px] h-[1.5px] bg-accent transition-all duration-300 ${
                  isActive(link.path)
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </div>
          ))}
        </div>

        <button
          className="bg-accent hidden lg:block text-white px-5 py-2 rounded-sm hover:bg-accent/90"
          onClick={() => navigateTo("/login")}
        >
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <FaBars
            className={`text-2xl text-accent cursor-pointer ${
              menuOpen ? "hidden" : ""
            }`}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Close Icon for Mobile Menu */}
      {menuOpen && (
        <FaTimes
          className="text-2xl text-accent cursor-pointer fixed top-5 right-2 z-[100]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Links */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-8 font-medium"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        {[
          { name: "Home", path: "/home" },
          { name: "News", path: "/news" },
          { name: "Platinum Investments", path: "/investments" },
          { name: "Community", path: "/community" },
          { name: "Videos", path: "/videos" },
          { name: "Data", path: "/data" },
          { name: "Platinum 101", path: "/P101" },
        ].map((link, index) => (
          <button
            key={index}
            className={`text-lg ${
              isActive(link.path)
                ? "text-accent font-semibold"
                : "text-black/70"
            }`}
            onClick={() => navigateTo(link.path)}
          >
            {link.name}
          </button>
        ))}

        <button
          className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
          onClick={() => navigateTo("/login")}
        >
          Login
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
