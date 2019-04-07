import moment from 'moment';

const getYear = date => moment(date).year();
const format = (date, current) => current ? `${getYear(date)} - current` : `${getYear(date)}`;

export {
  getYear,
  format,
} 