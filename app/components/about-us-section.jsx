import Image from "next/image";
import SubHeading from "../components/subheading";
import radioImage from "../components/images/radio.png";
import * as motion from "framer-motion/client";
import AboutFloater from "./about-floater";
import { AnimateToLeft, StaggerParent } from "./framer-constants";

const AboutUsSection = () => {
  return (
    <section className="contentMargin split:flex space-y-6 items-center py-8 split:py-16">
      <div className="pe-[31px] basis-[41.55%]">
        <SubHeading
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          About Us
        </SubHeading>
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

      <motion.div
        variants={StaggerParent()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.9 }}
        className="split:ps-[77px]  basis-[58.45%] relative text-white max-split:space-y-6"
      >
        <div className="space-y-3 split:absolute split:h-full -left-7 split:flex flex-col split:justify-around split:items-center">
          <div className="split:contents flex gap-3 split:h-full">
            <AboutFloater variants={AnimateToLeft} sub="Years of rapid development" className=" max-split:flex-1">
              100 +
            </AboutFloater>
            <AboutFloater variants={AnimateToLeft} sub="Industrial Park" className=" max-split:flex-1">
              8000
              <span className="font-normal text-[16px]">
                m<sup>2</sup>
              </span>
              +
            </AboutFloater>
          </div>
          <AboutFloater variants={AnimateToLeft} sub="Annual Sales Revenue" className="p-[25px] px-[11px]">
            100 million +
          </AboutFloater>
        </div>
        <Image src={radioImage} className="object-cover w-full rounded-[4px]" alt="Jcns Electronic devices powered by solar" />
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
