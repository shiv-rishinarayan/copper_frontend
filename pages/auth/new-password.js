import React, { useState } from "react";
import { useRouter } from "next/router"; // For navigation
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import SEO from "@/components/SEO";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Next.js router

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate an API call to update the password
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword }),
      });

      if (!response.ok) {
        throw new Error("Failed to update password");
      }

      // If successful
      toast.success("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");

      // Redirect user to login
      router.push("/auth/login");
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Update Password - Recover Your Account"
        description="Forgot your password? Update it now to regain access to your account securely."
        keywords="reset password, password recovery, forgot password, account access, secure login, recover account,new passowrd"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/auth/new-password"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className="text-3xl cambay font-semibold mb-1">
            Update Your Password
          </h2>
          <p className="text-start text-gray-600 mb-6">
            Enter your new password below
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleUpdatePassword}>
          <div>
            <div className="relative">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 pr-10 placeholder:text-black/40 placeholder:text-sm bg-transparent"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none focus:border-accent py-2 pr-10 placeholder:text-black/40 placeholder:text-sm bg-transparent"
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <FaSpinner className="animate-spin mr-2" /> Updating...
                </span>
              ) : (
                "Update Password"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NewPassword;
