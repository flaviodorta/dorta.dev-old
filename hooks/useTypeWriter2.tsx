import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const useTypeWriter = (
  strings: string[],
  writingDelay?: number,
  deletingDelay?: number,
  initialDelay?: number,
  finalDelay?: number
) => {
  const [words, setWords] = useState<Array<React.ReactElement | string>>([]);

  const wordsArr = useRef([]);
  const letterIdx = useRef(0);
  const stringsIdx = useRef(0);
  const isWriting = useRef(true);

  const string = strings[stringsIdx.current];

  const checkLetter = (
    letter: string,
    arr: Array<React.ReactElement | string>
  ) => {
    let ampersand: React.ReactElement;
    let point: React.ReactElement;

    if (letter === '&') {
      ampersand = (
        <span key={nanoid()} className='font-bold text-primary'>
          &
        </span>
      );

      return [...arr, ampersand];
    }

    if (letter === '.') {
      point = (
        <span
          key={nanoid()}
          className='font-bold text-primary font-anton animate-pulse'
        >
          .
        </span>
      );

      return [...arr, point];
    }

    return [...arr, letter];
  };

  const randomInteger = () =>
    Math.floor(Math.random() * (1000 - 500 + 1) + 500);

  const delay = (delay: number) => new Promise((res) => setTimeout(res, delay));

  const settingLetterIdx = () => {
    if (wordsArr.current.length === string.length) {
    }
  };

  useEffect(() => {
    const letter = string[letterIdx.current];
    let timer;
    console.log('cu', isWriting.current);

    const writing = async () => {
      console.log(words);
      await delay(10000);
      console.log(words);
      if (wordsArr.current.length !== string.length) {
        wordsArr.current.push(letter);
        letterIdx.current++;
        setWords([...wordsArr.current]);
      }
    };

    const deleting = async () => {
      await delay(randomInteger());
      if (wordsArr.current.length !== 0) {
        wordsArr.current.pop();
        letterIdx.current--;
        setWords([...wordsArr.current]);
      }
    };

    if (isWriting.current) {
      writing();
      console.log(letterIdx, wordsArr, words);
    }
  }, [words]);

  return words;
};

// useEffect(() => {
//   let timer;
//   if (state.isWriting) {
//     if (state.writing.length === string.length) {
//       timer = setTimeout(
//         () =>
//           setState((state) => ({
//             ...state,
//             isWriting: false,
//           })),
//         initialDelay
//       );
//     } else {
//       setTimeout(
//         () =>
//           setState((state) => ({
//             ...state,
//             writing: checkLetter(string[state.letterIdx], state.writing),
//             letterIdx: state.letterIdx + 1,
//           })),
//         writingDelay
//       );
//     }
//   }

//   if (!state.isWriting) {
//     if (state.writing.length === string.length) {
//       timer = setTimeout(
//         () =>
//           setState((state) => ({
//             ...state,
//             isWriting: true,
//           })),
//         finalDelay
//       );
//     } else {
//       setTimeout(
//         () =>
//           setState((state) => ({
//             ...state,
//             writing: checkLetter(string[state.letterIdx], state.writing),
//             letterIdx: state.letterIdx - 1,
//           })),
//         writingDelay
//       );
//     }
//   }

//   console.log(state, string);

//   return () => {
//     clearTimeout(timer);
//   };
// }, [string, state, setState, writingDelay, initialDelay, finalDelay]);
