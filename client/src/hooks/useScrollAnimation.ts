import { useState, useEffect, useRef } from 'react';

interface AnimatedElements {
  [key: string]: boolean;
}

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState<AnimatedElements>({});
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      // Check if elements are in viewport for animations
      Object.keys(elementsRef.current).forEach(elementId => {
        const element = elementsRef.current[elementId];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight - 100 && rect.bottom >= 0;
          
          if (isInViewport && !animatedElements[elementId]) {
            setAnimatedElements(prev => ({ ...prev, [elementId]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedElements]);

  const registerElement = (id: string, element: HTMLElement | null) => {
    if (element && !elementsRef.current[id]) {
      elementsRef.current[id] = element;
    }
  };

  return { animatedElements, registerElement };
};

export default useScrollAnimation;
