import {
  useCallback,
  useEffect,
  useRef,
  useReducer,
  ReactElement,
} from 'react';
import { reducer } from './reducer';
import { isEqual } from 'lodash';
import { nanoid } from '@reduxjs/toolkit';

export interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  texts = [],
  typeSpeed = 50,
  deleteSpeed = 200,
  delaySpeed = 1500,
}: TypewriterProps): (string | ReactElement)[] => {
  const [{ isDeleting, speed, text, countText, indexWord }, dispatch] =
    useReducer(reducer, {
      isDeleting: false,
      speed: typeSpeed,
      text: [],
      countText: 0,
      indexWord: 0,
    });

  const firstRun = useRef(true);

  function getAllIndexes(arr, val) {
    var indexes = [],
      i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }

  const splitText = useCallback((string: string) => {
    let ampersand: React.ReactElement;
    let point: React.ReactElement;
    const strArr: (string | ReactElement)[] = string.split('');
    const allIndexesAmp = getAllIndexes(strArr, '&');
    const allIndexesPoint = getAllIndexes(strArr, '.');

    if (strArr.includes('&')) {
      ampersand = (
        <span key={nanoid()} className='font-bold text-primary'>
          &
        </span>
      );

      allIndexesAmp.forEach((i) => {
        strArr[i] = ampersand;
      });
    }

    if (strArr.includes('.')) {
      point = (
        <span
          key={nanoid()}
          className='font-bold text-primary font-anton animate-pulse'
        >
          .
        </span>
      );

      allIndexesPoint.forEach((i) => {
        strArr[i] = point;
      });
    }

    // console.log(strArr);
    return strArr;
  }, []);

  const handleTyping = useCallback(() => {
    const indexText = countText % texts.length;
    const textArr = splitText(texts[indexText]);

    const word = textArr[indexWord];
    console.log(indexWord, word);

    if (!isDeleting) {
      dispatch({ type: 'TYPE', payload: word, speed: typeSpeed });

      if (indexWord === textArr.length - 1) {
        dispatch({ type: 'SPEED', payload: delaySpeed });
      }
    } else {
      dispatch({ type: 'DELETE', speed: deleteSpeed });

      if (isEqual(text, [])) dispatch({ type: 'COUNT' });
    }
  }, [
    isDeleting,
    countText,
    splitText,
    indexWord,
    texts,
    text,
    delaySpeed,
    deleteSpeed,
    typeSpeed,
  ]);

  useEffect(() => {
    let typing;
    if (!firstRun.current) {
      typing = setTimeout(handleTyping, speed);
    }

    return () => {
      clearTimeout(typing);
      firstRun.current = false;
    };
  }, [handleTyping, speed]);

  return text;
};
