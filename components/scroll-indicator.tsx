"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown className="h-6 w-6 text-gray-400" />
    </motion.div>
  );
};