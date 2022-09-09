import { ReactElement } from 'react';
import { removeWord } from '../../helpers/functions';

export type State = {
  speed: number;
  text: (string | ReactElement)[];
  isDeleting: boolean;
  countText: number;
  indexWord: number;
};

export type Action =
  | { type: 'SPEED'; payload: number }
  | { type: 'TYPE'; payload: string | ReactElement; speed: number }
  | { type: 'DELETE'; speed: number }
  | { type: 'COUNT' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SPEED':
      return {
        ...state,
        isDeleting: true,
        speed: action.payload,
        indexWord: 0,
      };
    case 'TYPE':
      return {
        ...state,
        speed: action.speed,
        text: [...state.text, action.payload],
        indexWord: state.indexWord + 1,
      };
    case 'DELETE':
      return {
        ...state,
        speed: action.speed,
        text: removeWord(state.text),
      };
    case 'COUNT':
      return {
        ...state,
        isDeleting: false,
        countText: state.countText + 1,
      };
    default:
      return state;
  }
}
