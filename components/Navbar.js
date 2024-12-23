import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-10 py-5 flex justify-between items-center">
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

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {[
            { name: "Home", path: "/home" },
            { name: "News", path: "/news" },
            { name: "Platinum Investments", path: "/investments" },
            { name: "Community", path: "/community" },
            { name: "Videos", path: "/videos" },
            { name: "Data", path: "/data" },
            { name: "Platinum 101", path: "/101" },
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

        {/* Login Button */}
        <div>
          <button
            className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
            onClick={() => navigateTo("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
