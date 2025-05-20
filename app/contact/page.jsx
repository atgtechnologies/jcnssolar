import FaqQuestions from "../components/faq";
import ContactUsSection from "@/app/components/contact-section";

const Contact = () => {
  return (
    <div className="space-y-10 split:mt-10 contentMargin">
      <ContactUsSection />
      <div className="mt-20">
        <FaqQuestions />
      </div>
    </div>
  );
};

export default Contact;
