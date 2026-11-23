import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LineUp } from "@/components/sections/LineUp";
import { VersusSection } from "@/components/sections/VersusSection";
import { MoodPicker } from "@/components/sections/MoodPicker";
import { BeansSection } from "@/components/sections/BeansSection";
import { CornerSection } from "@/components/sections/CornerSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { BeanClub } from "@/components/sections/BeanClub";
import { Footer } from "@/components/sections/Footer";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LineUp />
        <VersusSection />
        <MoodPicker />
        <BeansSection />
        <CornerSection />
        <VisitSection />
        <div className="theme-forest bean-pattern relative">
          <WaveDivider color="forest" flip />
          <BeanClub />
          <Footer />
        </div>
      </main>
    </>
  );
}
