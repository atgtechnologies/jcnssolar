import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Product = ({ image, alt, className }) => {
  return (
    <div className={twMerge("border-[#E5E7EB] border-[1.35px] rounded-[21.56px] py-[45px] px-[32px] " + className)}>
      <Image src={image} alt={alt} className="" />
    </div>
  );
};

export default Product;
