import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Nav} from "@/components/nav";
import Providers from "@/components/Providers";
import React from "react";

const inter = Inter({subsets: ['latin']})
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: 'Animal Kingdom',
    description: 'Find information about your favorite animal',
}

export default function RootLayout({ children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className + "text-slate-900 dark:bg-slate-900 min-h-screen"}>
            <ThemeProvider attribute="class" defaultTheme="system">
                <Providers>
                    <ClerkProvider>
                    <Nav/>
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <footer className="h-16 w-full bg-slate-800 dark:bg-slate-950 text-white py-8">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm">© 2023 Animal Database. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                    </ClerkProvider>
                </Providers>
            </ThemeProvider>
            </body>
        </html>
    )
}