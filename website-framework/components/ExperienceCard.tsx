import Image from 'next/image'

type ExperienceCardProps = {
	place: string;
	title: string;
	date: string;
	icon: string;
};

const ExperienceCard = ( {place, title, date, icon}: ExperienceCardProps ) => {
  return (
	<>
		<div className='flex flex-row justify-between items-center max-w-[600px] mx-auto my-7 bg-gradient-to-r from-transparent via-[var(--linear)] to-transparent'>
			<div className='flex flex-row items-center'>
				<div className='rounded-md bg-blue-950 w-17 h-17 content-center hover:brightness-120 duration-300 mr-3.5'>
					<Image
						src={icon}
						alt={`${title} icon`}
						height={35}
						width={35}
						className='m-auto'
						draggable={false}
					/>
				</div>
				<div>
					<span className='font-bold text-lg'>{place}</span><br/>
					<span className='text-[var(--secondary)]'>{title}</span>
				</div>
			</div>
			<div className='text-[var(--secondary)] brightness-150 border-0 border-indigo-500 m-4'>
				{date}
			</div>
		</div>
	</>
  )
}

export default ExperienceCard