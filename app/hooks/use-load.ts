import { useState, useCallback } from 'react';
import { delay } from '~/shared/delay';

function useLoad<T extends (...args: any[]) => any>(
  ms: number,
  callback: T,
): { isLoading: boolean; withLoadFn: (...args: Parameters<T>) => Promise<void> } {
  const [isLoading, setIsLoading] = useState(false);

  const withLoadFn = useCallback(async (...args: Parameters<T>) => {
    setIsLoading(true);
    try {
      await delay(ms);
      await callback(...args);
    } finally {
      setIsLoading(false);
    }
  }, [ms, callback]);

  return { isLoading, withLoadFn };
}

export default useLoad;
