import React from 'react'
import { EXPERIENCES } from '../../constants'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
	<section id="experience">
		<h2>
			Experience
		</h2>

		<div className='p-4'>
			{EXPERIENCES.map((exp) => (
				<ExperienceCard
					place={exp.place}
					title={exp.title}
					date={exp.date}
					icon={exp.icon}
					key={exp.key}
				/>
			))}
		</div>
	</section>
  )
}

export default Experience