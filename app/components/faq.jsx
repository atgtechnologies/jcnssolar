"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "../data/faqquestions";
import SubHeading from "./subheading";
import { fadeInViewport } from "./framer-constants";

const FaqQuestions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <SubHeading {...fadeInViewport} id="faq">
        FAQ's
      </SubHeading>

      <ul className="space-y-[35px]">
        {FAQ.map((faq) => (
          <li key={faq.id}>
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left py-6 px-3 cursor-pointer rounded-[8px] border-2 border-[#E5E7EB] font-semibold"
            >
              {faq.question}
            </button>

            <AnimatePresence initial={false}>
              {activeFaq === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="py-6 px-3 font-medium">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqQuestions;
