"use client";

import React from "react";
import { Switch } from "@cspaglu/ui/components/ui/switch";
import { Label } from "@cspaglu/ui/components/ui/label";
import { FetchFeaturesFlags, ToggleFeatureFlag } from "actions";
import { toast } from "sonner";

type FeatureFlags = {
  flags: Record<string, boolean>;
};

export default function Page() {
  const [flags, setFlags] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res: FeatureFlags = await FetchFeaturesFlags();

        if (!res || !res.flags) {
          console.error("Feature Flags fetch failed", res);
          return;
        }

        setFlags(res.flags);
        console.log({ res });
      } catch (error) {
        console.error("Error fetching feature flags:", error);
      }
    };

    fetchFlags();
  }, []);

  const handleToggle = async (key: string) => {
    const previousValue = flags[key];
    const newValue = !previousValue;

    setFlags((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    try {
      const res = await ToggleFeatureFlag(key);
      console.log(res);
      if (res.success) {
        toast.success(`${key} is toggle`);
      }
    } catch (err) {
      console.log("Failed to toggle feature flag", err);
      setFlags((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
      toast.error(`${key} is not toggle`);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Feature Flags 🏁</h1>
      <div className="grid gap-4">
        {Object.entries(flags).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between p-4 border rounded-md shadow-sm"
          >
            <Label className="capitalize text-lg">{key}</Label>
            <Switch
              checked={value}
              onCheckedChange={() => handleToggle(key)}
              className={value ? "bg-blue-600" : "bg-black"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
