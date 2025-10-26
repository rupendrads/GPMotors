export const getDaysInMonth = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      return 30;
    case 2: // February
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    default:
      return -1; // Invalid month
  }
};

export const getAllDatesInMonth = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  const dates: Date[] = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const getAllFutureDatesInMonth = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  const dates: Date[] = [];
  const date = new Date(year, month, new Date().getDate());

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const getPendingDaysInMonth = () => {
  const today = new Date();
  const daysInMonth = getDaysInMonth({
    month: today.getMonth(),
    year: today.getFullYear(),
  });
  const pendingDaysInMonth = daysInMonth - today.getDate();
  return pendingDaysInMonth;
};
