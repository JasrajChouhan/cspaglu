export const waitListStatus = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/v1/features/flags`,
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
