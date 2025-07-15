export const convertTimeToMinutes = (time: string) => {
  console.log(time);
  const hours = time.substring(0, 2);
  console.log("hours", hours);
  console.log(time);
  const minutes = time.substring(3, 5);
  console.log("minutes", minutes);
  const totalMinutes = Number(hours) * 60 + Number(minutes);
  return totalMinutes;
};

export const convertMinutesToTime = (totalMinutes: number) => {
  const hours = totalMinutes / 60;
  const minutes = totalMinutes % 60;
  const time =
    (hours.toString().length === 1
      ? "0" + hours.toString()
      : hours.toString()) +
    ":" +
    (minutes.toString().length === 1
      ? "0" + minutes.toString()
      : minutes.toString()) +
    ":00";
  return time;
};

export const countOccurrences = (arr: string[], value: string): number => {
  console.log("bf arr", arr);
  console.log("bf value", value);
  return arr.reduce((count, current) => {
    console.log("bf count", count);
    return current === value ? count + 1 : count;
  }, 0);
};
