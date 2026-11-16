import Image from 'next/image'

type EECardProps = {
	place: string;
	title: string;
	date: string;
	icon: string;
	color?: string;
};

const EECard = ({ place, title, date, icon, color = '#172554' }: EECardProps) => {
	// Education-Experience Card
  return (
	<>
		<div className='flex flex-row justify-between items-center max-w-[600px] mx-auto my-7 bg-gradient-to-r from-transparent via-[var(--linear)] to-transparent'>
			<div className='flex flex-row items-center'>
				<div
					className='rounded-md min-w-17 min-h-17 content-center hover:brightness-120 duration-300 mr-3.5 cursor-pointer'
					style={{ backgroundColor: color }}
				>
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
					<span className='font-bold lg:text-lg'>{place}</span><br/>
					<span className='text-[var(--secondary)] brightness-150 text-sm lg:text-lg'>{title}</span>
				</div>
			</div>
			<div className='text-[var(--secondary)] brightness-120 text-sm lg:text-md'>
				{date}
			</div>
		</div>
	</>
  )
}

export default EECard