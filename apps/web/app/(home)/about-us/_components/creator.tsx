"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@cspaglu/ui/components/ui/button";
import Image from "next/image";
import { Coffee, Github, Instagram, Trees, Twitter } from "lucide-react";
import Link from "next/link";

type CreatorData = {
  name: string;
  avatar_url: string;
  bio: string | null;
  html_url: string;
};

export const socialMediaDataOfCreator = [
  {
    icon: <Github />,
    text: "Github",
    href: "https://github.com/JasrajChouhan",
  },
  {
    icon: <Instagram />,
    text: "Instagram",
    href: "https://instagram.com/isjasrajchouha",
  },
  {
    icon: <Twitter />,
    text: "X/Twitter",
    href: "https://x.com/isjasrajchouha",
  },

  {
    icon: <Trees />,
    text: "Linktree",
    href: "https://linktr.ee/isjasrajchouhan",
  },
  {
    icon: <Coffee />,
    text: "Buy a Coffie",
    href: "https://buymeacoffee.com/isjasrajchouhan",
  },
];

export default function Creator() {
  const [creator, setCreator] = useState<CreatorData | null>(null);

  useEffect(() => {
    async function getCreatorDetail() {
      try {
        const res = await fetch("https://api.github.com/users/JasrajChouhan");
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Something went wrong");

        toast.success("Successfully fetched creator data!");

        setCreator({
          name: data.name || "Jasraj Chouhan",
          avatar_url: data.avatar_url,
          bio: data.bio || "Founder & Developer",
          html_url: data.html_url,
        });
      } catch (error) {
        console.error("Failed to fetch creator info:", error);
        toast.error("Failed to load creator data");
      }
    }

    getCreatorDetail();
  }, []);

  return (
    <section className="w-full px-6 bg-background text-foreground py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left ">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            About{" "}
            <span className="dark:text-white border bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 border-dashed px-2 dark:hover:bg-zinc-900 transition-colors duration-200">
              CREATOR
            </span>
          </h1>
        </div>

        <div className="flex justify-center md:justify-start">
          <Image
            src={"/dev.png"}
            alt={creator?.name || "Your profile"}
            height={200}
            width={200}
          />
        </div>

        {/* Bio Description */}
        <div className="flex-1 w-full">
          <div className="bg-cyan-50 dark:bg-muted/20 border border-dashed rounded-xl px-6 py-6 md:px-8 md:py-6 max-w-prose mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-left">
              {creator?.bio?.split(". ").map((line, idx) => (
                <span key={idx}>
                  {line.trim()}
                  {line.trim().endsWith(".") ? "" : "."}
                  <br />
                </span>
              )) || "Founder & Developer"}
            </p>

            <div className="flex gap-x-2 items-center mt-6 ">
              {socialMediaDataOfCreator.map((data) => (
                <Link key={data.text} href={data.href}>
                  <Button variant="outline">
                    {data.icon}
                    {data.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
