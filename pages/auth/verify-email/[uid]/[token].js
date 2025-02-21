import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { BASE_URL, VERIFY_EMAIL_API } from "@/src/api/authAPI";
// import useAxios from "@/src/network/useAxios";
import axios from "axios";
import SEO from "@/components/SEO";

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const axiosCreate = useAxios();

  const { uid, token } = router.query;

  const handleVerifyEmail = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to verify email
      // const response = await axiosCreate.get(`${VERIFY_EMAIL_API}/${uid}/${token}`);
      const response = await axios.get(
        `${BASE_URL}${VERIFY_EMAIL_API}/${uid}/${token}`
      );
      if (response?.data) {
        toast.success(
          response?.data?.message ?? "Email verified successfully!"
        );
        router.push("./../../login");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.error ??
          "Failed to verify email. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Verify Email - Confirm Your Account"
        description="Please verify your email to complete the registration process and access your account."
        keywords="verify email, email confirmation, account verification, email authentication, registration, confirmation link"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/auth/verify-email"
      />

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
