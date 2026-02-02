"use client";

import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SecureSpot() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1 }}
      className="text-center px-4 py-20 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-bold text-xl md:text-4xl text-[#202020]"
        >
          Enter your email address to secure your spot and get notified when we
          launch
        </motion.h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <form>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full md:w-[70%] p-4 border border-[#8F8F8F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#005F73]"
              />

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <CustomButton
                  name="Join the Waitlist"
                  buttonStyle="bg-[#005F73] hover:bg-[#432818]"
                  onClick={() => router.push("#")}
                />
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
