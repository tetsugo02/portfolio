import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { RiMenuFill } from "react-icons/ri";
import Image from "next/image";
import { SnsBar } from "../molecules/snsBar";
import { getSidebarItems } from "@/constant/sidebar/sidebarContent";
import { useTranslation } from "react-i18next";

export const SidebarSheet = () => {
	const { t } = useTranslation();
	const sidebarItems = getSidebarItems(t);
	return (
		<Sheet>
			<SheetTrigger asChild className="lg:hidden">
				<Button variant="outline">
					<RiMenuFill size={40} />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-2/3">
				<SheetTitle></SheetTitle>
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
				<div className="flex flex-col gap-5 justify-center px-8">
					{sidebarItems.map((item) => (
						<Button
							key={item.url}
							variant="ghost"
							className="flex items-center gap-2 text-xl h-15 justify-start"
							asChild
						>
							<a href={item.url}>
								<item.icon />
								<span>{item.title}</span>
							</a>
						</Button>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};
