export const existy = (obj) => (obj != null);

export const isDefined = (obj) => {
  if (obj === null || typeof obj === 'undefined') return false;

  return true;
};