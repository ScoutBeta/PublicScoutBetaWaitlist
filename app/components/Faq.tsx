"use client";

import { ArrowDown, MessageSquare } from "lucide-react";
import { faqData } from "@/app/utils/FaqData";
import { motion } from "framer-motion";
import { useState } from "react";

const sectionVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="px-4 py-20 bg-[#F8F8F8]"
    >
      <div className="text-center max-w-[700px] mx-auto">
        <h2 className="font-bold text-xl md:text-4xl text-[#161616]">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="font-semibold text-2xl mt-3 text-[#4A4A4A]">
          Any questions? We got you.
        </p>
      </div>

      <div className="md:flex max-w-6xl mx-auto gap-12 mt-20 items-start">
        {/* FAQ LIST */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-[#404040] rounded-2xl md:w-[65%] shadow-[5px_5px_0_rgba(38,38,38,0.7)]"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              onClick={() =>
                setActiveFaq(activeFaq === index ? null : index)
              }
              className="p-6 border-b last:border-b-0 cursor-pointer"
            >
              <div className="flex justify-between items-start gap-4">
                <p className="text-lg font-medium text-[#011512]">
                  {faq.question}
                </p>

                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#432818] p-1 rounded-full text-white"
                >
                  <ArrowDown size={16} />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={activeFaq === index ? "open" : "closed"}
                variants={{
                  open: {
                    height: "auto",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                  closed: {
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-[#4A4A4A]">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-white px-10 py-12 rounded-2xl text-center md:w-[35%] shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          <MessageSquare className="text-[#005F73] size-20 mx-auto" />
          <h3 className="font-bold text-2xl mt-8 text-[#161616]">
            Do you have more questions?
          </h3>
          <p className="mt-6 mb-10 text-[#4A4A4A]">
            Check out our FAQ or contact us directly.
          </p>

          <a
            href="mailto:support@scoutbeta.com"
            className="bg-[#005F73] hover:bg-[#432818] text-white px-6 py-4 rounded-md font-medium inline-block"
          >
            Send an email
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
