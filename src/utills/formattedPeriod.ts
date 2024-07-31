import parseDate from './parseDate';

const ING = '진행 중';
const formattedPeriod = (startDate: string | null, endDate: string | null) => {
  if (!startDate) return ING;
  const start = parseDate(startDate);
  if (!endDate) return `${start} - ${ING}`;
  const end = parseDate(endDate);
  return `${start} - ${end}`;
};

export default formattedPeriod;
