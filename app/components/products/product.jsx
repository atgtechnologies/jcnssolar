"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Product = ({ image, alt, className, title, category, imgCln, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge("border-[#E5E7EB] border-[1.35px] rounded-[21.56px] py-[45px] px-[32px] max-sm:w-full max-sm:mx-auto ", className)}
    >
      <Image src={image} alt={alt} className="mx-auto block" />
      <div className={twMerge("mt-3 space-y-2 text-center  mx-auto", imgCln)}>
        <h4 className="text-lg font-medium neutral-100">{title}</h4>
        <p className="text-neutral-100">{category}</p>
      </div>
    </div>
  );
};

export default motion(Product);
