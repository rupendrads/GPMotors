export const formatDate = (date: Date | undefined): string => {
  return date
    ? date.toLocaleDateString("en-CA", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "undefined";
};

export const formatDateLongWeek = (date: Date | undefined): string => {
  return date
    ? date.toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "undefined";
};

export const formatTime = (time: string) => {
  const index = time.lastIndexOf(":");
  if (index !== -1) {
    return time.substring(0, index);
  }
  return time;
};
