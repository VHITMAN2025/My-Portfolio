import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsSectionProps {
  id: string;
}

// Placeholder projects - Replace with actual project data
const projectsData = [
  {
    title: 'Wheel ways (HCL Tech)', // Changed title here
    description: 'Internal mobile application for employees to request company vehicles. Features secure login, request tracking, and inventory management.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Mobile App', 'Internal Tool', 'UI/UX', 'Backend Integration'],
    githubUrl: '#', // Add actual GitHub link if available
    liveUrl: null, // Add live demo link if available
  },
  {
    title: 'Data Science Portfolio Project',
    description: 'A comprehensive project showcasing data analysis, visualization, and machine learning model implementation on a real-world dataset.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Data Science', 'Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    githubUrl: '#', // Add actual GitHub link
    liveUrl: '#', // Add live demo link
  },
   {
    title: 'Personal Portfolio Website',
    description: 'This very website! Built with Next.js, Tailwind CSS, and ShadCN UI for a modern, responsive, and animated showcase.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI', 'Web Development'],
    githubUrl: '#', // Add GitHub link if public
    liveUrl: '/', // Link to the current site
  },
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
                    alt={project.title} // Alt text automatically reflects the updated title
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
                   <Link href={project.liveUrl} target={project.liveUrl.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                     <Button variant="default" size="sm">
                       <ExternalLink className="mr-1 h-4 w-4" /> {project.liveUrl.startsWith('http') ? 'Live Demo' : 'View'}
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
