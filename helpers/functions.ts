import { ReactElement } from 'react';

export const removeWord = (
  arr: (string | ReactElement)[]
): (string | ReactElement)[] => {
  const arrCopy = [...arr];
  arrCopy.pop();
  return arrCopy;
};

export const getAllIndexes = (arr, val) => {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
};

export const randomIntegerInterval = (val: number, variation: number) => {
  const max = val + variation;
  const min = val - variation;
  return Math.floor(Math.random() * (max - min + 1) + min);
};
