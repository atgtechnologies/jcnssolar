import Link from "next/link";

const NavLink = ({ children, active, href }) => {
  return (
    <li className="split:h-full relative max-split:border-b max-split:border-b-[#EFF0F3] max-split:flex max-split:flex-col max-split:items-center">
      <Link href={href} className="max-split:py-2.5 max-split-text-center h-full items-center flex hover:font-medium  ">
        {children}
      </Link>
      <span className={active ? "h-1 bg-primary rounded-[8px] w-full absolute bottom-0 max-split:max-w-[200px] max-split:mx-auto " : ""}></span>
    </li>
  );
};

export default NavLink;
