import './src/modules/style/globals.css'
import React from "react";
import {Metadata} from "next";
import ThemeProvider from './src/providers/thems'
import QueryProvider from "./src/providers/query";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
    title: "JarJer Food",
    icons:'/image/icons/fav-icon.png'
};
export default function RootLayout({children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <QueryProvider>
            <ThemeProvider>
                <Toaster position="top-right" reverseOrder={false} />
                    {children}
            </ThemeProvider>
        </QueryProvider>

        </body>
        </html>
    )
}