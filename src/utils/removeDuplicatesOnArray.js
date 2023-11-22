export const removeDuplicatesOnArray = (array) => {
  const uniqueArray = array.filter(
    (item, pos, self) => self.indexOf(item) === pos
  );

  return uniqueArray;
};
