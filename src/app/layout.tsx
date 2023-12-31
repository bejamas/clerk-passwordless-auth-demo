import Header from "./components/Header";

import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ClerkProvider appearance={{
        baseTheme: dark,
      }}>
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
