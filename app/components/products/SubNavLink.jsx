import Link from "next/link";

const SubNavLink = ({ children, Id, src }) => {
  return (
    <Link href={"/products/#" + Id} className=" flex-1 flex flex-col justify-between gap-y-4 p-4 text-center font-medium hover:underline">
      <div className="w-full  aspect-[1] bg-white p-2">
        <img src={src} className="w-full" alt="" />
      </div>
      <h4 className="text-white text-lg">{children}</h4>
    </Link>
  );
};

export default SubNavLink;
