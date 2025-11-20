export const setJson = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving JSON for key "${key}"`, e);
  }
};

export const getJson = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  if (item === null) return undefined;
  try {
    return JSON.parse(item) as T;
  } catch (e) {
    console.error(`Error parsing JSON for key "${key}"`, e);
    return undefined;
  }
};
