import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls to top on every route change
 * Place this inside BrowserRouter but before routes
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use auto for instant scroll, change to 'smooth' if preferred
    });

    // Also handle Lenis smooth scroll if available
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      try {
        lenis.scrollTo(0, { duration: 0.5 });
      } catch (e) {
        console.error('Error scrolling with Lenis:', e);
      }
    }
  }, [pathname]);

  return null;
};
