import React from 'react'
import { PROJECTS } from '../../../../constants'
import ProjectSummaryCard from './ProjectSummaryCard'
import Image from "next/image"

const page = () => {
  return (
	<>
		<Image
			src='petals.svg'
			alt='scattered cherry blossom petals'
			height={100}
			width={1000}
			className='absolute -z-10 flex'
		/>

		<div className='border-0 border-green-500'>
			<h1 className='text-3xl font-bold border-0 border-red-500 my-5 p-5 text-[var(--secondary)] brightness-150'>
				Personal Projects Reference List
			</h1>

			<div className='text-xl pl-10'>
				Below are some passion projects I took on in my free time
			</div>
		</div>

		<div className='flex justify-around flex-col bg-[radial-gradient(closest-side_at_50%_50%,_var(--radial),_transparent)] pt-10'>
			{PROJECTS.map((proj) => (
				<ProjectSummaryCard
					title={proj.title}
					key={proj.key}
					description={proj.description}
					technologies={proj.technologies}
					status={proj.status}
					lastUpdate={proj.lastUpdate}
					href={proj.href}
					bg={proj.bg}
					projLink={proj.projLink}
					repoLink={proj.repoLink}
				/>
			))}
		</div>
	</>
  )
}

export default page