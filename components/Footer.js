import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative w-full h-fit py-10 text-white md:px-4">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/FooterBG.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-10 py-10 h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[96%] w-full flex flex-col mx-auto text-center px-3 space-y-4">
          {/* Main Content */}
          <div className="container mx-auto flex flex-col justify-between lg:flex-row">
            {/* Text Content */}
            <div className="text-start lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-[1.5rem] md:text-4xl font-semibold mb-6 md:leading-7 frank">
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

          {/* Logo Section */}
          <div className="w-full flex justify-start items-center mb-4 pt-10">
            <Image
              src="/logotransparent.png"
              alt="Logo"
              width={160}
              height={14}
              priority
            />
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20 my-4"></div>

          {/* Bottom Links */}
          <div className="flex justify-between items-center flex-wrap gap-4 mt-2">
            <div className="text-xs md:text-sm font-normal flex flex-wrap space-x-2">
              <span>© 2024 Platinum Tracker</span>
              <span>|</span>
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span>|</span>
              <span className="cursor-pointer hover:underline">Disclaimer</span>
            </div>

            <div className="flex flex-wrap items-center space-x-2 text-sm md:text-base">
              <MdEmail className="text-lg md:text-xl" />
              <span>info@platinumtracker.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
