"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import SubNavLink from "./SubNavLink";
import { usePathname } from "next/navigation";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};
const ProductsDropDown = ({ active, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();

  useEffect(
    function () {
      setIsHovered(false);
    },
    [pathname]
  );
  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="split:h-full cursor-pointer relative max-split:border-b max-split:border-b-[#EFF0F3] max-split:flex max-split:flex-col max-split:items-center"
    >
      <div className="max-split:py-2.5 max-split-text-center h-full items-center gap-x-2 flex hover:font-bold">
        <p> {children}</p>
        <svg className={"w-3 fill-black  transform transition-transform duration-300 " + (isHovered ? "rotate-180" : "")} viewBox="0 0 24 24">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m0 6.4 12 12 12-12z"></path>
          </g>
        </svg>
      </div>
      <span className={active ? "h-1 bg-primary rounded-[8px] w-full absolute bottom-0 max-split:max-w-[200px] max-split:mx-auto " : ""}></span>
      <div className="max-split:hidden">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className=" fixed top-[110px] z-[100] left-0 w-full py-10 bg-primary/80 shadow-md "
            >
              <div className="flex gap-5 max-w-[1000px] mx-auto">
                <SubNavLink Id="panels" src="/images/panel 31.png">
                  Solar panel
                </SubNavLink>
                <SubNavLink Id="fans" src="/images/solar fan 1.png">
                  Solar Fans
                </SubNavLink>
                <SubNavLink Id="generators" src="/images/300w-generator.jpg">
                  Solar Generator
                </SubNavLink>
                <SubNavLink Id="storage" src="/images/energy 2.png">
                  Energy Storage Systems
                </SubNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="max-split:block hidden space-y-2 bg-gray-200 w-full ">
        <div className="border-b border-b-white py-2 text-center">
          <Link className="hover:underline" href="/products/#panels">
            Solar Panels
          </Link>
        </div>
        <div className="border-b border-b-white py-2 text-center">
          <Link className="hover:underline" href="/products/#fans">
            Solar Fans
          </Link>
        </div>
        <div className="border-b border-b-white py-2 text-center">
          <Link className="hover:underline" href="/products/#generators">
            Solar Generator
          </Link>
        </div>
        <div className="border-b border-b-white py-2 text-center">
          <Link className="hover:underline" href="/products/#storage">
            Solar Storage
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProductsDropDown;
