import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

type FakeTerminalProps = {
  title: string;
  key: string;
  description: string;
  technologies: string;
  status: string;
  updated: string;
  href: string;
};

export default function FakeTerminal({ title, description, technologies, status, updated, href }: FakeTerminalProps) {
  return (
    <div className='flex border-0 border-red-500'>
    <div className='w-full sm:max-w-[620px] rounded-sm border border-gray-700 bg-black shadow-2xl my-10 mx-auto'>
      <div className='bg-zinc-800 text-white flex px-3 text-sm font-medium border-0 border-green-500'>
        <div className='bg-black px-2 py-1 mt-3 rounded-t-md min-w-50'>
          <Image
            src={'/cmd.png'}
            alt='cmd icon'
            height={15}
            width={15}
            className='inline-block mr-2'
            draggable={false}
          />
          Command Prompt
          <Image src={'/terminalCLOSE.svg'} alt='terminal close icon' height={15} width={15} className='hover:bg-gray-700 inline-block ml-[26px]' draggable={false} />
        </div>
        <Image src={'/terminalCLOSE.svg'} alt='terminal close icon' height={15} width={15} className='brightness-40 ml-2 mt-3 rotate-45 border-0 border-orange-500' draggable={false} />
        <div className='flex w-2xl flex-row-reverse items-center'>
          <Image src={'/terminalCLOSE.svg'} alt='terminal close icon' height={18} width={18} className='hover:bg-red-500' draggable={false} />
          <Image src={'/terminalMAX.svg'} alt='terminal maximize icon' height={18} width={18} className='mx-3 hover:bg-gray-700' draggable={false} />
          <Image src={'/terminalMIN.svg'} alt='terminal minimize icon' height={18} width={18} className='hover:bg-gray-700' draggable={false} />
        </div>
      </div>

      <div className='font-[Consolas] p-4 min-h-80 flex flex-col border-0 border-blue-500'>
        <p>
          <span className='text-gray-700 text-sm'>Microsoft Windows [Version 10.0.26100.3476]
          <br/>(c) Microsoft Corporation. All rights reserved.
          <br/>C:\Users\adelf\projects\&quot;{title}&quot;{'>'} </span>
        {title.split(' ')}_info </p>
        <br/>
        {'>'} Project: {title}<br/>
        {'>'} Description: {description}<br/>
        {'>'} Stack: {technologies}<br/>
        {'>'} Status: {status} | Last updated: {updated}<br/>
        <span className='text-green-400 underline hover:text-green-300 active:text-green-700 hover:bg-green-900 w-fit'><Link href={`${href}`}>Full Projects Page!</Link></span><br/>

        <span className='text-gray-700 text-sm'>C:\Users\adelf\projects\&quot;{title}&quot;{'>'}<span className='animate-blink text-white font-bold'>_</span></span>
      </div>
    </div>
    </div>
  );
}
