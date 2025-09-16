import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
};