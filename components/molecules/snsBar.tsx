import { snsBarItems } from "@/constant/sidebar/sidebarContent";

export const SnsBar = () => {
	return (
		<div className="flex w-full justify-center gap-6 mt-4 justify-items-center">
			<a href={snsBarItems.github.url} className="items-center mt-0.1" target="_blank">
				<snsBarItems.github.icon size={snsBarItems.github.size} />
			</a>
			<a href={snsBarItems.Linkedin.url} className="items-center" target="_blank">
				<snsBarItems.Linkedin.icon
					size={snsBarItems.Linkedin.size}
					color={snsBarItems.Linkedin.iconColor}
				/>
			</a>
		</div>
	);
};
