import Link from "next/link";

const Button = ({ children, href }) => {
  return (
    <Link href={href} className="bg-yellow p-3 text-white font-bold block w-fit">
      {children}
    </Link>
  );
};

export default Button;
