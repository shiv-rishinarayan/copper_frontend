import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
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
        <div className="hidden md:flex space-x-6">
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/home")}
          >
            Home
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/news")}
          >
            News
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/investments")}
          >
            Platinum Investments
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/community")}
          >
            Community
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/data")}
          >
            Data
          </button>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => navigateTo("/101")}
          >
            Platinum 101
          </button>
        </div>

        {/* Login Button */}
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
