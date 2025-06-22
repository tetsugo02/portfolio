import { Header } from "@/components/atom/header";
import { Card } from "@/components/ui/card";

export const Certification = () => {
	return (
		<div className="justify-items-start w-full px-2 flex flex-col gap-4">
			<Header level="h3">Certificaitons</Header>
			<Card className="w-full h-full shadow-none p-2">
				<ul className="list-disc list-outside m-6 text-lg font-semibold">
					<li>Toeic 735</li>
					<li>Fundamental Information Technology Engineer</li>
					<li>Image Processing Certification Expert</li>
				</ul>
			</Card>
		</div>
	);
};
