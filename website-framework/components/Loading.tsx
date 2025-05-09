import Image from "next/image"

const Loading = () => {
  return (
	<div className="mt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pt-10 flex justify-center flex-col">
		<Image
			src={'/kitload.webp'}
			alt="loading..."
			height={100}
			width={100}
		/>
		<div className="text-2xl -mt-3">
			Loading...
		</div>
	</div>
  )
}

export default Loading