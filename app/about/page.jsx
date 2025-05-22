import Image from "next/image";
import AboutUsSection from "../components/about-us-section";
import ContactUsSection from "../components/contact-section";
import FaqQuestions from "../components/faq";
import SubHeading from "../components/subheading";
import building from "@/app/components/images/jcnsbuilding.png";
import estate from "@/app/components/images/jcnsestate.png";
import * as motion from "framer-motion/client";
import { AnimateToLeft, AnimateToLeftWithDelay, AnimateToRight, fadeInViewport } from "../components/framer-constants";

export const metadata = {
  title: "About JCNS Solar Solutions Nigeria | Trusted Solar Experts & Installers",
  description:
    "Learn about JCNS Solar Solutions, Nigeria's trusted solar energy company. Discover our mission, team, and commitment to delivering top-quality solar products and installations nationwide.",
};

const About = () => {
  return (
    <>
      <AboutUsSection />
      <div className=" contentMargin">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:px-[54px] gap-x-[76px]">
          <div className="space-y-[57px] text-end">
            <div className="space-y-6 text-start">
              <SubHeading {...fadeInViewport}>Our Vision</SubHeading>
              <p className="text-sm/[150%] text-[#6B7280]">
                At JCNS Group, our vision is to build an internationally renowned new energy brand that leads the global transformation toward
                sustainable, smart living. We aim to be at the forefront of the renewable energy industry by delivering cutting-edge off-grid solar
                solutions that meet the evolving needs of individuals, communities, and businesses around the world. By leveraging advanced
                technologies, a strong R&D foundation, and a commitment to quality, we strive to shape a future where clean, intelligent energy is
                accessible to all — empowering people, protecting our planet, and creating a better tomorrow.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={AnimateToLeft}
              viewport={{ once: true, amount: 0.5 }}
              className="relative p-2 inline-block bg-[#F3F4F6] ms-auto rounded-4"
            >
              <Image src={building} width={470} height={578} className="aspect-[470/578] h-[578px]" alt="Jcns Factory Building" />
            </motion.div>
          </div>

          <div className="space-y-[57px] mt-[72px] lg:text-end">
            <div className="space-y-6 text-start">
              <SubHeading {...fadeInViewport}>Our Mission</SubHeading>
              <p className="text-sm/[150%] text-[#6B7280]">
                Our mission is to protect green homes and enable people to enjoy a smarter, more sustainable life. Through continuous innovation and
                professional expertise, JCNS Group is committed to developing a comprehensive green energy platform tailored to the needs of off-grid
                communities. We aim to provide efficient, high-quality solar products — including photovoltaic panels, energy storage systems, and
                intelligent off-grid power solutions — to improve the lives of the 1.8 billion off-grid residents globally. Guided by our core values
                of integrity, responsibility, innovation, efficiency, and win-win cooperation, we work relentlessly to deliver excellence in every
                product and service we offer, while promoting a greener, more connected world
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={AnimateToLeftWithDelay}
              viewport={{ once: true, amount: 0.5 }}
              className="relative p-2 inline-block bg-[#F3F4F6] ms-auto rounded-4"
            >
              <Image src={estate} width={452} height={578} className="aspect-[452/578] h-[578px]" alt="Jcns Factory Building" />
            </motion.div>
          </div>
        </div>
      </div>
      <section className="contentMargin split:pt-[80px] py-12">
        <FaqQuestions />
      </section>
      <section className="contentMargin py-12">
        <ContactUsSection />
      </section>
    </>
  );
};

export default About;
