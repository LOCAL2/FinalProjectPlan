'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnimations() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const animationType = element.dataset.animation;
            const delay = element.dataset.delay || '0';
            
            // Add animation classes based on type
            switch (animationType) {
              case 'fade-in':
                element.classList.add('animate-fade-in');
                break;
              case 'fade-in-up':
                element.classList.add('animate-fade-in-up');
                break;
              case 'fade-in-down':
                element.classList.add('animate-fade-in-down');
                break;
              case 'fade-in-left':
                element.classList.add('animate-fade-in-left');
                break;
              case 'fade-in-right':
                element.classList.add('animate-fade-in-right');
                break;
              case 'scale-in':
                element.classList.add('animate-scale-in');
                break;
              case 'slide-in-left':
                element.classList.add('animate-slide-in-left');
                break;
              case 'slide-in-right':
                element.classList.add('animate-slide-in-right');
                break;
              case 'bounce-in':
                element.classList.add('animate-bounce-in');
                break;
              case 'flip-in':
                element.classList.add('animate-flip-in');
                break;
              case 'zoom-in':
                element.classList.add('animate-zoom-in');
                break;
              case 'rotate-in':
                element.classList.add('animate-rotate-in');
                break;
              default:
                element.classList.add('animate-fade-in-up');
            }
            
            // Apply delay
            if (delay !== '0') {
              element.style.animationDelay = delay;
            }
            
            // Remove initial hidden state
            element.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10', '-translate-x-10', 'scale-95');
            
            // Stop observing this element
            observerRef.current?.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Find all elements with scroll animations
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    // Add initial hidden state and observe elements
    animatedElements.forEach((element, index) => {
      const animationType = element.dataset.animation;
      
      // Add initial hidden state based on animation type
      switch (animationType) {
        case 'fade-in-up':
          element.classList.add('opacity-0', 'translate-y-10');
          break;
        case 'fade-in-down':
          element.classList.add('opacity-0', '-translate-y-10');
          break;
        case 'fade-in-left':
          element.classList.add('opacity-0', 'translate-x-10');
          break;
        case 'fade-in-right':
          element.classList.add('opacity-0', '-translate-x-10');
          break;
        case 'scale-in':
        case 'zoom-in':
          element.classList.add('opacity-0', 'scale-95');
          break;
        default:
          element.classList.add('opacity-0');
      }
      
      // Add transition classes
      element.classList.add('transition-all', 'duration-700', 'ease-out');
      
      // Set staggered delay if not specified
      if (!element.dataset.delay) {
        element.dataset.delay = `${index * 100}ms`;
      }
      
      observerRef.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return observerRef;
}

// Utility function to add scroll animation to elements
export function addScrollAnimation(element, animationType, delay = '0ms') {
  if (element) {
    element.dataset.animation = animationType;
    element.dataset.delay = delay;
  }
}

// Custom hook for specific animation types
export function useCountUpAnimation(targetValue, duration = 2000) {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            const element = entry.target;
            const startValue = 0;
            const endValue = targetValue;
            const startTime = Date.now();
            
            const updateValue = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function (ease-out)
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
              
              if (element) {
                element.textContent = currentValue.toLocaleString();
              }
              
              if (progress < 1) {
                requestAnimationFrame(updateValue);
              }
            };
            
            updateValue();
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, duration]);

  return elementRef;
}
