"use client"
import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import { useState } from "react"
import { useRef } from "react"
import TransitionLink from "./TransitionLink"

const ToggleMenu = () => {

	const startRef = useRef(false); /* only for hiding the menu on mount. state is false by default and will play animation on mount if not done */

	const [menuOpen, setMenuOpen] = useState(false);

	const foldableMenu = () => { /* for menu state toggling */
		startRef.current = true;
		setMenuOpen((prev) => !prev);
		if (menuOpen == false) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	};
  
  return (
	<>
		<Image
			src={"/menu.svg"} alt="menu icon" height={25} width={45}
			className="lg:hidden cursor-pointer brightness-50 active:brightness-50 z-50"
			onClick={foldableMenu}
		/>
		
		<ul className={`${menuOpen ? " animate-slide-down " : " animate-slide-up "} ${startRef.current ? " block " : " hidden "} lg:hidden absolute top-0 z-100 left-0 w-full bg-gradient-to-b from-[var(--secondary)] via-[var(--secondary)] to-[var(--radial)] text-white text-3xl overflow-clip`}>
			{NAV_LINKS.map((link) => (
			<TransitionLink href={link.href} scroll={true} key={link.key}>
				<li onClick={foldableMenu} className="border-1 border-white/30 py-4 opacity-30 text-center hover:text-indigo-300 hover:bg-indigo-950 active:brightness-75 transition-colors duration-100">
					{link.label}
				</li>
			</TransitionLink>
			))}
		</ul>

		{menuOpen && (
			<div
				className="bg-black/80 -z-50 absolute left-0 top-0 w-[100vw] h-[100vh]"
				onClick={foldableMenu}
			/>
		)}
	</>
  )
}

export default ToggleMenu