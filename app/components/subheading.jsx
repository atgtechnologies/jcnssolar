import { twMerge } from "tailwind-merge";

const SubHeading = ({ children, className }) => {
  return <h2 className={twMerge("split:text-4xl text-[30px] font-bold text-neutral-100", className)}>{children}</h2>;
};

export default SubHeading;
