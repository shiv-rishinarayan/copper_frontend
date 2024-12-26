import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineStock } from "react-icons/ai";
import { BsGraphDown } from "react-icons/bs";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-black">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <BsGraphDown className="text-accent text-6xl mb-4" />
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">
          Lost in the vault? This page doesn’t exist.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="mb-4 text-gray-400">
          Platinum prices don’t wait—head back to the dashboard!
        </p>
        <div className="flex items-center space-x-2 hover:bg-gray-100 hover:text-secondary transition-all duration-500 ease-in-out p-2 rounded">
          <AiOutlineStock className="text-accent text-4xl" />
          <Link href="/" legacyBehavior>
            <a className="text-lg font-semibold text-accent transition-all">
              Return to Home
            </a>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 text-sm text-gray-500"
      >
        <p>
          If you're stuck, contact us at{" "}
          <span className="text-accent">info@platinumtracker.com</span>.
        </p>
      </motion.div>
    </div>
  );
}
