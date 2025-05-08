import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: `${APP_NAME} - My Portfolio`,
    template: `%s | ${APP_NAME}`,
  },
  description: 'Welcome to my personal portfolio. Discover my projects, skills, and experiences.',
  keywords: ['portfolio', 'developer', 'designer', 'web development', 'ui/ux', 'projects'],
  openGraph: {
    title: `${APP_NAME} - Personal Portfolio`,
    description: 'Explore my creative works and professional background.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: APP_NAME,
     images: [
      {
        url: '/og-image.png', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: `${APP_NAME} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - Personal Portfolio`,
    description: 'Explore my creative works and professional background.',
     images: ['/og-image.png'], // Replace with your actual OG image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
