"use client";

import React from "react";
import { Particles } from "components/ui/particles";
import { Button } from "@cspaglu/ui/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = (): React.ReactNode => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <Particles className="absolute inset-0 -z-10 " />
      <h1 className="text-4xl font-bold lg:text-[15rem] mt-10 flex">
        4 <span className="stroke-text mx-4">0</span>4
      </h1>
      <p className="text-lg mt-36 text-muted-foreground">
        Don&apos; checkout me, I&apos; not cute. Go your Home
      </p>
      <Button
        className="mt-6"
        variant={"secondary"}
        onClick={() => router.push("/")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
