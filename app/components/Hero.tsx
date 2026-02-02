"use client";

import SuccessMessage from "@/app/components/SuccessMessage";
import CustomButton from "@/app/components/CustomButton";
import { heroImageData } from "@/app/utils/homeData";
import WaitList from "@/app/components/WaitList";
import { Modal } from "@/app/components/Modal";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showWaitListForm, setShowWaitListForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImageData.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-[#F8F7F3]">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={heroImageData[currentIndex].imageUrl}
                alt={heroImageData[currentIndex].name}
                width={1440}
                height={922}
                priority
                className="h-[700px] lg:h-[922px] w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[rgba(38,4,52,0.62)] flex flex-col justify-between px-6 lg:px-24 pb-60">
            <div />

            {/* Location labels */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-between max-w-5xl mx-auto gap-6"
            >
              {heroImageData.map((item, index) => (
                <p
                  key={item.id}
                  className={`text-base lg:text-lg whitespace-nowrap ${
                    index === currentIndex
                      ? "bg-gradient-to-b from-[#4a4a4a] to-[#FFB100] bg-clip-text text-transparent font-bold"
                      : "text-white hidden md:block"
                  }`}
                >
                  {item.name}
                </p>
              ))}
            </motion.div>

            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-center text-white max-w-5xl mx-auto"
            >
              <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl">
                Discover Your Ideal Film Location—Quickly and Effortlessly
              </h1>

              <p className="text-base md:text-lg my-12 max-w-2xl mx-auto">
                The ultimate platform linking production teams with exceptional
                locations
              </p>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <CustomButton
                  name="Join Waitlist"
                  buttonStyle="border w-[220px] mx-auto"
                  onClick={() => setShowWaitListForm(true)}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
