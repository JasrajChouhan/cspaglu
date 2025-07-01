import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@cspaglu/ui/components/ui/card";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  cardData: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
};

export default function FeatureCard({ cardData }: FeatureCardProps) {
  const Icon = cardData.icon;

  return (
    <Card className="transition-transform hover:-translate-y-1 hover:shadow-md hover:border-primary/50 duration-300 group dark:bg-background/80 cursor-pointer">
      <CardHeader className="flex flex-col items-start space-y-2">
        <Icon className="h-10 w-10 text-primary group-hover:scale-105 transition-transform duration-200" />
        <CardTitle className="text-lg font-semibold">
          {cardData.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {cardData.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
