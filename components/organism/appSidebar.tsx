"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarItems } from "@/constant/sidebar/sidebarContent";
import { SnsBar } from "../molecules/snsBar";
import Link from "next/link";
import Image from "next/image";

export const AppSidebar = () => {
	return (
		<Sidebar className="h-screen items-center">
			<div className="font-bold text-xl flex flex-col items-center pt-10 pb-10">
				<Image
					src={process.env.NODE_ENV === "production" ? "/portfolio/avatar.png" : "/avatar.png"}
					alt="Avatar"
					className="w-40 h-40 mx-auto border-2 rounded-full "
					width={160}
					height={160}
				/>
				<span>Tetsugo To</span>
				<span>董 哲豪</span>
				<SnsBar />
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
