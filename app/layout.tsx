import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: "E-commerce Application",
    description: "Built with Next.js, Redux Toolkit, MongoDB, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable}`}>
            <body className="font-sans antialiased">
                <Navbar />
                <main className="max-w-7xl mx-auto p-6">
                    {children}
                </main>
            </body>
        </html>
    );
}