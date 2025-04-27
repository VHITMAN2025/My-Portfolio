import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface ExperienceSectionProps {
  id: string;
}

const experienceData = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Project Intern',
    company: 'HCLTech',
    duration: 'December 2023 - April 2024 (5 months)',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    description: 'Developed a transport request mobile application for internal use at HCL, enabling employees to seamlessly request company vehicles for travel. Implemented secure login and request tracking features, optimized vehicle inventory management, and streamlined the return process. Contributed to enhancing operational efficiency and resource allocation through intuitive UI/UX and robust backend integration.',
  },
];

const educationData = [
   {
    type: 'education',
    icon: GraduationCap,
    degree: 'Bachelor of Technology - BTech, Computer Science',
    institution: 'MVGR College of Engineering',
    duration: 'September 2024 - October 2027 (Expected)',
    location: 'Vizianagaram, Andhra Pradesh, India'
  },
   {
    type: 'education',
    icon: GraduationCap,
    degree: 'Diploma of Education, Computer Engineering',
    institution: 'Government Polytechnic College',
    duration: 'December 2021 - May 2024',
    location: 'Visakhapatnam, Andhra Pradesh, India'
  },
  {
    type: 'education',
    icon: GraduationCap, // Assuming high school icon
    degree: 'Secondary School Certificate',
    institution: 'Gnananiketan Aided High School',
    duration: '', // Add duration if known
    location: 'Visakhapatnam, Andhra Pradesh, India' // Assuming location
  },
];

const TimelineItem: React.FC<{ item: any }> = ({ item }) => (
  <div className="relative pl-8 sm:pl-10 py-6 group">
    <div className={`absolute left-0 sm:left-2 top-6 h-full w-0.5 ${item.type === 'work' ? 'bg-accent' : 'bg-primary'} group-hover:bg-opacity-100 transition-colors duration-300`}></div>
    <div className={`absolute left-[-10px] sm:left-0 top-6 transform translate-x-[-50%] p-2 rounded-full ${item.type === 'work' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'} border-4 border-secondary transition-transform duration-300 group-hover:scale-110`}>
      <item.icon className="h-5 w-5" />
    </div>
    <Card className="ml-4 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-primary">{item.title || item.degree}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
          <span>{item.company || item.institution}</span>
          {item.location && <span className="hidden sm:inline">•</span>}
          {item.location && <span>{item.location}</span>}
        </CardDescription>
        {item.duration && (
          <div className="flex items-center text-xs text-muted-foreground pt-1">
            <Calendar className="h-3 w-3 mr-1" />
            {item.duration}
          </div>
        )}
      </CardHeader>
      {item.description && (
        <CardContent>
          <p className="text-sm text-foreground">{item.description}</p>
        </CardContent>
      )}
    </Card>
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Experience & Education</h2>
        <div className="relative">
          {/* Experience */}
          {experienceData.map((item, index) => (
            <TimelineItem key={`work-${index}`} item={item} />
          ))}
          {/* Education */}
          {educationData.map((item, index) => (
             <TimelineItem key={`edu-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
