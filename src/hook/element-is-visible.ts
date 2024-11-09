import { useEffect, useRef, useState } from 'react';

type Props = {
  initialVisible?: boolean;
} & IntersectionObserverInit;

const useElementIsVisible = (options?: Props) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(options?.initialVisible ?? false);

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    const { current } = ref;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, options]);

  return { ref, visible };
};

export default useElementIsVisible;
