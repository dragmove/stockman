export const not = (func) => {
  return (object) => {
    return !func(object);
  };
};