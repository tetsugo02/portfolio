"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarItems } from "@/constant/sidebar/sidebarContent";
import Link from "next/link";

export const AppSidebar = () => {
	return (
		<Sidebar className="h-screen items-center">
			<div className="font-bold text-xl flex flex-col items-center gap-2 pt-10">
				<img src="/avatar.png" className="w-40 h-40 mx-auto border-2 rounded-full " />
				<span>Tetsugo To</span>
				<span>董 哲豪</span>
			</div>
			<SidebarContent className="px-4">
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className="flex flex-col gap-5">
							{sidebarItems.map((item) => (
								<SidebarMenuItem key={item.title} className="flex">
									<SidebarMenuButton asChild className=" text-xl h-15">
										<Link href={item.url}>
											<item.icon />
											<span className=" ">{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
