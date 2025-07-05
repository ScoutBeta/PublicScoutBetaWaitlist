"use client";
import { locationData } from "@/app/utils/homeData";
import Card from "@/app/components/Card";

export default function ScoutLocation() {
  return (
    <section className="text-center px-6 lg:px-6 py-10 md:pt-16 md:pb-20 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div>
          <p className="text-[#005F73] font-semibold text-xl mb-4">
            Get Locations Seamlessly
          </p>
          <h2 className="font-bold text-xl md:text-4xl text-[#202020]">
            End The Hassle of Location Scouting
          </h2>
          <p className="mt-6 text-[#2A2A2A] px-6 md:px-24 max-w-2xl mx-auto">
            Save time on scouting and focus on creating. With our vast
            collection of distinctive locations, you can explore, refine your
            search, and secure your perfect spot in no time.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            {locationData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                icon={item.icon}
                content={item.content}
                cardStyle="max-w-[400px] px-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
