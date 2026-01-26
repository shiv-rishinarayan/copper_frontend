// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";
// import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// import { GetUserData } from "@/src/utils/GetUserData";

// const Navbar = () => {
//   const router = useRouter();
//   const userData = GetUserData();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true); // Add a loading state

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "News", path: "/news" },
//     { name: "PGM Investments", path: "/investments" },
//     { name: "Community", path: "/community" },
//     { name: "Videos", path: "/videos" },
//     { name: "Data", path: "/data" },
//     { name: "Calendar", path: "/calendar" },
//     { name: "PGM 101", path: "/P101" },
//   ];

//   const navigateTo = (path) => {
//     setMenuOpen(false);
//     router.push(path);
//   };

//   const isActive = (path) => router.pathname === path;

//   const menuVariants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-100%" },
//   };

//   // Check if user is logged in when component mounts
//   useEffect(() => {
//     setIsLoggedIn(!!userData?.email);
//     setIsLoading(false); // Set loading to false after checking
//   }, [userData]);

//   if (isLoading) {
//     return null; // Return null or a loading spinner until the component is fully hydrated
//   }

//   return (
//     <div className="bg-white border-b fixed top-0 left-0 w-full z-50 ">
//       <div className="container mx-auto px-4 lg:px-10 py-5 flex justify-between items-center md:flex md:space-x-7">
//         {/* Logo */}
//         <Image
//           src="/logo.jpg"
//           alt="Logo"
//           width={50}
//           height={50}
//           className="cursor-pointer scale-[1.9] lg:ml-7 md:mr-6"
//           onClick={() => navigateTo("/")}
//         />

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex lg:space-x-8 font-medium">
//           {navLinks?.map(({ name, path }, index) => (
//             <div key={index} className="relative group">
//               <motion.button
//                 className={`tracking-wide text-[15.6px] ${
//                   isActive(path) ? "text-accent font-semibold" : "text-black/70"
//                 }`}
//                 onClick={() => navigateTo(path)}
//                 whileHover={{ color: "#227B94" }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {name}
//               </motion.button>
//               <motion.div
//                 className={`absolute bottom-[-4px] h-[1.5px] bg-accent transition-all duration-300 ${
//                   isActive(path)
//                     ? "w-full left-0"
//                     : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
//                 }`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Desktop Buttons */}
//         {isLoggedIn ? (
//           <button
//             className="text-2xl hidden lg:block text-primary py-3 hover:text-accent/90"
//             onClick={() => navigateTo("/dashboard")}
//           >
//             <FaUserCircle />
//           </button>
//         ) : (
//           <button
//             className="bg-accent hidden lg:block text-white px-5 py-2 rounded-sm hover:bg-accent/90"
//             onClick={() => navigateTo("/auth/login")}
//           >
//             Login
//           </button>
//         )}

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <FaBars
//             className={`text-2xl text-accent cursor-pointer ${
//               menuOpen ? "hidden" : ""
//             }`}
//             onClick={() => setMenuOpen(true)}
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <>
//           <FaTimes
//             className="text-2xl text-accent cursor-pointer fixed top-5 right-2 z-[100]"
//             onClick={() => setMenuOpen(false)}
//           />
//           <motion.div
//             className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-8 font-medium"
//             initial="closed"
//             animate={menuOpen ? "open" : "closed"}
//             variants={menuVariants}
//             transition={{ type: "spring", stiffness: 70, damping: 20 }}
//           >
//             {navLinks.map(({ name, path }, index) => (
//               <button
//                 key={index}
//                 className={`text-lg ${
//                   isActive(path) ? "text-accent font-semibold" : "text-black/70"
//                 }`}
//                 onClick={() => navigateTo(path)}
//               >
//                 {name}
//               </button>
//             ))}
//             {isLoggedIn ? (
//               <button
//                 className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
//                 onClick={() => navigateTo("/dashboard")}
//               >
//                 Profile
//               </button>
//             ) : (
//               <button
//                 className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
//                 onClick={() => navigateTo("/auth/login")}
//               >
//                 Login
//               </button>
//             )}
//           </motion.div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { GetUserData } from "@/src/utils/GetUserData";

const Navbar = () => {
  const router = useRouter();
  const userData = GetUserData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "PGM Investments", path: "/investments" },
    { name: "Videos", path: "/videos" },
    { name: "Data", path: "/data" },
    { name: "PGM 101", path: "/P101" },
  ];

  const navigateTo = (path) => {
    setMenuOpen(false);
    router.push(path);
  };

  const isActive = (path) => router.pathname === path;

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    setIsLoggedIn(!!userData?.email);
    setIsLoading(false);
  }, [userData]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="bg-white border-b fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 xl:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer scale-[1.9] xl:ml-7"
          onClick={() => navigateTo("/")}
        />

        {/* Desktop Navigation (Visible after xl) */}
        <div className="hidden xl:flex xl:space-x-8 font-medium">
          {navLinks.map(({ name, path }, index) => (
            <div key={index} className="relative group">
              <motion.button
                className={`tracking-wide text-[15.6px] ${
                  isActive(path) ? "text-accent font-semibold" : "text-black/70"
                }`}
                onClick={() => navigateTo(path)}
                whileHover={{ color: "#227B94" }}
                transition={{ duration: 0.2 }}
              >
                {name}
              </motion.button>
              <motion.div
                className={`absolute bottom-[-4px] h-[1.5px] bg-accent transition-all duration-300 ${
                  isActive(path)
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Desktop Buttons (Visible after xl) */}
        {isLoggedIn ? (
          <button
            className="text-2xl hidden xl:block text-primary py-3 hover:text-accent/90"
            onClick={() => navigateTo("/dashboard")}
          >
            <FaUserCircle />
          </button>
        ) : (
          <button
            className="bg-accent hidden xl:block text-white px-5 py-2 rounded-sm hover:bg-accent/90"
            onClick={() => navigateTo("/auth/login")}
          >
            Login
          </button>
        )}

        {/* Mobile Menu Toggle (Hidden after xl) */}
        <div className="xl:hidden">
          <FaBars
            className={`text-2xl text-accent cursor-pointer ${
              menuOpen ? "hidden" : ""
            }`}
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu (Visible below xl) */}
      {menuOpen && (
        <>
          <FaTimes
            className="text-2xl text-accent cursor-pointer fixed top-5 right-2 z-[100]"
            onClick={() => setMenuOpen(false)}
          />
          <motion.div
            className="xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-8 font-medium"
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {navLinks.map(({ name, path }, index) => (
              <button
                key={index}
                className={`text-lg ${
                  isActive(path) ? "text-accent font-semibold" : "text-black/70"
                }`}
                onClick={() => navigateTo(path)}
              >
                {name}
              </button>
            ))}
            {isLoggedIn ? (
              <button
                className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
                onClick={() => navigateTo("/dashboard")}
              >
                Profile
              </button>
            ) : (
              <button
                className="bg-accent text-white px-5 py-2 rounded-sm hover:bg-accent/90"
                onClick={() => navigateTo("/auth/login")}
              >
                Login
              </button>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Navbar;
