import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import ToggleMenu from "./ToggleMenu"
import TransitionLink from "./TransitionLink"
import Link from 'next/link'

const Navbar = () => {

  return (
  <nav className="z-30 py-7 px-3 flex relative justify-end pr-10 items-center select-none text-white">
    
    <Link href="/adel_resume.pdf" className="cursor-pointer left-10 absolute active:brightness-75 select-none" draggable={false}>
      <div className="text-2xl border-1 border-[var(--secondary)] rounded-lg py-2 px-5 ml-0 hover:bg-[var(--secondary)] transition-colors duration-300 text-gray-300">
        <Image src={"/resume.svg"} alt="resume icon" width={30} height={30} className="inline-block mr-1 -ml-1 -mt-0.5" draggable={false}/>
        <span className="align-middle">Resume</span>
      </div>
    </Link>

    <ul className="hidden h-full gap-16 lg:flex flex-row"> 
      {NAV_LINKS.map((link) => (
        <TransitionLink href={link.href} key={link.key} className="cursor-pointer text-xl hover:font-bold active:text-[var(--secondary)]">
          {link.label}
        </TransitionLink>
      ))}
    </ul>
    
    <ToggleMenu/>

  </nav>
  )
}

export default Navbar	