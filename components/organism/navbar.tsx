"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SunMoon } from "lucide-react";
import { Button } from "../ui/button";
import { SelectValue } from "../ui/select";
import { useTheme } from "next-themes";

export const Navibar = () => {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header className="w-full border-b justify-center">
			<div className="max-w-8xl  px-4 sm:px-6 lg:px-2 flex justify-end items-center h-16">
				<NavigationMenu viewport={false}>
					<NavigationMenuList className="gap-1">
						<NavigationMenuItem>

						</NavigationMenuItem>
						<NavigationMenuItem>
							<Button variant="ghost" className="h-12 w-12" onClick={toggleTheme}>
								<SunMoon size={64} />
							</Button>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
};
