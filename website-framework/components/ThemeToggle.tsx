'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from "next/image"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR mismatch

  const currentTheme = resolvedTheme ?? theme;

  return (
    <div className='hover:scale-108 duration-150'>
      <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className='lg:text-xl border-1 border-[var(--radial)] rounded-md py-2 px-4 lg:px-5 ml-0 hover:bg-[var(--linear)] transition-colors duration-150 text-gray-100 cursor-pointer border-b-4 active:border-b-1'>
        <Image src={currentTheme === 'dark' ? 'moon.svg' : 'sun.svg'} alt="resume icon" width={25} height={30} className="inline-block lg:mr-3 pb-1 pt-0.5 lg:pb-0 lg:pt-0 lg:-ml-1 lg:mb-1 opacity-30" draggable={false}/>
        <span className='hidden lg:inline-block opacity-30'>Switch to {currentTheme === 'dark' ? 'light' : 'dark'} mode</span>
      </button>
    </div>
  );
}
