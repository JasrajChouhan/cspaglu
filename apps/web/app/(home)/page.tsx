import Features from "components/fetature/feature";
import HeroSection from "components/hero/hero-section";

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Features />
    </div>
  );
}
