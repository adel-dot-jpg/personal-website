'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR mismatch

  const currentTheme = resolvedTheme ?? theme;

  return (
    <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className='lg:text-2xl 2xs:text-3xl border-1 border-[var(--secondary)] rounded-lg py-2 px-5 ml-0 hover:bg-[var(--linear)] transition-colors duration-300 text-gray-300 cursor-pointer '>
      Switch to {currentTheme === 'dark' ? 'light' : 'dark'} mode
    </button>
  );
}
