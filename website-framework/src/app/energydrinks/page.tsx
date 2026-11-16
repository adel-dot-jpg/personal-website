import React from 'react'
import Image from "next/image"
import Link from 'next/link';

export const metadata = {
  title: 'ED Tierlist | Adel Faruque',
  description: 'Live hardware and network telemetry from my self-hosted Ubuntu production server.',
};

const page = () => {
  return (
	<>
		<Image
			src='petals.svg'
			alt='scattered cherry blossom petals'
			height={100}
			width={1000}
			className='absolute -z-10'
		/>

		<Image
			src='petals.svg'
			alt='scattered cherry blossom petals'
			height={100}
			width={1000}
			className='absolute -z-10 left-100 top-150'
		/>

		<header className='lg:w-[50vw] text-center'>
			<h1 className='text-3xl font-bold lg:my-5 p-2 lg:p-5 text-[var(--secondary)] brightness-150'>
				My Energy Drink Tierlist
			</h1>

			<p className='text-xl pt-5 px-3 lg:pl-10 lg:pr-0 lg:pb-20'>
				This is objectively correct and factually based. Always go for Bang&copy;, never go for RedBull&copy;
			</p>
			<p className='text-md text-[var(--secondary)] block lg:hidden pb-10 light:text-red-500'>
				(click the image to enlarge)
			</p>
		</header>

		<section className='flex justify-around flex-center'>
			<Link
				href={'/tierlist.png'}
			>
				<Image
					src={'/tierlist.png'}
					height={1300}
					width={1300}
					alt='objectively correct energy drinks tierlist'
					className='border-5 border-[var(--radial)]'
				/>
			</Link>
		</section>
	</>
  )
}

export default page
