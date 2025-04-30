import React from 'react'
import FakeTerminal from './FakeTerminal'
import { PROJECTS } from '../../constants'

const Projects = () => {
  return (
	< section id="projects">
		<h2>
			Projects
		</h2>
		<div className='flex justify-around flex-col xl:flex-row bg-[radial-gradient(closest-side_at_50%_50%,_var(--radial),_transparent)]'>
			{PROJECTS.map((proj) => (
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