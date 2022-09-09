import {
  useCallback,
  useEffect,
  useRef,
  useReducer,
  ReactElement,
} from 'react';
import { isEqual } from 'lodash';
import { nanoid } from '@reduxjs/toolkit';
import { getAllIndexes, randomIntegerInterval } from '../helpers/functions';
import { removeWord } from '../helpers/functions';

export interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  texts = [],
  typeSpeed = 70,
  deleteSpeed = 150,
  delaySpeed = 2000,
}: TypewriterProps): (string | ReactElement)[] => {
  const [{ isDeleting, speed, text, countText, indexWord }, dispatch] =
    useReducer(reducer, {
      isDeleting: false,
      speed: randomIntegerInterval(typeSpeed, 50),
      text: [],
      countText: 0,
      indexWord: 0,
    });

  const firstRun = useRef(true);

  const turnTextCharInReactElement = useCallback(
    (text: string, chars: string | string[]) => {
      const textArr: (string | ReactElement)[] = text.split('');
      let charElement: ReactElement;

      if (Array.isArray(chars)) {
        chars.forEach((char) => {
          const allIndexesChar = getAllIndexes(textArr, char);
          if (textArr.includes(char)) {
            charElement = (
              <span
                key={nanoid()}
                className='font-bold font-montserrat text-primary'
              >
                {char}
              </span>
            );

            allIndexesChar.forEach((i) => {
              textArr[i] = charElement;
            });
          }
        });
      } else {
        if (textArr.includes(chars)) {
          const allIndexesChar = getAllIndexes(textArr, chars);
          charElement = (
            <span
              key={nanoid()}
              className='font-bold font-montserrat text-primary'
            >
              {chars}
            </span>
          );

          allIndexesChar.forEach((i) => {
            textArr[i] = charElement;
          });
        }
      }

      return textArr;
    },
    []
  );

  const handleTyping = useCallback(() => {
    const indexText = countText % texts.length;
    const textArr = turnTextCharInReactElement(texts[indexText], '&');
    const word = textArr[indexWord];

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
        speed: randomIntegerInterval(deleteSpeed, 30),
      });

      if (isEqual(text, [])) dispatch({ type: 'TRANSITION_START' });
    }
  }, [
    isDeleting,
    countText,
    turnTextCharInReactElement,
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
