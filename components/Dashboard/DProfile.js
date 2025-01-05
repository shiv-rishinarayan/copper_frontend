// import React from "react";

// const ProfileContent = () => {
//   return (
//     <div className="p-4 lg:p-6">
//       <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
//         Profile Dashboard
//       </h2>
//       <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
//         <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
//           <div className="relative">
//             <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-accent/80 to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
//               JD
//             </div>
//             <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white"></div>
//           </div>
//           <div>
//             <h3 className="text-lg lg:text-xl font-bold text-gray-800">
//               John Doe
//             </h3>
//             <p className="text-gray-600">john.doe@example.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileContent;

import React from "react";
import { GetUserData } from "@/src/utils/GetUserData";
import { useEffect, useState } from "react";

const ProfileContent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = GetUserData();
    console.log("User Data from cookie:", data); // Debug log
    setUserData(data);
  }, []);

  // Get first letter of first name and last name for initials
  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  // Assuming your user data structure might be different, let's log it
  console.log("Current userData state:", userData);

  // Adjust these paths based on your actual data structure
  const userName = userData?.username || userData?.name || "User";
  const userEmail = userData?.email || "user@example.com";
  const initials = getInitials(userName);

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
        Profile Dashboard
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
          <div className="relative">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-accent/80 to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
              {initials}
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-800">
              {userName}
            </h3>
            <p className="text-gray-600">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
