"use client";
import SuccessMessage from "@/app/components/SuccessMessage";
import CustomButton from "@/app/components/CustomButton";
import { heroImageData } from "@/app/utils/homeData";
import WaitList from "@/app/components/WaitList";
import { Modal } from "@/app/components/Modal";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showWaitListForm, setShowWaitListForm] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image change effect Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="bg-[#F8F7F3]">
        <section>
          <div className="relative rounded-xl">
            <Image
              src={heroImageData[currentIndex].imageUrl}
              alt={`${heroImageData[currentIndex].name}`}
              width={1440}
              height={922}
              sizes="100vw"
              priority
              quality={100}
              className="h-[700px] w-full lg:h-[922px] lg:w-full object-cover transition-opacity duration-1000 ease-in-out"
            />
            <div className="flex flex-col justify-between md:px-8 pb-32 lg:px-24 md:pb-24 absolute inset-0 bg-[rgba(38,4,52,0.62)] overflow-x-hidden">
              <div />
              <div className="flex items-center justify-between md:max-w-5xl max-w-7xl mx-auto gap-4 lg:gap-12 xl:gap-20  mt-16 lg:mt-4">
                {heroImageData.map((item, index) => (
                  <p
                    key={item.id}
                    className={`text-base lg:text-lg whitespace-nowrap ${
                      index === currentIndex
                        ? "bg-gradient-to-b from-[#4a4a4a] to-[#FFB100] bg-clip-text text-transparent font-bold"
                        : "text-white font-medium"
                    } ${index !== currentIndex ? "hidden md:block" : ""} `}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="text-center text-[#FFFFFF] md:mt-0 max-w-5xl mx-auto">
                <p className="font-bold text-3xl md:text-5xl xl:text-6xl lg:px-7 md:leading-16 xl:leading-20">
                  Discover Your Ideal Film Location—Quickly and Effortlessly
                </p>
                <p className="text-base p-3 md:text-lg my-12 max-w-2xl mx-auto">
                  The ultimate platform linking production teams with
                  exceptional locations
                </p>
                <CustomButton
                  name="Join Waitlist"
                  buttonStyle="border h-fit w-[200px] lg:w-[220px] flex items-center justify-center mx-auto mt-12"
                  onClick={() => setShowWaitListForm(true)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
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
