import { useEffect, useState } from 'react';

export const useIsFirstRender = () => {
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return isInitial;
};
