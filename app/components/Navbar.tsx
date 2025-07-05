"use client";
import SuccessMessage from "@/app/components/SuccessMessage";
import CustomButton from "@/app/components/CustomButton";
import WaitList from "@/app/components/WaitList";
import { Modal } from "@/app/components/Modal";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showWaitListForm, setShowWaitListForm] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full fixed z-10 backdrop-blur-md bg-white/90">
        <div className="flex justify-between items-center px-4 md:max-w-5xl xl:max-w-6xl mx-auto py-3">
          <Image
            src="/assets/scoutbeta-logo.png"
            alt="Scoutbeta Brand logo"
            width={231}
            height={76}
            sizes="100vw"
            priority
            quality={100}
            className="object-contain w-fit h-[36px] md:object-cover md:h-[56px]"
          />
          <CustomButton
            name="Join the Waitlist"
            buttonStyle="bg-[#005F73] hover:bg-[#432818] w-fit h-fit flex items-center justify-between"
            onClick={() => setShowWaitListForm(true)}
          />
        </div>
      </nav>

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
