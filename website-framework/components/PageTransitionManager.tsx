'use client'

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

//only exists because new paths may not load instantly if not cached + slow connections. hash changes don't have this problem

export default function PageTransitionManager() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true); // <-- only true on first render

  useEffect(() => {
    const wrapper = document.getElementById('children-wrapper');
    if (!wrapper) return;

    // Skip animation if it's the first load
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Play the transition-in animation
    wrapper.classList.remove('view-transition-old');
    wrapper.classList.add('view-transition-new');

    const cleanup = setTimeout(() => {
      wrapper.classList.remove('view-transition-new');
    }, 500);

    return () => clearTimeout(cleanup);
  }, [pathname]);

  return null;
}
