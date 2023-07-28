import { useCallback, useRef } from 'react';

export default function useDebounce(callback: (arg?: string) => void, delay: number) {
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const debouncedCallback = useCallback(
    (stringSearch: string) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(stringSearch);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
}
