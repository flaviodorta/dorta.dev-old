import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  cursorVariantAtom,
  CursorVariants,
  hasCursorBgAtom,
} from '../recoil/atoms';
import { useHover } from './useHover';

export function useClearCursorStyle<T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T>,
  cursorVariant: CursorVariants
) {
  const [variant, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [hasCursorBg, setHasCursorBg] = useRecoilState(hasCursorBgAtom);
  const isElementHover = useHover(elementRef);

  useEffect(() => {
    if (!isElementHover && variant === cursorVariant)
      setCursorVariant('default');
    if (isElementHover && variant === 'default')
      setCursorVariant(cursorVariant);
    if (isElementHover && hasCursorBg) setHasCursorBg(false);
  });
}
