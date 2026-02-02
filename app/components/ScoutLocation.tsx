"use client";

import { locationData } from "@/app/utils/homeData";
import Card from "@/app/components/Card";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

export default function ScoutLocation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1 }}
      className="text-center px-6 py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[#005F73] font-semibold text-xl mb-4">
          Get Locations Seamlessly
        </p>

        <h2 className="font-bold text-xl md:text-4xl text-[#202020]">
          End The Hassle of Location Scouting
        </h2>

        <p className="mt-6 text-[#2A2A2A] max-w-2xl mx-auto">
          Save time on scouting and focus on creating. With our vast collection
          of distinctive locations, you can explore, refine your search, and
          secure your perfect spot in no time.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
        >
          {locationData.map((item, index) => (
            <motion.div key={index} variants={card}>
              <Card
                title={item.title}
                icon={item.icon}
                content={item.content}
                cardStyle="max-w-[400px] px-6"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
