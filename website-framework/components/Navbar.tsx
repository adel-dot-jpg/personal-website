import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import ToggleMenu from "./ToggleMenu"

const Navbar = () => {

  return (
  <nav className="top-0 z-30 py-5 px-3 flex relative justify-end pr-10 items-center border-2 border-green-500">
    
    <Link href="/adel_resume.pdf" className="cursor-pointer left-10 absolute active:brightness-50">
      <div className="text-3xl text-white border-2 border-white rounded-lg py-2 px-5 ml-0 hover:bg-indigo-900">
        <Image src={"/resume.svg"} alt="resume icon" width={45} height={45} className="inline-block pr-1"/>
        <span className="align-middle">Resume</span>
      </div>
    </Link>

    <ul className="hidden h-full gap-16 lg:flex flex-row"> 
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="cursor-pointer text-xl hover:font-bold  text-white active:text-indigo-400">
          //{link.label}
        </Link>
      ))}
    </ul>
    
    <ToggleMenu/>

  </nav>
  )
}

export default Navbar	