const getTime = (timestamp: number) => {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  return `${hours}:${minutes} ${month} ${day}`;
};

export { getTime };
