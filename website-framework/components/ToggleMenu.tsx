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
	};


  
  return (
	<>
		<Image
			src={"/menu.svg"} alt="menu icon" height={25} width={45}
			className="lg:hidden cursor-pointer brightness-75 active:brightness-50 z-50"
			onClick={foldableMenu}
		/>
		<div>
			<ul className={`${menuOpen ? " animate-slide-down " : " animate-slide-up "} ${startRef.current ? " block " : " hidden "} lg:hidden absolute top-[100%] left-0 w-full bg-[var(--secondary)] text-white text-4xl overflow-clip`}>
				{NAV_LINKS.map((link) => (
				<TransitionLink href={link.href} scroll={true} key={link.key}>
					<li onClick={() => setMenuOpen(false)} className=" border-1 border-black py-4 text-center font-bold hover:text-indigo-300 hover:bg-indigo-950 active:brightness-75 transition-colors duration-100">
						{link.label}
					</li>
				</TransitionLink>
				))}
			</ul>
		</div>

		{menuOpen && (
			<div
				className="bg-black/60 -z-50 absolute left-0 top-0 w-[100vw] h-[100vh]"
				onClick={() => setMenuOpen(false)}
			/>
		)}
	</>
  )
}

export default ToggleMenu