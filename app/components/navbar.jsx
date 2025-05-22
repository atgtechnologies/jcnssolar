"use client";
import Link from "next/link";
import NavLink from "./navlink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="py-4 overflow-hidden">
      <div className="flex justify-between border-b-[#EFF0F3] border-b contentMargin max-split:max-w-full max-split:w-full">
        <Link href="/">
          <img className="w-[100px] sm:w-[157px]" src="./images/logo.png" alt="Jcns Solar power Logo " />
        </Link>
        <ul
          className={
            "split:flex gap-x-6 max-split:h-screen max-split:z-20 max-split:w-full max-split:bg-white max-split:fixed max-split:top-0 transition-transform duration-200 " +
            (open ? "max-split:translate-x-0 max-split:left-0" : "max-split:translate-x-full")
          }
        >
          <li className="p-2 flex justify-end split:hidden max-split:mb-5" onClick={() => setOpen(false)}>
            <svg className="w-12" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="white"></rect>
                <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </li>
          <NavLink href="/" active={pathname == "/" || pathname == ""}>
            Home
          </NavLink>
          <NavLink href="/products" active={pathname == "/products"}>
            Our Product
          </NavLink>
          <NavLink href="/about" active={pathname == "/about"}>
            About Us
          </NavLink>
          <NavLink href="/contact" active={pathname == "/contact"}>
            Contact Us
          </NavLink>
        </ul>
        <span className="min-split:hidden flex items-center cursor" onClick={() => setOpen(true)}>
          <svg className="w-8" viewBox="0 0 20 21" fill="none">
            <path
              d="M17.8125 10.457C17.8125 10.7057 17.7137 10.9441 17.5379 11.1199C17.3621 11.2958 17.1236 11.3945 16.875 11.3945H3.125C2.87636 11.3945 2.6379 11.2958 2.46209 11.1199C2.28627 10.9441 2.1875 10.7057 2.1875 10.457C2.1875 10.2084 2.28627 9.96993 2.46209 9.79412C2.6379 9.6183 2.87636 9.51953 3.125 9.51953H16.875C17.1236 9.51953 17.3621 9.6183 17.5379 9.79412C17.7137 9.96993 17.8125 10.2084 17.8125 10.457ZM3.125 6.39453H16.875C17.1236 6.39453 17.3621 6.29576 17.5379 6.11994C17.7137 5.94413 17.8125 5.70567 17.8125 5.45703C17.8125 5.20839 17.7137 4.96993 17.5379 4.79412C17.3621 4.6183 17.1236 4.51953 16.875 4.51953H3.125C2.87636 4.51953 2.6379 4.6183 2.46209 4.79412C2.28627 4.96993 2.1875 5.20839 2.1875 5.45703C2.1875 5.70567 2.28627 5.94413 2.46209 6.11994C2.6379 6.29576 2.87636 6.39453 3.125 6.39453ZM16.875 14.5195H3.125C2.87636 14.5195 2.6379 14.6183 2.46209 14.7941C2.28627 14.9699 2.1875 15.2084 2.1875 15.457C2.1875 15.7057 2.28627 15.9441 2.46209 16.1199C2.6379 16.2958 2.87636 16.3945 3.125 16.3945H16.875C17.1236 16.3945 17.3621 16.2958 17.5379 16.1199C17.7137 15.9441 17.8125 15.7057 17.8125 15.457C17.8125 15.2084 17.7137 14.9699 17.5379 14.7941C17.3621 14.6183 17.1236 14.5195 16.875 14.5195Z"
              fill="#343330"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
