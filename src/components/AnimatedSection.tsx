import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0,
  duration = 600
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'animate-on-scroll';
      case 'fade-left':
        return 'animate-on-scroll-left';
      case 'fade-right':
        return 'animate-on-scroll-right';
      case 'scale':
        return 'animate-on-scroll-scale';
      case 'slide-up':
        return 'animate-on-scroll';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        getAnimationClass(),
        isInView && 'in-view',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;