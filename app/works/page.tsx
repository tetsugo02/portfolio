import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WorksPage = () => {
	return (
		<>
			<Tabs defaultValue="all" className="w-full h-screen">
				<TabsList className="grid w-full grid-cols-2 grid-rows-2 h-1/10 lg:grid-cols-4 lg:grid-rows-1 lg:h-1/20">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="research">Research</TabsTrigger>
					<TabsTrigger value="development">Development</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	);
};
export default WorksPage;
