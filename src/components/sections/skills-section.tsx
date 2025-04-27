import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Cpu, Database, Award, BrainCircuit, Briefcase } from 'lucide-react'; // Added relevant icons
import Link from 'next/link'; // Import Link

interface SkillsSectionProps {
  id: string;
}

const skillsData = {
  'Data Science & Analysis': { icon: BrainCircuit, skills: ['Understanding phases in Data science', 'Overview of Data Analysis', 'Data Science and Analytics', 'AI/ML Implementation'] },
  'Business & Management': { icon: Briefcase, skills: ['Business Analysis', 'Project Management', 'Agile Learning'] },
  'Development': { icon: Cpu, skills: ['App Development (Native & Cross-Platform)', 'Web Development'] },
  'Cloud & Architecture': { icon: Database, skills: ['AWS Solutions Architecture'] },
};

const certificationsData = [
  { name: 'TCS ION Career edge - Young Professional', icon: Award },
  { name: 'Data Science & Analysis', icon: Award }, // Changed name here
  { name: 'Six Sigma White Belt', icon: Award, href: 'https://drive.google.com/file/d/1Pt5fSdUIyrAk13PT64PdKcYzhDtGoZNw/view?usp=drive_link' }, // Added href
  { name: 'AWS APAC - Solutions Architecture Job Simulation', icon: Award },
];


const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Skills & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skillsData).map(([category, data]) => (
            <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-primary">
                  <data.icon className="h-6 w-6 text-accent" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 transition-transform hover:scale-105">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {certificationsData.map((cert) => (
               cert.href ? (
                 <Link key={cert.name} href={cert.href} target="_blank" rel="noopener noreferrer" className="block">
                   <Card className="text-center p-4 h-full hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                     <cert.icon className="h-8 w-8 text-accent mb-2" />
                     <p className="text-sm font-medium text-foreground">{cert.name}</p>
                   </Card>
                 </Link>
               ) : (
                 <Card key={cert.name} className="text-center p-4 h-full hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center">
                   <cert.icon className="h-8 w-8 text-accent mb-2" />
                   <p className="text-sm font-medium text-foreground">{cert.name}</p>
                 </Card>
               )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
