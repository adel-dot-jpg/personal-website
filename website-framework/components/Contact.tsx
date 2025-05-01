import React from 'react'
import ContactCard from './ContactCard'
import { CONTACTS } from '../../constants'

const Contact = () => {
  return (
	<section id="contact">

		<h2>
			Contact
		</h2>

		<div className='p-4'>
			{CONTACTS.map((ct) => (
				<ContactCard
					platform={ct.platform}
					icon={ct.icon}
					href={ct.href}
					key={ct.key}
				/>
			))}
		</div>

	</section>
  )
}

export default Contact