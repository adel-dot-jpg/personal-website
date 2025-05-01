import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='h-0.5 mt-15 bg-gradient-to-r from-transparent via-[var(--linear)] to-transparent' />
      <footer className='flex flex-row justify-center pb-2 mt-3'>
        <div className="mx-3">
          © 2025 Adel Faruque
        </div>
        <Image
          src='/siggy4.png'
          alt='signature'
          height={90}
          width={90}
          draggable={false}
          className='select-none'
        />
      </footer>
    </>
  )
}

export default Footer