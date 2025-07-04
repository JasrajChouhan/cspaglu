"use client";
import { useRouter } from "next/navigation";
import { useFeatureFlags } from "hook";

export default function Page() {
  const { loading, flags } = useFeatureFlags();
  const router = useRouter();
  if (loading) return <p>Loading...</p>;

  if (!flags.waitlistEnded) {
    router.push("/");
  }

  return <div> Full site unlocked!</div>;
}
