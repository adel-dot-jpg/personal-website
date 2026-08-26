import React from 'react'
import { EDUCATION } from '../../constants'
import EECard from './EECard'

const EE = () => {
  return (
	<section id="EE" className='border-0 my-20'>
		<h2>
			Education
		</h2>

		<div className='p-4'>
			{EDUCATION.map((exp) => (
				<EECard
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

export default EE