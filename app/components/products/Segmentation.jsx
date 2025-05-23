"use client";
import { motion } from "framer-motion";
import { fadeInViewport } from "../framer-constants";
import { twMerge } from "tailwind-merge";

const ProductSegmentation = ({ title, children, className }) => {
  return (
    <div>
      <motion.h2 {...fadeInViewport} className={twMerge("mb-4 text-xl split:text-[24px] font-medium split:font-bold text-neutral-100", className)}>
        {title}
      </motion.h2>
      {children}
    </div>
  );
};

export default ProductSegmentation;
