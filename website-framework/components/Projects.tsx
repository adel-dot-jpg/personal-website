import React from 'react'
import FakeTerminal from './FakeTerminal'
import { PROJECTS } from '../../constants'

const Projects = () => {
  return (
	< section id="projects">
		<h2>
			A tasting of my works
		</h2>
		<div className='flex justify-around flex-col xl:flex-row bg-[radial-gradient(closest-side_at_50%_50%,_var(--radial),_transparent)] border-0 border-red-500 overflow-auto gap-10 px-10'>
			{[...PROJECTS] // copy so we don't mutate original
			.sort(() => Math.random() - 0.5) // "shuffle"
			.slice(0, 3) // pick first 3 projects after shuffle
			.map((proj) => (
				<FakeTerminal
					title={proj.title}
					key={proj.key}
					description={proj.description}
					technologies={proj.technologies}
					status={proj.status}
					updated={proj.lastUpdate}
					href={proj.href}
				/>
			))}
		</div>
	</section>
  )
}

export default Projects