import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/atom/themeProvider";
import { AppSidebar } from "@/components/organism/appSidebar";
import { Navibar } from "@/components/organism/navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

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
		icon: "/avatar.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
			>
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
									<div className="w-full max-w-5xl mx-auto flex flex-col gap-6  justify-items-start min-h-screen p-4 sm:p-8 md:p-12 lg:p-16">
										{children}
									</div>
								</main>
							</div>
						</div>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
