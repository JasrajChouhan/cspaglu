"use client";

import React from "react";

export const useFeatureFlags = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [flags, setFlags] = React.useState<{ [key: string]: boolean }>({});

  const API_BASE_URI = process.env.NEXT_PUBLIC_API_URI;

  React.useEffect(() => {
    fetch(`${API_BASE_URI}/api/v1/features/flags`)
      .then((res) => res.json())
      .then((data) => {
        setFlags(data.flags || {});
        setLoading(false);
      });
  }, []);

  return { loading, flags };
};
