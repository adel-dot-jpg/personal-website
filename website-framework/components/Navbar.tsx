import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import ToggleMenu from "./ToggleMenu"

const Navbar = () => {

  return (
  <nav className="z-30 py-7 px-3 flex relative justify-end pr-10 items-center select-none text-white">
    
    <Link href="/adel_resume.pdf" className="cursor-pointer left-10 absolute active:brightness-75 select-none" draggable={false}>
      <div className="text-3xl border-1 border-gray-500 rounded-lg py-2 px-5 ml-0 hover:bg-[var(--secondary)]">
        <Image src={"/resume.svg"} alt="resume icon" width={45} height={45} className="inline-block pr-1" draggable={false}/>
        <span className="align-middle">Resume</span>
      </div>
    </Link>

    <ul className="hidden h-full gap-16 lg:flex flex-row"> 
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="cursor-pointer text-xl hover:font-bold active:text-[var(--secondary)]" draggable={false} scroll={true}>
          //{link.label}
        </Link>
      ))}
    </ul>
    
    <ToggleMenu/>

  </nav>
  )
}

export default Navbar	