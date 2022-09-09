import { ReactElement } from 'react';

export const removeWord = (
  arr: (string | ReactElement)[]
): (string | ReactElement)[] => {
  const arrCopy = [...arr];
  arrCopy.pop();
  return arrCopy;
};
