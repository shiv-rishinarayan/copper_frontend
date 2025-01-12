// import React from "react";
// import { tables } from "@/public/static-data/DemandDatabaseTable";
// import { useRouter } from "next/router";
// import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
// import Footer from "@/components/Footer";

// const TableSubpage = () => {
//   const router = useRouter();
//   const { tableId } = router.query;

//   const table = tables.find((item) => item.id === parseInt(tableId));

//   if (!table) {
//     return <p>Loading...</p>; // Optional: Add a better loading state
//   }

//   return (
//     <div>
//       <DataBreadcrumb title={table.title} />
//       <div className="mt-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
//           {table.map((table) => (
//             <div>
//               <div className="w-full bg-white rounded-lg shadow-sm p-4 h-[295px] flex flex-col">
//                 <h3 className="font-medium text-black/90 text-lg mb-3">
//                   {table.title}
//                 </h3>
//                 <div className="overflow-hidden flex-grow">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr>
//                         {table.data[0].map((header, index) => (
//                           <th
//                             key={index}
//                             className="text-left p-2 border-b font-medium text-black/70"
//                           >
//                             {header}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {table.data.slice(1, 6).map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                           {row.map((cell, cellIndex) => (
//                             <td
//                               key={cellIndex}
//                               className={`p-2 border-b text-black/80 ${
//                                 cellIndex === 0 ? "font-medium" : ""
//                               }`}
//                             >
//                               {cell}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TableSubpage;

//.......
import React from "react";
import { tables } from "@/public/static-data/DemandDatabaseTable";
import { useRouter } from "next/router";
import DataBreadcrumb from "@/components/Data/DataBreadcrumb";
import Footer from "@/components/Footer";

const TableSubpage = () => {
  const router = useRouter();
  const { tableId } = router.query;

  const table = tables.find((item) => item.id === parseInt(tableId, 10));

  if (!table) {
    return <p>Loading...</p>; // Optional: Add a better loading state
  }

  return (
    <div>
      <DataBreadcrumb title={table.title} />
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
          <div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4 h-[295px] flex flex-col">
              <h3 className="font-medium text-black/90 text-lg mb-3">
                {table.title}
              </h3>
              <div className="overflow-hidden flex-grow">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      {table.data[0].map((header, index) => (
                        <th
                          key={index}
                          className="text-left p-2 border-b font-medium text-black/70"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.slice(1, 6).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`p-2 border-b text-black/80 ${
                              cellIndex === 0 ? "font-medium" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TableSubpage;
