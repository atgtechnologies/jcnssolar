"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Product = ({ image, className, title, category, imgCln, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge("border-borderStroke border-[1.35px] rounded-[21.56px] py-[45px] px-[32px] max-sm:w-full max-sm:mx-auto ", className)}
    >
      <Image src={image} alt={`${title} is a ${category} product of jncs solar`} className="mx-auto block" />
      <div className={twMerge("mt-3 space-y-2 text-center  mx-auto", imgCln)}>
        <a href="/products/title" className="text-lg block font-medium neutral-100 hover:underline">
          {title}
        </a>
        <p className="text-neutral-100">{category}</p>
      </div>
    </div>
  );
};

export default motion.create(Product);
