import { useState, useEffect, useRef } from 'react';

type UseInViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export const useInView = (options: UseInViewOptions = { triggerOnce: true }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { triggerOnce, ...observerOptions } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce, observerOptions]);

  return { ref, inView };
}; 