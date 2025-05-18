import Image from "next/image";
import SubHeading from "../components/subheading";
import radioImage from "../components/images/radio.png";

const AboutUsSection = () => {
  return (
    <section className="contentMargin split:flex space-y-6 items-center py-8 split:py-16">
      <div className="pe-[31px] basis-[41.55%]">
        <SubHeading>About Us</SubHeading>
        Jingchangneng Group is a group company composed of Shenzhen Jingchangneng New Energy Technology Co., Ltd., Shenzhen Xingzhijie Optoelectronics
        Co., Ltd., Jiangxi Jingchangneng Technology Co., Ltd., and Jiangxi Jingjinneng Technology Co., Ltd.
        <br />
        <br />
        The group company is headquartered in Guangming District, Shenzhen, and has two production bases in Shenzhen and Jiangxi, covering a total
        area of ​​more than 80,000 square meters. It is a national high-tech enterprise specializing in the design and manufacture of solar
        application products.
        <br />
        <br />
        After years of rapid development, high-tech solar photovoltaic panels, intelligent solar energy storage power supplies, off-grid power
        stations, off-grid smart energy solutions, etc. have become the company's core products; leading products in the solar industry.
      </div>

      <div className="split:ps-[77px]  basis-[58.45%] relative text-white max-split:space-y-6">
        <div className="space-y-3 split:absolute split:h-full -left-7 split:flex flex-col split:justify-around split:items-center">
          <div className="split:contents flex gap-3 split:h-full">
            <div className="bg-[#06402DCC] rounded-[4px] p-[13px] px-[11px] max-split:flex-1">
              <h4 className="text-2xl font-bold">100 +</h4>
              <p className="font-medium text-[16px]/[150%] ">Years of rapid development</p>
            </div>
            <div className="bg-[#06402DCC] rounded-[4px] p-[13px] px-[11px] max-split:flex-1">
              <h4 className="text-2xl font-bold">
                8000
                <span className="font-normal text-[16px]">
                  m<sup>2</sup>
                </span>
                +
              </h4>
              <p className="font-medium text-[16px]/[150%]">Industrial Park</p>
            </div>
          </div>
          <div className="bg-[#06402DCC] rounded-[4px] p-[25px] px-[11px] ">
            <h4 className="text-2xl font-bold">100 million + </h4>
            <p className="font-medium text-[16px]/[150%]">Annual Sales Revenue</p>
          </div>
        </div>
        <Image src={radioImage} className="object-cover w-full rounded-[4px]" alt="Jcns Electronic devices powered by solar" />
      </div>
    </section>
  );
};

export default AboutUsSection;
