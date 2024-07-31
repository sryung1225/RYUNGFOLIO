const getTimestamp = (date: string | null): number => {
  return date ? new Date(date).getTime() : -Infinity;
};

export default getTimestamp;
