import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsSectionProps {
  id: string;
}

// Updated projects data
const projectsData = [
  {
    title: 'Wheel ways (HCL Tech)',
    description: 'Internal mobile application for employees to request company vehicles. Features secure login, request tracking, and inventory management.',
    imageUrl: '/images/voteshield.png', // Corrected path relative to /public
    tags: ['Android Studio', 'Java', 'Firebase', 'XML'], // Updated tags
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: null, // Add live demo link if available
  },
  {
    title: 'Study Mate', // Updated project title
    description: 'A comprehensive web platform designed to streamline access to academic resources. Faculty members can upload study materials (PDFs) categorized by regulation, branch, and semester into a secure database. Students can easily log in with their credentials to access the materials they need for their studies. This platform ensures organized and efficient distribution of educational content, enhancing the learning experience for all users.',
    imageUrl: 'https://picsum.photos/id/180/367/267', // New placeholder image
    tags: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'], // Updated tags
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: '#', // Add live demo link if available
  },
   {
    title: 'Personal Portfolio Website',
    description: 'This very website! Built with Next.js, Tailwind CSS, and ShadCN UI for a modern, responsive, and animated showcase.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI', 'Web Development'],
    githubUrl: '#', // Add GitHub link if public
    liveUrl: '/', // Link to the current site
  },
  {
    title: 'Voteshield',
    description: 'Our project is an AI-powered mobile app designed to simplify and secure voter verification at polling booths. It automates government ID recognition, quickly checks voter eligibility, updates their status in real time, and prevents double voting. By integrating features like organized voter lists and strong authentication measures, the app reduces wait times, eliminates human errors, and enhances transparency. Built on cutting-edge technologies like Flutter SDK, Firebase, and AI-based OCR, it offers a faster, safer, and more efficient voting experience',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ["Flutter", "ML Kit", "Firebase", "Dart"],
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: null, // Add live demo link if available
  }
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Project Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 w-full overflow-hidden">
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill // Use fill for responsive images within a sized container
                    style={{ objectFit: 'cover' }} // Ensure image covers the area
                    className="transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                 <div className="flex flex-wrap gap-1 pt-2">
                   {project.tags.map((tag) => (
                     <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                       {tag}
                     </span>
                   ))}
                 </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-4">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-1 h-4 w-4" /> GitHub
                    </Button>
                  </Link>
                )}
                 {project.liveUrl && (
                   <Link href={project.liveUrl} target={project.liveUrl.startsWith('http') || project.liveUrl.startsWith('/') ? '_blank' : '_self'} rel="noopener noreferrer">
                     <Button variant="default" size="sm">
                       <ExternalLink className="mr-1 h-4 w-4" /> {project.liveUrl.startsWith('http') || project.liveUrl.startsWith('/') ? 'Live Demo' : 'View'}
                     </Button>
                   </Link>
                 )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
