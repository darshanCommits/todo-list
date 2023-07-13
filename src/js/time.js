import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from 'date-fns';

export const getFormattedDate = (date) => format(date, 'dd/MM/yy');

export const getItemAge = (current, toCompare) => {
  const age = {
    min: differenceInMinutes(current, toCompare),
    hour: differenceInHours(current, toCompare),
    day: differenceInDays(current, toCompare),
  };
  return age;
};

export const getRelativeTime = (age) => {
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
