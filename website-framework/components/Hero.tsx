import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
	<section className='flex flex-col bg-[radial-gradient(closest-side_at_35%_40%,_var(--radial),_transparent)]'>
		<Image
			src="name.svg"
			alt='Adel Faruque'
			height={1000}
			width={1000}
			className='pl-20 pt-10 pb-5 pr-5 select-none'
			draggable={false}
		/>

		<div>
			<h1 className='text-l pt-5 pb-5 px-10 md:pb-10 md:pt-10 md:px-30 md:text-xl max-w-[1000px]'>
			I'm a 3rd-year computer engineering student based in <strong>Toronto, ON</strong> with full-stack and infrastructure experience. I live in the in-between area where art meets technology.
			</h1>

			<p className='pb-5 px-10 md:px-30 text-xl text-[var(--secondary)]'>
				<code><strong>Current Status:</strong> Looking for an internship in Computer Engineering. (and trying to break my WPM record of 196)</code>
			</p>

			<Image
				src="/scroll-down.gif"
				alt='scroll down'
				height={100}
				width={100}
				className='mx-auto pb-2'
				unoptimized={true}
			/>
		</div>
	</section>
  )
}

export default Hero