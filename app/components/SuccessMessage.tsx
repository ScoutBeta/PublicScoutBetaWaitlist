import { AnimatePresence, motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SuccessMessage() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="flex flex-col items-center justify-center pb-6 bg-[#EBFCFF] rounded-xl max-w-2xl"
        >
          <div className="w-full relative">
            <Image
              src="/assets/curve-bg.png"
              alt="Success"
              width={526.52}
              height={788.84}
              className="w-full h-[155px] md:h-full rounded-t-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6 }}
              className="bg-white  p-1.5 font-extrabold rounded-full  h-fit w-fit absolute top-10 md:top-16 left-0 right-0 mx-auto "
            >
              <Check color="#005F73" className="w-16 h-16 md:w-20 md:h-20" />
            </motion.div>
          </div>
          <h2 className="text-xl md:text-2xl pt-6 font-semibold text-center text-[#005F73]">
            🎉 You&apos;re on the List! 🎉
          </h2>
          <div className="font-semibold text-[#202020] text-base py-8 px-10 md:px-24 space-y-4">
            <p>Thank you for joining the Scoutbeta Waitlist!</p>
            <p>
              You&apos;re one step closer to connecting production teams with
              incredible spaces.
            </p>
            <p>
              <span>📬</span> Keep an eye on your inbox for updates and
              exclusive early access news.
            </p>
            <p>
              <span>🚀</span> We can&apos;t wait to welcome you to the Spaeeze
              community!
            </p>
          </div>
          <ReactConfetti
            gravity={0.1}
            height={738}
            initialVelocityX={2}
            initialVelocityY={2}
            numberOfPieces={200}
            opacity={1}
            recycle
            run
            width={2560}
            wind={0}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
