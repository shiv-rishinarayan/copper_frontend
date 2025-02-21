import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import SEO from "@/components/SEO";

const EmailSent = () => {
  const router = useRouter();

  const handleOpenInbox = () => {
    try {
      // Redirect user to their email provider
      window.open("https://mail.google.com", "_blank");
      toast.success("Redirecting to your inbox...");
    } catch {
      toast.error("Failed to open the inbox. Please try manually.");
    }
  };

  const handleResendEmail = async () => {
    try {
      toast.loading("Resending email...");
      // Simulate API call to resend verification email
      await fetch("/api", {
        method: "POST",
      });
      toast.dismiss();
      toast.success("Verification email resent successfully!");
    } catch {
      toast.dismiss();
      toast.error("Failed to resend email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Email Sent - Confirmation & Next Steps"
        description="Your email has been sent successfully. Check your inbox for confirmation and further instructions."
        keywords="email sent, confirmation, inbox, message delivered, email success, verification email, next steps"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/auth/email-sent"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 rounded-xl"
      >
        <div className="text-center">
          <h2 className="text-3xl cambay font-semibold mb-4">
            Email Verification
          </h2>
          <p className="text-start text-gray-600 mb-6">
            We've sent a verification link to your email. Please open your inbox
            to verify your email address.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenInbox}
            className="w-full bg-accent text-white py-2 rounded-sm hover:bg-accent/90 transition-all duration-300 ease-in-out"
          >
            Open Inbox
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailSent;
