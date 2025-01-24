'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left lg:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-gray-800 dark:text-white text-4xl sm:text-6xl font-bold mb-4">
              HELLO, I&apos;M{" "}
              <div className="mt-2">
                <motion.span 
                  className="text-pink-600 dark:text-pink-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  HUM
                </motion.span>{" "}
                <motion.span 
                  className="text-purple-600 dark:text-purple-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  SOPHA
                </motion.span>
              </div>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A passionate Software Engineer based in Phnom Penh, crafting elegant solutions 
            through code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex space-x-4">
              <Link href="/tech-stack">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full cursor-pointer transition-colors duration-300"
                >
                  View My Work
                </motion.div>
              </Link>
              <Link href="/view-cv">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full cursor-pointer transition-colors duration-300"
                >
                  Download CV
                </motion.div>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <div className="h-1 w-10 bg-purple-600"></div>
              <span>Software Engineer</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-80 h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden w-80 h-80 flex items-center justify-center">
              <Image
                src="/Sopha.JPG"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                style={{ objectPosition: '50% 20%' }}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
