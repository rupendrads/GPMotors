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

/**
 * Predefined holiday dates that will be disabled for bookings
 * Simply list all the dates you want to disable
 */
export const HOLIDAY_DATES = [
  new Date(2025, 11, 24), // Dec 24, 2025
  new Date(2025, 11, 25), // Dec 25, 2025
  new Date(2025, 11, 26), // Dec 26, 2025
  new Date(2025, 11, 27), // Dec 27, 2025
  new Date(2025, 11, 28), // Dec 28, 2025
  new Date(2025, 11, 29), // Dec 29, 2025
  new Date(2025, 11, 30), // Dec 30, 2025
  new Date(2025, 11, 31), // Dec 31, 2025
  new Date(2026, 0, 1),   // Jan 1, 2026
  new Date(2026, 0, 2),   // Jan 2, 2026
];
