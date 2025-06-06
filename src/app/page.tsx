
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, Briefcase, Lightbulb, Mail } from 'lucide-react';
import { portfolioItems, aboutMe } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: `Welcome to ${aboutMe.name}'s portfolio. Discover my successful digital marketing campaigns, marketplace ads expertise, and professional journey.`,
  keywords: ['portfolio', aboutMe.name, 'digital marketing', 'marketplace ads', 'shopee expert', 'tokopedia expert', 'lazada expert', 'e-commerce', 'home page'],
};


export default function HomePage() {
  const featuredWorks = portfolioItems.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text and Buttons */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Hi, I&apos;m <span className="text-primary">{aboutMe.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A {aboutMe.title}. I help businesses boost their online sales and presence through expert advertising on Shopee, Tokopedia, Lazada, and strategic digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/works">
                    View My Campaigns <Briefcase className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/contact">
                    Get In Touch <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-primary/30">
                <Image
                  src={aboutMe.profileImageUrl}
                  alt={`${aboutMe.name} - ${aboutMe.title}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
                  data-ai-hint="professional portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={aboutMe.profileImageUrl}
                alt={aboutMe.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint="professional portrait" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">A Little About Me</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {aboutMe.bio.substring(0, 250)}... 
              </p>
              <Button asChild variant="link" className="text-primary p-0 text-lg hover:underline">
                <Link href="/about">
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Works Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Campaigns & Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s a glimpse of some impactful campaigns and projects I&apos;m proud of. Each showcases strategic thinking and tangible results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint="marketing campaign e-commerce"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-semibold mb-2 text-foreground">{item.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{item.briefDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.slice(0,3).map(tag => (
                      <span key={tag} className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 border-t">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/works/${item.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/works">
                Explore All Projects <Lightbulb className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
