import React, { useEffect } from "react";
import { useRouter } from "next/router";
import cardData from "@/public/static-data/P101CardData";
import Image from "next/image";

const P101Cards = () => {
  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`/platinum101/${id}`);
  };

  return (
    <div className="px-2 pb-20 mt-16 lg:mt-16 lg:w-[82%] mx-auto w-[90%] lg:px-[1rem]">
      <div className="mt-[3rem] lg:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(card.id)}
              className="card relative group w-full h-[360px] overflow-hidden rounded-t-[1.7rem] flex flex-col border border-date/20 cursor-pointer"
            >
              <div className="w-full h-full bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-[1.03] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
              <div className="w-full h-[50%] bg-black/0 text-black1/80 flex flex-col justify-center pb-0 px-2 relative transition-all duration-200 group-hover:bg-accent/5 overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-[19px] capitalize font-semibold mb-2 frank">
                    {card.title}
                  </h2>
                  <p className="text-[15px] text-left text-lightgray group-hover:text-lightgray transition-colors duration-500">
                    {card.description.substring(0, 80)}...{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* glossary card  */}
          <div
            onClick={() => router.push("/platinum101/glossary")}
            className="card relative group w-full h-[360px] overflow-hidden rounded-t-[1.7rem] flex flex-col border border-date/20 cursor-pointer"
          >
            <div className="w-full h-full bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-[1.03] overflow-hidden">
              <Image
                src="/P101imgs/glossary.jpeg"
                alt="Glossary"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className="w-full h-[50%] bg-black/0 text-black1/80 flex flex-col justify-center pb-0 px-2 relative transition-all duration-200 group-hover:bg-accent/5 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-[19px] capitalize font-semibold mb-2 frank">
                  PGM Glossary
                </h2>
                <p className="text-[15px] text-left text-lightgray group-hover:text-lightgray transition-colors duration-500">
                  Glossary of Terms for Platinum Group Metals (PGM)...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P101Cards;

// import React from "react";
// import { useRouter } from "next/router";
// import cardData from "@/public/static-data/P101CardData";
// import Image from "next/image";

// const P101Cards = () => {
//   const router = useRouter();

//   const handleNavigation = (id) => {
//     router.push(`/platinum101/${id}`);
//   };

//   return (
//     <div className="px-2 pb-20 mt-16 lg:mt-16 lg:w-[82%] mx-auto w-[90%] lg:px-[1rem]">
//       <div className="mt-[3rem] lg:mt-28">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               onClick={() => handleNavigation(card.id)}
//               className="card relative group w-full h-[360px] overflow-hidden rounded-t-[1.7rem] flex flex-col border border-date/20 cursor-pointer"
//             >
//               <div className="relative w-full h-full overflow-hidden">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill" // Ensures the image fills the container
//                   objectFit="contain" // Ensures the full image is visible
//                   className="transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
//                 />
//               </div>
//               <div className="w-full h-[50%] bg-black/0 text-black1/80 flex flex-col justify-center pb-0 px-2 relative transition-all duration-200 group-hover:bg-accent/5 overflow-hidden">
//                 <div className="relative z-10">
//                   <h2 className="text-[19px] capitalize font-semibold mb-2 frank">
//                     {card.title}
//                   </h2>
//                   <p className="text-[15px] text-left text-lightgray group-hover:text-lightgray transition-colors duration-500">
//                     {card.description.substring(0, 80)}...{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default P101Cards;
