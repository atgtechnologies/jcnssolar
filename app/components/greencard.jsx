"use client";
import { motion } from "framer-motion";

const GreenCard = ({ children, label, ...props }) => {
  return (
    <div {...props}>
      <span className="rounded-full bg-white w-[50px] split:w-20 h-[50px] split:h-20 mb-3 flex items-center justify-center">{children}</span>
      <p className="text-xl split:text-2xl font-bold text-white">{label}</p>
    </div>
  );
};

export default motion.create(GreenCard);
