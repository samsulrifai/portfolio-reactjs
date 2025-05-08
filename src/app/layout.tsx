import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as per previous fix
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';
import { aboutMe } from '@/lib/data'; // Updated import path for aboutMe

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: `${APP_NAME} - ${aboutMe.name}'s Portfolio`, // Use aboutMe.name
    template: `%s | ${APP_NAME}`,
  },
  description: `Welcome to ${aboutMe.name}'s digital marketing portfolio. Discover successful campaigns on Shopee, Tokopedia, Lazada, and expertise in growing online businesses.`,
  keywords: ['portfolio', aboutMe.name, 'digital marketing', 'marketplace ads', 'shopee expert', 'tokopedia expert', 'lazada expert', 'e-commerce consultant', 'seo', 'sem', 'social media marketing'],
  openGraph: {
    title: `${APP_NAME} - ${aboutMe.name}'s Digital Marketing Portfolio`,
    description: `Explore ${aboutMe.name}'s successful digital marketing campaigns and expertise in e-commerce growth.`,
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: APP_NAME,
     images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - ${aboutMe.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} - ${aboutMe.name}'s Digital Marketing Portfolio`,
    description: `Explore ${aboutMe.name}'s successful digital marketing campaigns and expertise in e-commerce growth.`,
     images: ['/og-image.png'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased flex flex-col min-h-screen`}> {/* Removed GeistMono */}
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

