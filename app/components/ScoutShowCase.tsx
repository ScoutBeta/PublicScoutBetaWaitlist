"use client";

import SuccessMessage from "@/app/components/SuccessMessage";
import CustomButton from "@/app/components/CustomButton";
import { showCaseData } from "@/app/utils/homeData";
import WaitList from "@/app/components/WaitList";
import { Modal } from "@/app/components/Modal";
import Card from "@/app/components/Card";
import { useState } from "react";
import { motion } from "framer-motion";

/* ----------------------------------
   Animation Variants
----------------------------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7 },
  }),
};

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

export default function ScoutShowCase() {
  const [showWaitListForm, setShowWaitListForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <>
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="text-center px-6 lg:px-6 py-10 md:pt-16 md:pb-20 lg:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <motion.p
            variants={textVariant}
            custom={0}
            className="text-[#005F73] font-semibold text-xl mb-4"
          >
            Showcase Your Space
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={textVariant}
            custom={0.15}
            className="font-bold text-xl md:text-4xl text-[#202020]"
          >
            Make Your Space Known And Start Earning
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textVariant}
            custom={0.3}
            className="mt-6 text-[#2A2A2A] px-6 md:px-24 max-w-2xl mx-auto"
          >
            Share your one-of-a-kind property with filmmakers and generate
            passive income—it&apos;s easy and safe.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6"
          >
            {showCaseData.map((item, index) => (
              <motion.div key={index} variants={cardVariant}>
                <Card
                  title={item.title}
                  icon={item.icon}
                  content={item.content}
                  cardStyle="max-w-[400px] px-4"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomButton
              name="Join the Waitlist"
              buttonStyle="bg-[#005F73] hover:bg-[#432818] w-fit mx-auto mt-10 flex items-center justify-between"
              onClick={() => setShowWaitListForm(true)}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Modals */}
      <Modal show={showWaitListForm} onClose={() => setShowWaitListForm(false)}>
        <WaitList
          setShowWaitListForm={setShowWaitListForm}
          showWaitListForm={showWaitListForm}
          setShowSuccessMessage={setShowSuccessMessage}
        />
      </Modal>

      <Modal
        show={showSuccessMessage}
        onClose={() => setShowSuccessMessage(false)}
      >
        <SuccessMessage />
      </Modal>
    </>
  );
}
