import React from 'react'
import FakeTerminal from './FakeTerminal'
import { PROJECTS } from '../../constants'

const Projects = () => {
  return (
	<>
		<h2 className='border-0 border-red-500 font-bold'>
			Projects
		</h2>
		<div className='border-0 border-red-500 flex justify-around flex-col xl:flex-row'>
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
	</>
  )
}

export default Projects