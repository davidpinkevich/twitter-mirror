import { type TypeDate } from 'types';

const checkDate = (date: TypeDate) => {
  return Object.values(date).every((value) => Boolean(value));
};

export { checkDate };
