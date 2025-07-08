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

import { getSidebarItems } from "@/constant/sidebar/sidebarContent";
import { SnsBar } from "../molecules/snsBar";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const AppSidebar = () => {
	const { t } = useTranslation("common");
	const sidebarItems = getSidebarItems(t);

	return (
		<Sidebar className="h-screen items-center">
			<div className="font-bold text-xl flex flex-col items-center pt-10 pb-10">
				<Image
					src="/avatar.png"
					alt="Avatar"
					className="w-40 h-40 mx-auto border-2 rounded-full "
					width={160}
					height={160}
					priority
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
								<SidebarMenuItem key={item.url} className="flex">
									<SidebarMenuButton asChild className=" text-xl h-15">
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
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
