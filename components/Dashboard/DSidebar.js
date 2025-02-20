// import React from "react";
// import { FaUser, FaList, FaChartLine, FaSignOutAlt } from "react-icons/fa";
// import { MdSpaceDashboard } from "react-icons/md";

// const Sidebar = ({
//   activeTab,
//   setActiveTab,
//   isSidebarOpen,
//   setIsSidebarOpen,
//   handleLogout,
// }) => {
//   const menuItems = [
//     { id: "watchlist", label: "Watch List", icon: FaList },
//     { id: "screener", label: "Stock Screener", icon: FaChartLine },
//     { id: "profile", label: "Profile", icon: FaUser },
//   ];

//   return (
//     <div
//       className={`fixed lg:static lg:flex w-64 bg-white shadow-xl h-full flex-col flex-shrink-0 z-50 transition-transform duration-300 transform ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//       }`}
//     >
//       <div className="p-4 lg:p-[22.8px] bg-gradient-to-r from-accent/80 to-accent flex-shrink-0">
//         <div className="flex items-center space-x-3">
//           <MdSpaceDashboard className="text-white text-2xl" />
//           <h1 className="text-xl font-bold text-white">Platinum Tracker</h1>
//         </div>
//       </div>
//       <nav className="flex-1 flex flex-col justify-between overflow-y-auto py-6">
//         <div className="space-y-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setActiveTab(item.id);
//                   setIsSidebarOpen(false);
//                 }}
//                 className={`w-full flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 transition-colors ${
//                   activeTab === item.id
//                     ? "bg-accent/10 text-accent border-r-4 border-accent font-medium"
//                     : ""
//                 }`}
//               >
//                 <Icon className="text-lg" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//         </div>
//         <button
//           className="w-full flex items-center space-x-3 px-6 py-3 text-red-600 hover:bg-red-50 transition-colors mt-2 border-t"
//           onClick={handleLogout}
//         >
//           <FaSignOutAlt className="text-lg" />
//           <span className="font-medium">Logout</span>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { useRouter } from "next/router";
import { FaUser, FaList, FaChartLine, FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
  handleLogout,
}) => {
  const router = useRouter();

  const menuItems = [
    { id: "watchlist", label: "Watch List", icon: FaList },
    { id: "screener", label: "Stock Screener", icon: FaChartLine },
    { id: "profile", label: "Profile", icon: FaUser },
  ];

  return (
    <div
      className={`fixed lg:static lg:flex w-64 bg-white shadow-xl h-full flex-col flex-shrink-0 z-50 transition-transform duration-300 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div
        className="p-4 lg:p-[22.8px] bg-gradient-to-r from-accent/80 to-accent flex-shrink-0 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center space-x-3">
          <MdSpaceDashboard className="text-white text-2xl" />
          <h1 className="text-xl font-bold text-white">Platinum Tracker</h1>
        </div>
      </div>
      <nav className="flex-1 flex flex-col justify-between overflow-y-auto py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 transition-colors ${
                  activeTab === item.id
                    ? "bg-accent/10 text-accent border-r-4 border-accent font-medium"
                    : ""
                }`}
              >
                <Icon className="text-lg" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        <button
          className="w-full flex items-center space-x-3 px-6 py-3 text-red-600 hover:bg-red-50 transition-colors mt-2 border-t"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="text-lg" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
