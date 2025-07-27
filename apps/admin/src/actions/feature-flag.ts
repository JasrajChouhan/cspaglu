const API_BASE_URI = `${process.env.NEXT_PUBLIC_API_URI}/api/v1`;

export async function FetchFeaturesFlags() {
  const resp = await fetch(`${API_BASE_URI}/features/flag`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(resp);

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to get features flags");
  }

  const result = await resp.json();
  console.log(result);
  return result;
}

export async function ToggleFeatureFlag(featureName: string) {
  const resp = await fetch(
    `${API_BASE_URI}/features/flag/toggle/flag-status/${featureName}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!resp.ok) {
    const message = await resp.text();
    throw new Error(message || "Failed to update feature");
  }

  const result = await resp.json();
  return result.data;
}
