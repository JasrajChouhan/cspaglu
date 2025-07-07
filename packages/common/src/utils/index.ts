const now = new Date();
export const formattedDate = now.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
