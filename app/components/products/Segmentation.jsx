"use client";
import { motion } from "framer-motion";
import { fadeInViewport } from "../framer-constants";
const ProductSegmentation = ({ title, children }) => {
  return (
    <div>
      <motion.h2 {...fadeInViewport} className="mb-4 text-xl split:text-[24px] font-medium split:font-bold text-neutral-100">
        {title}
      </motion.h2>
      {children}
    </div>
  );
};

export default ProductSegmentation;
