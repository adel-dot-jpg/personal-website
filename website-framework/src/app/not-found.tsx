import Image from "next/image"
import TransitionLink from "../../components/TransitionLink";

export default function NotFound() {
	return (
	  <div className="h-[75vh] flex items-center justify-center flex-col text-center">
		<Image
			src='/CBT.svg'
			alt='cherry blossom tree (CBT)'
			height={700}
			width={700}
			className='absolute -z-10'
		/>
		<div className='absolute -z-20 h-[35vh] w-[35vh] bg-[var(--radial)] rounded-full'></div>
		<h1 className='text-5xl font-bold'>404.</h1>
		<p className='text-xl mt-4 bg-[var(--secondary)] px-3'>The page you&quot;re looking for doesn&quot;t exist. try going back 
			<TransitionLink href='/' className='text-[var(--secondary)] brightness-200 underline ml-1'>
				 Home.
			</TransitionLink>
			<br/> Or stay here, where it&quot;s quieter...
		</p>
	  </div>
	);
  }
  