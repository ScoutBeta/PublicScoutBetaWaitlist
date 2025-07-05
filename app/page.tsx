import ScoutLocation from "@/app/components/ScoutLocation";
import ScoutShowCase from "@/app/components/ScoutShowCase";
import SecureSpot from "@/app/components/SecureSpot";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Faq from "@/app/components/Faq";
import Hero from "@/app/components/Hero";


export default function Home() {
  return (
    <>
      <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <Hero />
        <ScoutLocation />
        <ScoutShowCase />
        <Faq />
        <SecureSpot />
        <Footer />
      </div>
    </>
  );
}
