import Image from "next/image";
import { FooterList } from "@/app/utils/footerLinks";
import BrandLogo from "@/public/assets/scoutbeta-color-logo.png";

export default function Footer() {
  const today: Date = new Date();
  const currentYear: number = today.getFullYear();
  return (
    <>
      <section className="bg-[#432818] px-4 lg:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-4xl">Scoutbeta</h2>
          <p className="mt-4 md:mt-8 lg:mt-10 mb-4 text-xs md:text-sm xl:text-base leading-6">
            Scoutbeta is a digital platform designed to connect location
            managers, filmmakers, and other creative professionals with unique,
            rentable spaces for film shoots, photoshoots, and events. Our app
            simplifies the process of finding, booking, and managing locations
            by bringing together a diverse catalog of properties and venues all
            in one place.
          </p>
          {/* <p className="font-bold text-sm md:text-base ">
            ISO Certification (ISO 9001, 27001).
          </p> */}
          {/* ======Links sections===== */}
          <div className="border-y-[0.5px] border-slate-200 flex flex-row gap-8 md:grid md:grid-cols-3 md:gap-6 py-10 my-10">
            <div className="text-xs md:text-sm lg:text-base flex-1 md:flex-none">
              <Image
                src={BrandLogo}
                alt="scoutBeta logo"
                width={200}
                height={60}
                sizes="100vw"
                priority
                quality={100}
                className="mb-16 object-cover"
              />
              <p>© {currentYear} Scoutbeta.</p>
              <p>All Rights Reserved</p>
            </div>
            {FooterList.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-xs md:text-base mb-4 whitespace-nowrap">
                  {item.headings}
                </h4>
                <div>
                  {item.subHeadings.map((item, index) => (
                    <ul
                      key={index}
                      className="leading-10 text-xs md:text-sm lg:text-base"
                    >
                      <li
                        className={
                          item.includes("@") || item.includes(".com")
                            ? "text-[#2DCA73]"
                            : ""
                        }
                      >
                        {item}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
