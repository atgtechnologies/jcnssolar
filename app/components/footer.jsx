import BackToTop from "./backToTop";

const Footer = () => {
  return (
    <div className="bg-[#F0FDF6] mt-[207px] relative">
      <div className="cursor-pointer">
        <BackToTop />
      </div>
      <div className="md:flex py-16">
        <div>
          <img src="./images/logo.png" className="w-[214px] md:me-[96px] mb-4 md:mb-10" />
          <ul className="gap-y-4 text-sm">
            <li>25 Street, Ikeja, Lagos</li>
            <li>Phone: 09027389374</li>
            <li>Email : york@jcnssolar.com</li>
          </ul>
        </div>
        <div className="grow-1 text-[#000011] max-md:mt-4 ">
          <div className="max-md:space-y-4 md:flex justify-center md:gap-x-[100px] lg:gap-x-[240px]">
            <ul className="text-sm space-y-3 md:space-y-6">
              <li className="text-[18px] font-bold">Quick Links</li>
              <li>
                <a href="">Home </a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Shop Products</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">FAQ's</a>
              </li>
            </ul>
            <ul className="text-sm space-y-3 md:space-y-6">
              <li className="text-[18px] font-bold">Quick Links</li>
              <li>
                <a href="">Solar Panels </a>
              </li>
              <li>
                <a href="">Solar Batteries</a>
              </li>
              <li>
                <a href="">Solar Inverters</a>
              </li>
              <li>
                <a href="">Solar Kits & Systems</a>
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
