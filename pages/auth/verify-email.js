import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleVerifyEmail = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to verify email
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: router.query.token }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify email");
      }

      toast.success("Email verified successfully!");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Failed to verify email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl cambay font-semibold mb-4">
            Verify Your Email
          </h2>
          <p className="text-start text-gray-600 mb-6">
            Click the button below to verify your email address.
          </p>
        </div>
        <div className="mt-8">
          <motion.button
            whileHover={!isLoading ? { scale: 1 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
            onClick={handleVerifyEmail}
            disabled={isLoading}
            className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
