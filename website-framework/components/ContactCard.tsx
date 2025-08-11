import Image from 'next/image'
import Link from 'next/link'

type ContactCardProps = {
	platform: string;
	icon: string;
	href: string;
	key: string;
};

const ContactCard = ( {platform, icon, href}: ContactCardProps ) => {
  return (
	
	<>
		
			<div className='flex flex-row justify-between items-center max-w-[600px] mx-auto my-7 bg-gradient-to-r from-transparent via-[var(--linear)] to-transparent border-0 hover:scale-103 hover:shadow-2xl duration-200'>
			<Link href={href} target='_blank' className='hover:brightness-75 duration-300 inline-block w-full'>
				<div className=' flex flex-row items-center w-full'>
					<div className=' rounded-md bg-white w-17 h-17 content-center cursor-pointer mr-3.5'>
						<Image
							src={icon}
							alt={`${platform} icon`}
							height={35}
							width={35}
							className='m-auto'
							draggable={false}
						/>
					</div>
					<div>
						<span className='font-bold text-lg'>{platform}
							<Image src='/open.svg' alt='open in new tab' height={25} width={25} className='inline ml-1 -mt-1' />
						</span><br/>
					</div>
				</div>
				</Link>
			</div>
	</>
  )
}

export default ContactCard