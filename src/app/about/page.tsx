import Image from 'next/image';
import { skills, experiences, educations, aboutMe } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Briefcase, GraduationCap, Sparkles, UserCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${aboutMe.name}, my digital marketing skills, professional experience in marketplace advertising (Shopee, Tokopedia, Lazada), and educational background.`,
  keywords: ['about me', 'biography', 'skills', 'experience', 'education', aboutMe.name, 'digital marketing', 'marketplace ads', 'shopee expert', 'tokopedia expert', 'lazada expert', 'e-commerce consultant'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">About Me</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Get to know the strategist behind the campaigns – my journey, skills, and passion for digital growth.
        </p>
      </header>

      {/* Biography Section */}
      <section className="mb-16">
        <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src={aboutMe.profileImageUrl}
                alt={aboutMe.name}
                fill
                className="object-cover"
                data-ai-hint="professional portrait"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-10">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center text-primary mb-2">
                  <UserCircle2 className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-semibold text-foreground">My Story</h2>
                </div>
                <CardDescription className="text-lg text-muted-foreground">{aboutMe.title}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed">
                  {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex items-center text-primary mb-6 md:mb-8">
          <Sparkles className="h-8 w-8 mr-3" />
          <h2 className="text-3xl font-semibold text-foreground">My Skills</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {skill.icon && <span className="mr-3 text-primary">{skill.icon}</span>}
                  <h3 className="text-lg font-medium text-foreground">{skill.name}</h3>
                </div>
                {skill.level && (
                  <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Experience Section */}
        <section>
          <div className="flex items-center text-primary mb-6 md:mb-8">
            <Briefcase className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
          </div>
          <div className="space-y-8 relative border-l-2 border-primary/30 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[38px] top-1 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                  {exp.logoUrl ? (
                     <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={20} height={20} className="rounded-full" data-ai-hint="company logo marketing"/>
                  ) : (
                    <Briefcase className="h-3 w-3 text-primary-foreground"/>
                  )}
                </div>
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{exp.role}</CardTitle>
                    <CardDescription className="text-md text-muted-foreground">
                      {exp.company} &bull; {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center text-primary mb-6 md:mb-8">
            <GraduationCap className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-semibold text-foreground">Education</h2>
          </div>
           <div className="space-y-8 relative border-l-2 border-primary/30 pl-8">
            {educations.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[38px] top-1 h-6 w-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                   <GraduationCap className="h-3 w-3 text-primary-foreground"/>
                </div>
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                    <CardDescription className="text-md text-muted-foreground">
                      {edu.institution} &bull; {edu.period}
                    </CardDescription>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-sm text-foreground leading-relaxed">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
