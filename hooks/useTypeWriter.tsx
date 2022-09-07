import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const useTypeWriter = (
  strings: string[],
  writingDelay: number,
  initialDelay: number,
  finalDelay: number
) => {
  const [state, setState] = useState<{
    writing: Array<React.ReactElement | string>;
    isWriting: boolean;
    letterIdx: number;
    stringsIdx: number;
  }>({
    writing: [],
    isWriting: true,
    letterIdx: 0,
    stringsIdx: 0,
  });

  const string = strings[state.stringsIdx];

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

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  useLayoutEffect(() => {
    let timer;
    if (state.isWriting) {
      if (state.writing.length === string.length) {
        timer = setTimeout(() => {
          setState((state) => ({
            ...state,
            isWriting: false,
          }));
        }, finalDelay * 1000);
      } else {
        timer = setTimeout(() => {
          setState((state) => ({
            ...state,
            writing: checkLetter(string[state.letterIdx], state.writing),
            letterIdx: state.letterIdx + 1,
          }));
        }, writingDelay * 1000);
      }
    }

    if (!state.isWriting) {
      if (state.writing.length === 0) {
        timer = setTimeout(() => {
          setState((state) => ({
            ...state,
            isWriting: true,
            stringsIdx: (state.stringsIdx + 1) % 4,
          }));
        }, initialDelay * 1000);
      }
    } else {
      timer = setTimeout(() => {
        setState((state) => ({
          ...state,
          writing: checkLetter(string[state.letterIdx], state.writing),
          letterIdx: state.letterIdx - 1,
        }));
      }, writingDelay * 1000);
    }

    console.log(state);
    console.log(string);
    console.log(
      state.writing.length === string.length,
      ' ',
      state.writing.length,
      ' ',
      string.length
    );

    return () => {
      clearTimeout(timer);
    };
  });

  return state.writing;
};
