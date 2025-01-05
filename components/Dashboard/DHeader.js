import React, { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { GetUserData } from "@/src/utils/GetUserData";
import { useRouter } from "next/router";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = GetUserData();
    setUserData(data);
  }, []);

  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const handleAvatarClick = () => {
    router.push("/dashboard");
  };

  const userName = userData?.username || userData?.name || "User";
  const initials = getInitials(userName);

  return (
    <header className="bg-white shadow-sm flex-shrink-0">
      <div className="flex justify-between items-center px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars className="text-xl" />
          </button>
          <div className="flex-1 max-w-3xl">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>
        </div>
        <div className="ml-4">
          <div
            onClick={handleAvatarClick}
            className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-accent/80 to-accent rounded-full flex items-center justify-center text-white font-medium cursor-pointer hover:opacity-90 transition-opacity"
          >
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
