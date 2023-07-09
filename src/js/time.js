import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from 'date-fns';

const getCurrentDate = () => new Date();

export const getFormattedDate = (date) => format(date, 'dd/MM/yy');

export const getItemAge = (current, item) => {
  const age = {
    min: differenceInMinutes(current, item),
    hour: differenceInHours(current, item),
    day: differenceInDays(current, item),
  };
  return age;
};

const getRelativeTime = (age) => {
  const checkPlural = (value) => (value === 1 ? '' : 's');
  const getTimeString = (value, unit) =>
    `${value} ${unit}${checkPlural(value)} ago`;

  const timeInfo = [
    { check: age.min < 60, value: age.min, unit: 'minute' },
    { check: age.hour < 24, value: age.hour, unit: 'hour' },
    { check: true, value: age.day, unit: 'day' },
  ];

  const { value, unit } = timeInfo.find((info) => info.check);

  return getTimeString(value, unit);
};

const currentTime = getCurrentDate();
const item = new Date('2023-07-01T10:30:00');
const age = getItemAge(currentTime, item);

console.log(getRelativeTime(age));
