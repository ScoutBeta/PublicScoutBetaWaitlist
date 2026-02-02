"use client";

import Image from "next/image";
import { FooterList } from "@/app/utils/footerLinks";
import BrandLogo from "@/public/assets/scoutbeta-color-logo.png";
import { motion } from "framer-motion";

const footerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 140 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1 }}
      className="bg-[#432818] px-4 py-20 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-4xl">Scoutbeta</h2>

        <p className="mt-6 max-w-3xl text-sm md:text-base leading-6">
          Scoutbeta is a digital platform designed to connect location managers,
          filmmakers, and creatives with unique rentable spaces.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.4 }}
          className="border-y border-white/40 py-12 my-12 grid md:grid-cols-3 gap-10"
        >
          <motion.div variants={footerItem}>
            <Image
              src={BrandLogo}
              alt="Scoutbeta logo"
              width={200}
              height={60}
              className="mb-6"
            />
            <p>© {currentYear} Scoutbeta.</p>
            <p>All Rights Reserved</p>
          </motion.div>

          {FooterList.map((item, index) => (
            <motion.div key={index} variants={footerItem}>
              <h4 className="font-semibold mb-4">{item.headings}</h4>
              {item.subHeadings.map((sub, i) => (
                <p
                  key={i}
                  className={`leading-8 ${
                    sub.includes("@") || sub.includes(".com")
                      ? "text-[#2DCA73]"
                      : ""
                  }`}
                >
                  {sub}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
