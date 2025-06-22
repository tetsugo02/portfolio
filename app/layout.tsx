import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/atom/themeProvider";
import { AppSidebar } from "@/components/organism/appSidebar";
import { Navibar } from "@/components/organism/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tetsugo",
	description: "tetsugo's personal website",
	icons: {
		icon: `${process.env.NODE_ENV === "production" ? "/portfolio/avatar.png" : "/avatar.png"}`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<div className="flex h-screen w-full">
							<div className="flex-shrink-0 h-full">
								<AppSidebar />
							</div>
							<div className="flex flex-col flex-1 w-full overflow-hidden">
								<Navibar />
								<main className="flex-1 w-full overflow-auto">
									<div className="w-full mx-auto justify-item">{children}</div>
								</main>
							</div>
						</div>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
