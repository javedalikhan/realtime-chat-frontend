import { useEffect, useRef } from 'react';

export const useAutoScroll = <T extends unknown[]>(dependencies: T) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [dependencies]);

  return containerRef;
};