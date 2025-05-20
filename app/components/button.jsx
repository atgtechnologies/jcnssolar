"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, href, type = "link", ...props }) => {
  if (type == "link") {
    return (
      <Link href={href} {...props} className={twMerge("bg-yellow p-3 text-white font-bold block w-fit rounded-2xl", className)}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} type="submit" className={twMerge("bg-yellow p-3 text-white font-bold block w-full", className)}>
      {children}
    </button>
  );
};

export default motion(Button);
