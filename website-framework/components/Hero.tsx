import React from 'react'
import Image from "next/image";
import CopyTooltip from './CopyTooltip';

const Hero = () => {
  return (
	<section id='hero' className='flex flex-col'>
		<Image
			src='name.svg'
			alt='Adel Faruque'
			height={1000}
			width={1000}
			className='pl-20 pt-10 pr-5 select-none'
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
				<h1 className='text-lg pb-5 px-10 md:pb-10 md:pt-10 md:px-30 md:text-xl max-w-[1100px] font-bold'>
					Well hello there! I&apos;m an eager 3rd-year computer engineering student based in <strong className='brightness-150'>Toronto, ON</strong> with full-stack and infrastructure experience. I live in the in-between area where art meets technology.
					<br/>You can reach me at:
					<div className='text-nowrap flex flex-row align-middle'>
						<span className='text-[var(--secondary)] pr-1 brightness-200'>AdelFaruque1@gmail.com</span>
						<CopyTooltip/>
					</div>
				</h1>

			<p className='pb-20 -mt-5 px-10 md:px-30 text-xl text-[var(--secondary)]'>
				<code>I&apos;m always ready to turn coffee, code, and curiosity into something amazing. <strong><span className='brightness-140'>Make me your intern superhero today!</span></strong></code>
			</p>

			<Image
				src='/scroll-down.gif'
				alt='scroll down arrow'
				height={100}
				width={100}
				className='mx-auto -mt-27 mb-25'
				unoptimized={true}
			/>
		</div>
	</section>
  )
}

export default Hero