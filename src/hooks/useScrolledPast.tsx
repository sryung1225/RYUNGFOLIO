import { useEffect, useState } from 'react';

export default function useScrolledPast(elementId: string, offset: number = 0) {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const aboutPosition = element.getBoundingClientRect().top;
        if (aboutPosition <= offset) setIsScrolledPast(true);
        else setIsScrolledPast(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId, offset]);

  return isScrolledPast;
}
