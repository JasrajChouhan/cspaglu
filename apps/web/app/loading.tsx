"use client";

import { Loader2Icon } from "lucide-react";
import { Particles } from "components/ui/particles";
import React from "react";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-background text-foreground">
      <Particles className="absolute inset-0 -z-10" />

      <div className="flex flex-col items-center justify-center space-y-6">
        <Loader2Icon className="h-16 w-16 animate-spin text-muted-foreground" />
        <h1 className="text-2xl font-semibold">Hold tight...</h1>
        <p className="text-muted-foreground text-sm max-w-md text-center">
          We&apos;re getting things ready for you. Just a few more moments.
        </p>
      </div>
    </div>
  );
}
