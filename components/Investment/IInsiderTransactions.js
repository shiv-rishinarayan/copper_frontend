import React from "react";
import CanandaInsiderTransactions from "../Investment/InsiderTransactions/CanadaInsiderTransactions";
const IInsiderTransactions = () => {
  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <h1 className="cambay text-[22px] sm:text-3xl  font-semibold">
        Insider Transactions
      </h1>

      {/* content  */}
      <div className="mt-1 md:mt-5">
        {/* <div className="w-full rounded-md bg-secondary/15 h-[40vh]"></div> */}
        <CanandaInsiderTransactions />
      </div>
    </div>
  );
};

export default IInsiderTransactions;
