import Image from 'next/image'

const Footer = () => {
  return (
  <footer className='flex flex-row justify-center pb-2 mt-20'>
    <div className="mx-3">
      © 2025 Adel Faruque
    </div>
    <Image
      src='/siggy3.png'
      alt='signature'
      height={90}
      width={90}
      draggable={false}
      className='select-none'
    />
  </footer>
  )
}

export default Footer