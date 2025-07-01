import { featureData } from "./index";
import FeatureCard from "./feature-card";

export default function Features() {
  return (
    <div
      id="features"
      className="container mx-auto px-4 space-y-6 py-10 md:py-14 lg:py-24 overflow-x-hidden bg-pink-50/10 dark:bg-black/10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold">
          Why Choose <span className="text-primary">CSPAGLU</span>?
        </h2>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Built for students, by engineers. Everything you need to master
          computer science, from basics to breakthroughs.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-[64rem] w-full">
        {featureData.map((feature) => (
          <FeatureCard key={feature.title} cardData={feature} />
        ))}
      </div>
    </div>
  );
}
