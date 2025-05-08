import { portfolioItems, aboutMe } from '@/lib/data'; // Added aboutMe
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, CalendarDays, User, Tag } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { APP_NAME } from '@/lib/constants';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const item = portfolioItems.find(p => p.slug === slug);

  if (!item) {
    return {
      title: `Project Not Found | ${APP_NAME}`,
      description: 'The project or campaign you are looking for does not exist.',
    };
  }

  const previousImages = (await parent).openGraph?.images || []
  const keywords = item.tags ? [...item.tags, item.category, 'digital marketing', 'marketplace advertising', aboutMe.name] : ['digital marketing', 'marketplace advertising', aboutMe.name, item.category];


  return {
    title: `${item.title} | Works | ${aboutMe.name}`,
    description: item.briefDescription,
    keywords: keywords,
    openGraph: {
      title: `${item.title} | ${APP_NAME} - ${aboutMe.name}`,
      description: item.briefDescription,
      images: [item.imageUrl, ...previousImages],
    },
     twitter: {
      card: 'summary_large_image',
      title: `${item.title} | ${APP_NAME} - ${aboutMe.name}`,
      description: item.briefDescription,
      images: [item.imageUrl],
    }
  };
}

export async function generateStaticParams() {
  return portfolioItems.map(item => ({
    slug: item.slug,
  }));
}

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find(p => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Button variant="outline" asChild className="mb-8 group hover:bg-primary hover:text-primary-foreground transition-colors">
        <Link href="/works">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-2px] transition-transform" /> Back to Projects
        </Link>
      </Button>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">{item.title}</h1>
          <p className="text-xl text-muted-foreground">{item.briefDescription}</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl mb-8 border border-border">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 66vw"
                className="object-cover"
                priority
                data-ai-hint={`${item.category} campaign results`}
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed">
              {typeof item.detailedDescription === 'string' 
                ? <p>{item.detailedDescription}</p> 
                : item.detailedDescription
              }
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {item.category && (
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    <strong>Category:</strong>&nbsp;{item.category}
                  </div>
                )}
                {item.date && (
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                    <strong>Date:</strong>&nbsp;{item.date}
                  </div>
                )}
                {item.client && (
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    <strong>Client:</strong>&nbsp;{item.client}
                  </div>
                )}
                 {item.tags && item.tags.length > 0 && (
                  <div>
                    <strong className="block mb-1">Focus Areas & Platforms:</strong>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {item.projectUrl && item.projectUrl !== '#' && ( // Added condition to hide if #
              <Button asChild className="w-full" size="lg">
                <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                  View Case Study <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
}
