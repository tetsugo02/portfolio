import { Select, SelectTrigger, SelectContent, SelectItem } from "../ui/select";

export const LanguageSelector = () => {
	return (
		<Select>
			<SelectTrigger className="w-48">
				<SelectItem value="en">English</SelectItem>
				<SelectItem value="ja">日本語</SelectItem>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="en">English</SelectItem>
				<SelectItem value="ja">日本語</SelectItem>
			</SelectContent>
		</Select>
	);
};
