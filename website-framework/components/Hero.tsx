import React from 'react'
import Image from "next/image";
import CopyTooltip from './CopyTooltip';
import Link from 'next/link';

const Hero = () => {
  return (
	<section id='hero' className='flex flex-col'>
		<Image
			src='name.svg'
			alt='Adel Faruque'
			height={1000}
			width={1000}
			className='px-5 lg:pl-20 select-none'
			draggable={false}
		/>

		<div className='absolute bg-[radial-gradient(closest-side_at_35%_40%,_var(--radial),_transparent)] -z-2 h-[100vh] w-full'></div>

		<Image
			src='CBT.svg'
			alt='cherry blossom tree (CBT)'
			height={1000}
			width={1200}
			className='absolute -z-1 -ml-90'
			draggable={false}
		/>

		<div>
				<h1 className='text-md pt-10 lg:pt-0 pb-5 px-10 lg:pt-10 lg:px-20 lg:text-xl max-w-[1100px] font-bold'>
					Hello there! I&apos;m an eager 3rd-year computer engineering student based in <strong className='brightness-150'>Toronto, ON</strong> with full-stack and AI infra experience. I live in the in-between area where art meets technology.
					<br/>You can reach me at:
					<div className='text-nowrap flex flex-row align-middle'>
						<span className='text-[var(--secondary)] pr-1 brightness-200'>AdelFaruque1@gmail.com</span>
						<CopyTooltip/>
					</div>
				</h1>

			<p className='pb-20 -mt-5 px-10 md:px-20 text-xl text-[var(--primary)]'>
				<code className='bg-black/90'>I&apos;m always game to slam a&nbsp;
					<Link href={'/energydrinks'} className='underline text-red-500 brightness-150'>
						Bang Energy&copy;
					</Link>
					&nbsp;and bring an idea to reality.
				</code>
			</p>

			<Image
				src='/scroll-down.gif'
				alt='scroll down arrow'
				height={70}
				width={70}
				className='hidden lg:block mx-auto -mt-24 mb-25 opacity-30'
				unoptimized={true}
			/>
		</div>
	</section>
  )
}

export default Hero