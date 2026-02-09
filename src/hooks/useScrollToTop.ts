import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to scroll to top when route changes
 * Works with both native scroll and Lenis smooth scroll
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Also try to scroll Lenis if available
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { duration: 0.5 });
    }
  }, [pathname]);
};
