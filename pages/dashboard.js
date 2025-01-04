import React from "react";
import {
  FaUser,
  FaList,
  FaChartLine,
  FaSignOutAlt,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const DashboardLayout = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const menuItems = [
    { id: "profile", label: "Profile", icon: FaUser },
    { id: "watchlist", label: "Watch List", icon: FaList },
    { id: "screener", label: "Stock Screener", icon: FaChartLine },
  ];

  const Content = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-4 lg:p-6">
            <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
              Profile Dashboard
            </h2>
            <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-accent/80 to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "watchlist":
        return (
          <div className="p-4 lg:p-6">
            <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
              Stock Watch List
            </h2>
            <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {["AAPL", "GOOGL", "TSLA"].map((stock) => (
                  <div
                    key={stock}
                    className="bg-gray-50 p-4 lg:p-6 rounded-md hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-medium">{stock}</h3>
                      <span className="text-green-500 font-medium">+2.4%</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price</span>
                        <span className="font-medium">$156.78</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volume</span>
                        <span className="font-medium">1.2M</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "screener":
        return (
          <div className="p-4 lg:p-6">
            <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
              Stock Screener
            </h2>
            <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
              <div className="mb-6">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search stocks..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
                  <h4 className="font-semibold mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <input type="range" className="w-full" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>$1000</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
                  <h4 className="font-semibold mb-4">Market Cap</h4>
                  <select className="w-full p-2 border border-gray-200 rounded-md">
                    <option>Large Cap</option>
                    <option>Mid Cap</option>
                    <option>Small Cap</option>
                  </select>
                </div>
                <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
                  <h4 className="font-semibold mb-4">Sector</h4>
                  <select className="w-full p-2 border border-gray-200 rounded-md">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };  
  
  const handleLogout = () => {
    document.cookie = "userData=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/")
    toast.success("Logged out successfully");
  }

  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden">
      <div className="flex h-full">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:static lg:flex w-64 bg-white shadow-xl h-full flex-col flex-shrink-0 z-50 transition-transform duration-300 transform ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 lg:p-[22.8px] bg-gradient-to-r from-accent/80 to-accent flex-shrink-0">
            <div className="flex items-center space-x-3">
              <MdSpaceDashboard className="text-white text-2xl" />
              <h1 className="text-xl font-bold text-white">PlatinumDash</h1>
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
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
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-accent/80 to-accent rounded-full flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            <Content />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
