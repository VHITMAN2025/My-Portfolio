import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a clean, modern font
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define CSS variable for the font
});

export const metadata: Metadata = {
  title: 'Vijay Raj Portfolio',
  description: 'Portfolio of Vijay Raj - Aspiring Developer · AI/ML Intern · Future Innovator',
  icons: {
    icon: '/images/profile.jpeg', // Updated favicon path to point to image in public/images
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}> {/* Use the font variable */}
        {children}
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
