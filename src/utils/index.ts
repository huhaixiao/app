export const getQueryParam = (key: string): string => {
  const { search } = window.location;
  const cache: Record<string, string> = {};
  search
    .replace("?", "")
    .split("&")
    .reduce((acc, item) => {
      const [key, value] = item.split("=");
      acc[key] = value;
      return acc;
    }, cache);

  return cache[key];
};
