import FaqQuestions from "../components/faq";
import ContactUsSection from "@/app/components/contact-section";

export const metadata = {
  title: "Contact JCNS Solar Solutions Nigeria | Get a Free Solar Quote or Consultation",
  description:
    "Contact JCNS Solar Solutions for expert advice, free solar quotes, and support. We help homes and businesses in Nigeria switch to reliable solar power. Reach out today!",
};

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
