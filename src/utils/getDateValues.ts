import { DATE_PERIODS } from 'constants/datePeriods';

const getDaysInMonth = (monthId = '', year = '') => {
  const currentYear = new Date().getFullYear();
  const targetYear = year ? parseInt(year) : currentYear;

  if (monthId === '') {
    return Array.from({ length: 31 }, (_, i) => i + 1).map((item, index) => ({
      id: String(index),
      name: String(item),
    }));
  }

  const monthNumber = parseInt(monthId);

  const date = new Date(targetYear, monthNumber + 1, 0);
  const daysInMonth = date.getDate();

  return Array.from({ length: daysInMonth }, (_, i) => i + 1).map((item, index) => ({
    id: String(index),
    name: String(item),
  }));
};

const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = DATE_PERIODS.startYear; i <= currentYear; i++) {
    years.push({ id: String(i - DATE_PERIODS.startYear), name: i.toString() });
  }

  return years.reverse();
};

const stringDate = (date: { day: string; month: string; year: string }) => {
  const day = Number(date.day) + 1 < 10 ? `0${Number(date.day) + 1}` : `${Number(date.day) + 1}`;
  const month =
    Number(date.month) + 1 < 10 ? `0${Number(date.month) + 1}` : `${Number(date.month) + 1}`;
  const year = getYears().find((item) => item.id === date.year)?.name;

  return `${day}.${month}.${year}`;
};

export { getDaysInMonth, getYears, stringDate };
