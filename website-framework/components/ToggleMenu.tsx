"use client"
import Link from "next/link"
import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import { useState } from "react"
import { useRef } from "react"

const ToggleMenu = () => {

	const startRef = useRef(false);

	const [menuOpen, setMenuOpen] = useState(false);

	const foldableMenu = () => {
		startRef.current = true;
		setMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	}
  
  return (
	
	<>
		<Image
			src={"/menu.svg"} alt="menu icon" height={25} width={45}
			className="lg:hidden cursor-pointer brightness-75 active:brightness-50"
			onClick={foldableMenu}
		/>

		<ul className={`${menuOpen ? " animate-slide-down " : " animate-slide-up "} ${startRef.current ? " block " : " hidden "} lg:hidden absolute top-[100%] left-0 w-full bg-[var(--secondary)] text-white text-4xl overflow-clip`}>
			{NAV_LINKS.map((link) => (
			<li key={link.key} onClick={closeMenu} className=" border-1 border-black py-4 text-center font-bold hover:text-indigo-300 hover:bg-indigo-950 active:brightness-75">
				<Link href={link.href} scroll={true}>{link.label}</Link>
			</li>
			))}
      	</ul>
	</>

  )
}

export default ToggleMenu