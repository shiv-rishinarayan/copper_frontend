import React from "react";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="relative w-full h-fit ">
      {/* Footer Content */}
      <div className=" text-white md:px-4 bg-gray-900 relative container mx-auto px-4 lg:px-10 py-10 h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[96%] w-full flex flex-col mx-auto text-center px-3 space-y-4">
          {/* Main Content */}
          <div className="container mx-auto flex flex-col justify-between lg:flex-row">
            {/* Text Content */}
            <div className="text-start lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-[1.5rem] md:text-4xl font-semibold mb-6 md:leading-14 frank">
                Everything You Need to Navigate the Platinum Market – All in One
                Place
              </h1>
              <p className="text-xs sm:text-[13px] md:text-[14.5px] mb-8 text-white/70 leading-5 font-normal">
                With demand for clean energy on the rise, many investors are
                looking for the next big opportunity in platinum. We're here to
                help. Sign up to receive our best insights and updates every
                week.
              </p>
              <button
                type="submit"
                className="h-10 w-fit px-6 rounded-sm bg-accent text-white font-medium hover:bg-accent/90 frank text-[14px]"
              >
                Sign Up For Free
              </button>
            </div>

            {/* Image Content */}
            <div className="hidden image-content mt-10 lg:mt-0 lg:w-[40%] md:flex overflow-hidden">
              <img
                src="/mockup.png"
                alt="mockup"
                className="scale-[1.1] object-cover w-full h-full object-center lg:ml-10"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </footer>
  );
};

export default Footer;
