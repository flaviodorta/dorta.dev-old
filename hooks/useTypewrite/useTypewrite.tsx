import {
  useCallback,
  useEffect,
  useRef,
  useReducer,
  ReactElement,
} from 'react';
import { isEqual } from 'lodash';
import { nanoid } from '@reduxjs/toolkit';
import { getAllIndexes, randomIntegerInterval } from '../../helpers/functions';
import { removeWord } from '../../helpers/functions';

export interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  texts = [],
  typeSpeed = 70,
  deleteSpeed = 200,
  delaySpeed = 2000,
}: TypewriterProps): (string | ReactElement)[] => {
  const [{ isDeleting, speed, text, countText, indexWord }, dispatch] =
    useReducer(reducer, {
      isDeleting: false,
      speed: randomIntegerInterval(typeSpeed, 25),
      text: [],
      countText: 0,
      indexWord: 0,
    });

  const firstRun = useRef(true);

  const splitText = useCallback((string: string) => {
    let ampersand: React.ReactElement;
    let point: React.ReactElement;
    const strArr: (string | ReactElement)[] = string.split('');
    const allIndexesAmp = getAllIndexes(strArr, '&');
    const allIndexesPoint = getAllIndexes(strArr, '.');

    if (strArr.includes('&')) {
      ampersand = (
        <span key={nanoid()} className='font-bold text-primary'>
          {'&'}
        </span>
      );

      allIndexesAmp.forEach((i) => {
        strArr[i] = ampersand;
      });
    }

    // if (strArr.includes('.')) {
    //   point = (
    //     <span
    //       key={nanoid()}
    //       className='font-bold text-primary left-[1px] text-6xl font-anton animate-pulse'
    //     >
    //       {'.'}
    //     </span>
    //   );

    //   allIndexesPoint.forEach((i) => {
    //     strArr[i] = point;
    //   });
    // }

    return strArr;
  }, []);

  const handleTyping = useCallback(() => {
    const indexText = countText % texts.length;
    const textArr = splitText(texts[indexText]);

    const word = textArr[indexWord];
    console.log(indexWord, word);

    if (!isDeleting) {
      dispatch({
        type: 'TYPING',
        payload: word,
        speed: randomIntegerInterval(typeSpeed, 25),
      });

      if (indexWord === textArr.length - 1) {
        dispatch({
          type: 'TRANSITION_FINAL',
          payload: randomIntegerInterval(delaySpeed, 500),
        });
      }
    } else {
      dispatch({
        type: 'DELETING',
        speed: randomIntegerInterval(deleteSpeed, 45),
      });

      if (isEqual(text, [])) dispatch({ type: 'TRANSITION_START' });
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

export type State = {
  speed: number;
  text: (string | ReactElement)[];
  isDeleting: boolean;
  countText: number;
  indexWord: number;
};

export type Action =
  | { type: 'TRANSITION_FINAL'; payload: number }
  | { type: 'TYPING'; payload: string | ReactElement; speed: number }
  | { type: 'DELETING'; speed: number }
  | { type: 'TRANSITION_START' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TRANSITION_FINAL':
      return {
        ...state,
        isDeleting: true,
        speed: action.payload,
        indexWord: 0,
      };
    case 'TYPING':
      return {
        ...state,
        speed: action.speed,
        text: [...state.text, action.payload],
        indexWord: state.indexWord + 1,
      };
    case 'DELETING':
      return {
        ...state,
        speed: action.speed,
        text: removeWord(state.text),
      };
    case 'TRANSITION_START':
      return {
        ...state,
        isDeleting: false,
        countText: state.countText + 1,
      };
    default:
      return state;
  }
}
