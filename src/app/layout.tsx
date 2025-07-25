import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased h-full dark:bg-[#0E172A]`}
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full dark:bg-[#0c1528]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          <div className="w-full h-full md:px-14 lg:px-28 max-lg:pt-12 max-md:pt-5 px-5 lg:mx-auto max-w-screen-xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
