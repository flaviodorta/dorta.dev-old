import { useEffect, useState } from 'react';

export const useFirstRender = () => {
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return isInitial;
};
