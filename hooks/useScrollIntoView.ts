import { useEffect, useRef } from 'react';

// Define a custom options type that includes our custom 'triggerOnce' property
type UseScrollIntoViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

// Make the hook generic to accept any HTMLElement type
const useScrollIntoView = <T extends HTMLElement>(
  options: UseScrollIntoViewOptions = { threshold: 0.1, triggerOnce: true }
) => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    // Separate custom logic from standard observer options. Default triggerOnce to true if not provided.
    const { triggerOnce = true, ...stdOptions } = options;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
            if (!triggerOnce) {
                entry.target.classList.remove('visible');
            }
        }
      });
    }, stdOptions); // Pass only the standard IntersectionObserver options

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options, targetRef]);

  return [targetRef];
};

export default useScrollIntoView;
