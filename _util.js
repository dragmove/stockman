export const isDefined = any => {
  if (any === null || typeof any === 'undefined') return false;

  return true;
};

export const isNumber = any => {
  if (!isDefined(any)) return false;

  return !isNaN(any) && any.constructor === Number;
};

export const not = fn => any => !fn(any);
