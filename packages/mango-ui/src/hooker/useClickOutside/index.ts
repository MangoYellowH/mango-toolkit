import React, { useEffect } from 'react';

const useClickOutside = (
  ref: React.RefObject<Element>,
  fn: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside: EventListener = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target as Element)) {
        fn();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
