import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";

const EmailSent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow mt-16">
        <div className="flex h-[calc(100vh-4rem)]">
          <div className="w-full flex flex-col justify-center px-10">
            <div className="max-w-md mx-auto w-full bg-white p-8 rounded-lg shadow-md">
              <div className="text-center">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Check Your Inbox
                </h2>
                <p className="text-gray-600 mb-8">
                  We've already sent you a verification link. Please check your
                  inbox and confirm your identity
                </p>
                <div className="space-y-6">
                  <button
                    onClick={() =>
                      window.open("https://mail.google.com", "_blank")
                    }
                    className="w-full bg-accent text-white py-3 rounded-md 
                    transition-colors duration-200 ease-in-out
                    hover:bg-accent-dark font-medium text-lg
                    shadow-sm hover:shadow-md"
                  >
                    Open Email
                  </button>
                  <button
                    onClick={() => router.push("/login")}
                    className="flex items-center justify-center space-x-2 
                    text-accent hover:text-accent-dark mx-auto
                    transition-colors duration-200 ease-in-out 
                    font-medium group"
                  >
                    <IoArrowBack
                      className="w-5 h-5 transition-transform 
                    group-hover:-translate-x-1"
                    />
                    <span>Return to Login</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailSent;
