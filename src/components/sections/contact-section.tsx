'use client'; // Keep as client component for state management and hooks

import React, { useRef, useTransition } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast'; // Import useToast
import { sendMessageAction } from '@/app/actions/send-message'; // Import the server action

interface ContactSectionProps {
  id: string;
}

const contactInfo = [
  { icon: Mail, text: 'vijjukingv@gmail.com', href: 'mailto:vijjukingv@gmail.com' },
  { icon: Phone, text: '630551727', href: 'tel:630551727' },
  { icon: MapPin, text: 'Kancharapalem, Vizag, 530008', href: 'https://maps.google.com/?q=Kancharapalem,Vizag,530008' }, // Basic maps link
  { icon: Linkedin, text: 'linkedin.com/in/vijayraj-75864b2b0', href: 'https://www.linkedin.com/in/vijayraj-75864b2b0' },
];

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null); // Ref for the form

  const handleFormSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await sendMessageAction(formData);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you soon.',
        });
        formRef.current?.reset(); // Reset the form on success
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <section id={id} className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Details</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <item.icon className="h-6 w-6 text-accent mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                {item.href ? (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
                    {item.text}
                  </Link>
                ) : (
                  <span className="text-foreground">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form using Server Action */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              <CardDescription>Feel free to reach out with any questions or opportunities.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Bind the Server Action */}
              <form ref={formRef} action={handleFormSubmit} className="space-y-4">
                <Input type="text" name="name" placeholder="Your Name" required className="focus:ring-accent" disabled={isPending}/>
                <Input type="email" name="email" placeholder="Your Email" required className="focus:ring-accent" disabled={isPending}/>
                <Textarea name="message" placeholder="Your Message" required rows={5} className="focus:ring-accent" disabled={isPending}/>
                <Button type="submit" className="w-full group transition-transform hover:-translate-y-1" disabled={isPending}>
                  {isPending ? (
                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                  {isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
