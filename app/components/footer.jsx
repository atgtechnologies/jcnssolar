import Link from "next/link";
import BackToTop from "./backToTop";

const Footer = () => {
  return (
    <div className="bg-[#F0FDF6] split:mt-[207px] relative">
      <div className="cursor-pointer">
        <BackToTop />
      </div>
      <div className="contentMargin md:flex py-16">
        <div>
          <img src="./images/logo.png" className="w-[214px] md:me-[96px] mb-4 md:mb-10" />
          <ul className="space-y-4 text-sm">
            <li>25 Street, Ikeja, Lagos</li>
            <li>
              Phone: <a href="tel:+23409162876651">+234 916 287 6651</a> <br /> <a href="tell:+2347073846909">+234 707 384 6909</a>
            </li>
            <li>Email : york@jcnssolar.com</li>
          </ul>
        </div>
        <div className="grow-1 text-[#000011] max-md:mt-4 ">
          <div className="max-md:space-y-4 md:flex justify-center md:gap-x-[100px] lg:gap-x-[240px]">
            <ul className="text-sm space-y-3 md:space-y-6">
              <li className="text-[18px] font-bold">Quick Links</li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/products">Shop Products</Link>
              </li>
              <li>
                <Link href="/#hiw">How it Works</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ's</Link>
              </li>
            </ul>
            <ul className="text-sm space-y-3 md:space-y-6">
              <li className="text-[18px] font-bold">Products</li>
              <li>
                <a href="/products#panels">Solar Panels </a>
              </li>
              <li>
                <a href="/products#fans">Solar Powered Fans</a>
              </li>
              <li>
                <a href="/products#storage">Energy Storage Systems</a>
              </li>
              <li>
                <a href="/products#inverters">Solar Inverters</a>
              </li>
              <li>
                <a href="/products#generators">Solar Generators & Systems</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-[38px] text-center text-sm">
        <span>
          © Copyright <b>Jcns Solar</b>. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
