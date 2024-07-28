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

const getYears = (value: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = value; i <= currentYear; i++) {
    years.push({ id: String(i - value), name: i.toString() });
  }

  return years.reverse();
};

export { getDaysInMonth, getYears };
