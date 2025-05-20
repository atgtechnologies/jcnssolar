"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={twMerge("split:text-4xl text-[30px] font-bold text-neutral-100", className)}>
      {children}
    </h2>
  );
};

export default motion(SubHeading);
