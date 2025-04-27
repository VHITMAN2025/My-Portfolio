import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vijay Raj Portfolio',
  description: 'Portfolio of Vijay Raj - Aspiring Developer · AI/ML Intern · Future Innovator',
  icons: {
    icon: '/images/Favicon_Image.png', // Correct path to your photo for favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
