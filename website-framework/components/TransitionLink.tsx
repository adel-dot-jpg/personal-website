'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation';	
import { usePathname } from 'next/navigation';


//LINK HACK FOR IMPLEMENTING PAGE TRANSITION ANIMATIONS FUCK THE VIEWTRANSITIONS API WE SUPPORT FIREFOX IN THIS BITCH

interface TransitionLinkProps extends LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function TransitionLink ( {href, children, ...props}: TransitionLinkProps) {

	const pathname = usePathname();
	const router = useRouter();

	async function handleNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault(); //hijack link navigation

		const wrapper = document.getElementById('children-wrapper');
		const loading = document.getElementById('loading');

		function extractPathnameFromHref(href: string): string { //strip domain name from href so it resembles pathname syntax
			let end = href.length;								 //i.e. http://localhost:3000/projects becomes /projects
			while (end > 0 && href[end - 1] !== '/') {
			end--;
			}
			return href.slice(end - 1); // includes the slash
		}
		
		const linkName = extractPathnameFromHref(href);

		if (pathname == linkName) return;
		if (!wrapper) return;
		if (!loading) return;
		let hash=false;
		if (linkName[1]=='#') hash=true;

	// Start the page out transition
	wrapper.classList.add('view-transition-old');
	loading.classList.remove('hidden');
	loading.classList.add('view-transition-new');

	// Delay navigation and page in transition until after the animation finishes
	if (hash) {
		setTimeout(() => {
			router.push(href);
			wrapper.classList.remove('view-transition-old');
			loading.classList.remove('view-transition-new')
			wrapper.classList.add('view-transition-new');
			loading.classList.add('view-transition-old');

			const cleanup = setTimeout(() => {
				wrapper.classList.remove('view-transition-new');
				loading.classList.remove('view-transition-old');
				loading.classList.add('hidden');
			}, 500);

			return () => clearTimeout(cleanup);
		}, 500); // handles both old page transition and new page transition. PageTransitionManager will not register changes in hash.
	} else {
		setTimeout(() => {
			router.push(href);
		}, 500); // only handles old page transition, PageTransitionManager handles new page transition
	}
  }

	return (
		<Link
			href={href}
			prefetch={true} // damn lazy loading
			{...props}
			onClick={handleNavigation}
			passHref
		>
			{children}
		</Link>
	);
}