interface SingleGridProps {
	head: string;
	body: string;
}

export const SingleGrid = ({ head, body }: SingleGridProps) => {
	return (
		<div className="flex flex-col gap-2 min-w-xl">
			<h3 className="text-2xl font-bold">{head}</h3>
			<p className="text-gray-700">{body}</p>
		</div>
	);
};
