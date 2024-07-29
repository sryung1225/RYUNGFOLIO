const parseDate = (date: string) => {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  const month = (formatDate.getMonth() + 1).toString().padStart(2, '0');
  const day = formatDate.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
};

export default parseDate;
