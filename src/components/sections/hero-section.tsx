import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Vijay Raj
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Aspiring Developer · Agile Learner · AI/ML Intern · Future Innovator
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            I am a dedicated BTech Computer Science student at MVGR Engineering College with a strong focus on Data Science. As a tech enthusiast and continuous learner, I not only explore Artificial Intelligence and Machine Learning but actively learn and implement them to create impactful solutions. With hands-on experience as an App and Web developer, I have developed applications across both native and cross-platform technologies, showcasing adaptability and innovative problem-solving skills. Additionally, my expertise includes project management and a commitment to addressing real-world challenges with technological excellence. With a passion for knowledge and a drive for innovation, I aim to contribute to projects that redefine the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto group transition-transform hover:-translate-y-1">
                Get In Touch
                <ArrowDown className="ml-2 h-5 w-5 transform group-hover:rotate-[-45deg] transition-transform" />
              </Button>
            </Link>
            {/* Add a placeholder link for Resume download */}
            <Button size="lg" variant="outline" className="w-full sm:w-auto group transition-transform hover:-translate-y-1" disabled>
              Download Resume
              <Download className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
           <Image
            src="https://picsum.photos/400/400" // Placeholder image
            alt="Vijay Raj"
            width={400}
            height={400}
            className="rounded-full shadow-xl border-4 border-card z-10 transition-transform duration-500 group-hover:scale-105"
            priority // Prioritize loading the hero image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
