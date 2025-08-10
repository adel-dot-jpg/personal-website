import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import ToggleMenu from "./ToggleMenu"
import TransitionLink from "./TransitionLink"
import Link from 'next/link'
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {

  return (
  <nav className="z-30 py-7 px-3 flex relative justify-end pr-10 items-center select-none text-white pt-10 mb-10">
    <div className="flex gap-3 lg:gap-10 absolute left-0 left-5 lg:left-10 items-center">
      <Link href="/adel_resume.pdf" className="cursor-pointer active:brightness-75 select-none hover:scale-108 duration-150" draggable={false}>
        <div className="lg:text-xl border-1 border-[var(--radial)] rounded-md py-2 px-5 ml-0 hover:bg-[var(--linear)] transition-colors duration-150 text-gray-100 border-b-4 active:border-b-1">
          <Image src={"/resume.svg"} alt="resume icon" width={30} height={30} className="inline-block mr-1 -ml-1 -mt-0.5" draggable={false}/>
          <span className="align-middle">Resume</span>
        </div>
      </Link>
      <ThemeToggle/>
    </div>

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