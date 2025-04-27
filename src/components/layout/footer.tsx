import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react'; // Added Mail and Phone icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Vijay Raj. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/vijayraj-75864b2b0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href="mailto:vijjukingv@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
           <Link href="tel:630551727" aria-label="Mobile">
             <Phone className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
           </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
