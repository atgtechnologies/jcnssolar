"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const AboutFloater = ({ className, sub, children, ...props }) => {
  return (
    <div {...props} className={twMerge("bg-[#06402DCC] rounded-[4px] p-[13px] px-[11px]", className)}>
      <h4 className="text-2xl font-bold">{children}</h4>
      <p className="font-medium text-[16px]/[150%] ">{sub}</p>
    </div>
  );
};

export default motion.create(AboutFloater);
