export const not = function (func) {
  return function (object) {
    return !func(object);
  };
};