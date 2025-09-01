import type { Metadata } from 'next'

import './globals.css'
import Banner from '@/components/ui/banner'
import { IconArrowRight } from '@tabler/icons-react'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
    title: 'Pathway to productivity',
    description:
        'Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.',
    keywords: ['product', 'landing page', 'services'],
    authors: [
        {
            name: 'shad kamil',
        },
    ],
    metadataBase: new URL('https://localhost:3000'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Pathway to productivity',
        description:
            'Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.',
        images: ['/Logo.png'],
        url: 'https://localhost:3000',
        siteName: 'Pathway to productivity',
    },
    icons: {
        icon: '/favicon/favicon.ico', // Standard favicon
        shortcut: '/favicon/favicon-16x16.png', // Shortcut icon
        apple: '/favicon/apple-touch-icon.png', // iOS homescreen icon
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden antialiased">
                <Banner>
                    <p className="hidden items-center gap-2 text-sm/6 text-zinc-400 lg:flex">
                        This page is included in a free SaaS Website Kit.
                    </p>
                    <a href="#" className="text-white">
                        View the complete Kit
                        <IconArrowRight
                            aria-hidden="true"
                            className="ms-2 inline size-5 text-white"
                        />
                    </a>
                </Banner>
                <main className="relative">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
