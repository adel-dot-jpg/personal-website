"use client"
import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import { useState } from "react"

const ToggleMenu = () => {

	const [menuOpen, setMenuOpen] = useState(false);

	const foldableMenu = () => {
	  setMenuOpen((prev) => !prev);
	};
  
  return (
	
	<>
		<Image
			src={"/menu.svg"} alt="menu icon" height={25} width={45}
			className="lg:hidden cursor-pointer active:brightness-50"
			onClick={foldableMenu}
		/>

		<ul className={`${menuOpen ? "block" : "hidden"} lg:hidden absolute top-[100%] left-0 w-full bg-[#160F1F] text-white text-4xl`}>
			{NAV_LINKS.map((link) => (
			<li key={link.key} className=" border-1 border-black py-4 text-center font-bold hover:text-indigo-300 hover:bg-indigo-950 active:brightness-50">
				<a href={link.href}>{link.label}</a>
			</li>
			))}
      	</ul>
	</>

  )
}

export default ToggleMenu