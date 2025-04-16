export const hoursToMs = (hr: number) => {
  return hr * 60 * 60 * 1000;
};

export const futureTimeInHr = (hr: number) => {
  return Date.now() + hr * 60 * 60 * 1000;
};
