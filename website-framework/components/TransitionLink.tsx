'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import Router from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


{/* LINK HACK FOR IMPLEMENTING PAGE TRANSITION ANIMATIONS FUCK THE VIEWTRANSITIONS API WE SUPPORT FIREFOX IN THIS BITCH */}

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



  // Start the page out transition
  wrapper.classList.add('view-transition-old');

  // Delay navigation and page in transition until after the animation finishes
  setTimeout(() => {
    wrapper.classList.remove('view-transition-old');
    router.push(href);

    wrapper.classList.add('view-transition-new');
    setTimeout(() => wrapper.classList.remove('view-transition-new'), 500);
  }, 500);
	}

	return (
		<Link
			href={href}
			{...props}
			onClick={handleNavigation}
			passHref
		>
			{children}
		</Link>
	);
}