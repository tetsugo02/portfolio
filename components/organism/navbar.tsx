"use client";

import * as React from "react";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navibar = () => {
	return (
		<header className="w-full border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
				<div className="font-bold text-xl"></div>
				<NavigationMenu viewport={false}>
					<NavigationMenuList className="gap-1">
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} text-base font-medium`}
							>
								<Link href="/">Home</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} text-base font-medium`}
							>
								<Link href="/about">About</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} text-base font-medium`}
							>
								<Link href="/projects">Works</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} text-base font-medium`}
							>
								<Link href="/blog">Blog</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} text-base font-medium`}
							>
								<Link href="/contact">Contact</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
};
