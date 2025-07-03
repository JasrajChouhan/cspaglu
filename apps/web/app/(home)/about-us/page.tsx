import Creator from "./_components/creator";
import CTA from "./_components/cta";
import HeroSectionAboutUs from "./_components/hero-section-about-us";

export default function AboutUs() {
  return (
    <div className="dark:border-x dark:border-b border-dashed border-x-2 border-b-2 bg-background text-foreground">
      <HeroSectionAboutUs />
      <Creator />
      <CTA />
    </div>
  );
}
