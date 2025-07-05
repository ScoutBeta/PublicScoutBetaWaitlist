"use client";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";

export default function SecureSpot() {
  const router = useRouter();
  return (
    <section className="text-center px-4 lg:px-6 py-10 md:p-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="font-bold text-xl md:text-4xl text-[#202020]">
            Enter your email address to secure your spot and get notified when
            we launch
          </h2>

          <div className="mt-12 p-2.5 max-w-2xl mx-auto">
            <form action="">
              <div className="flex flex-col gap-6 md:flex md:flex-row items-center justify-between">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="bg-white border-[1.3px] border-[#8F8F8F] rounded-md p-4 pr-3 w-full md:w-[70%] focus:outline-none text-black placeholder:text-[#8F8F8F] placeholder:text-xs"
                />

                <CustomButton
                  name="Join the Waitlist"
                  buttonStyle="bg-[#005F73] hover:bg-[#432818] w-fit mx-auto flex items-center justify-between"
                  onClick={() => router.push("#")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
