"use client";
import SuccessMessage from "@/app/components/SuccessMessage";
import CustomButton from "@/app/components/CustomButton";
import { showCaseData } from "@/app/utils/homeData";
import WaitList from "@/app/components/WaitList";
import { Modal } from "@/app/components/Modal";
import Card from "@/app/components/Card";
import { useState } from "react";

export default function ScoutShowCase() {
  const [showWaitListForm, setShowWaitListForm] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  return (
    <>
      <section className="text-center px-6 lg:px-6 py-10 md:pt-16 md:pb-20 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div>
            <p className="text-[#005F73] font-semibold text-xl mb-4">
              Showcase Your Space
            </p>
            <h2 className="font-bold text-xl md:text-4xl text-[#202020]">
              Make Your Space known And Start Earning
            </h2>
            <p className="mt-6 text-[#2A2A2A] px-6 md:px-24 max-w-2xl mx-auto">
              Share your one-of-a-kind property with filmmakers and generate
              passive income—it&apos;s easy and safe.
            </p>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
              {showCaseData.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  content={item.content}
                  cardStyle="max-w-[400px] px-4"
                />
              ))}
            </div>
            <CustomButton
              name="Join the Waitlist"
              buttonStyle="bg-[#005F73] hover:bg-[#432818] w-fit mx-auto mt-10 flex items-center justify-between"
              onClick={() => setShowWaitListForm(true)}
            />
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
