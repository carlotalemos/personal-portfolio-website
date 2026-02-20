import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
    title: "Carlota Lemos - Portfolio",
    description: "Computer Engineering Student - Front-end Developer",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased">
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}