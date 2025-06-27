import { WorkType } from "@/types/workBlockType";
import { BadgeType } from "@/types/workBlockType";

export namespace WorkHelper {
	export const getWorkTypeBadge = (type: WorkType) => {
		switch (type) {
			case "development":
				return {
					name: "Development",
					className: "bg-blue-600 text-white",
					icon: undefined, // Replace with actual icon if needed
				};
			default:
				return {
					name: "Other",
					className: "bg-gray-600 text-white",
					icon: undefined, // Replace with actual icon if needed
				};
		}
	};
}
