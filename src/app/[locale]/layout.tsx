import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import clsx from "clsx";

import {ThemeProvider} from "@/src/app/[locale]/components/ThemeProvider";
import Navigation from "@/src/app/[locale]/components/Navigation";
import {notFound} from 'next/navigation';
import React from "react";
import {locales} from "@/src/navigation";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {SpeedInsights} from "@vercel/speed-insights/next"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Home | Thibault Morizet",
    description:
        "I am a full-stack developer who basically just enjoys creating things.",
};

export default function LocaleLayout({children, params: {locale}}: { children: React.ReactNode, params: any }) {
    if (!locales.includes(locale as any)) notFound();
    const messages = useMessages();

    return (
        <html lang={locale}>
        <NextIntlClientProvider messages={messages}>
            <body
                className={clsx(
                    inter.className,
                    "width-full bg-primary text-primary antialiased",
                )}
            >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Navigation/>
                <div
                    className={
                        "mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
                    }
                >
                    {children}
                </div>
            </ThemeProvider>
            <Analytics/>
            <SpeedInsights/>
            </body>
        </NextIntlClientProvider>
        </html>
    );
}
