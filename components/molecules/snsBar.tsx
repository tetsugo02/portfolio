import { VscGithub } from "react-icons/vsc";
import { snsBarItems } from "@/constant/sidebar/sidebarContent";

export const SnsBar = () => {
	return (
		<div className="flex w-full justify-center gap-6 mt-4 justify-items-center">
			<a href={snsBarItems.github.url} className="items-center" target="_blank">
				<snsBarItems.github.icon size={snsBarItems.github.size} />
			</a>
			<button>
				<snsBarItems.mail.icon size={snsBarItems.mail.size} />
			</button>
		</div>
	);
};
