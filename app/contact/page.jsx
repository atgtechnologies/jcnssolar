import FaqQuestions from "../components/faq";
import ContactUsSection from "@/app/components/contact-section";

const Contact = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-[10px]">
        <h1 className="text-[36px] text-neutral-100 font-bold ">Contact Us </h1>
        <h4 className="text-[18px] text-[#000011]">Get in touch</h4>
      </div>
      <ContactUsSection />
      <div className="mt-20">
        <FaqQuestions />
      </div>
    </div>
  );
};

export default Contact;
