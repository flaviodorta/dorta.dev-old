import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const useTypeWriter = (
  strings?: string[],
  writingDelay?: number,
  initialDelay?: number,
  finalDelay?: number
) => {
  const [words, setWords] = useState<Array<React.ReactElement | string>>([]);

  const wordsArr = useRef([]);
  const letterIdx = useRef(0);
  const stringsIdx = useRef(0);
  const isWriting = useRef(true);

  // const string = strings[stringsIdx.current];

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

  const delay = (delay: number) => new Promise((res) => setTimeout(res, delay));

  useEffect(() => {
    const writing = async () => {
      console.log('before delay');
      await delay(5000);
      console.log('after delay');
    };
    if (isWriting.current) {
      writing();
    }
  }, []);

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
