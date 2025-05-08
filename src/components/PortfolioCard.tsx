"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PortfolioItem } from '@/types';
import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-lg border border-border hover:border-primary/50">
      <CardHeader className="p-0">
        <Link href={`/works/${item.slug}`} className="block relative aspect-[3/2] overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={`${item.category} campaign`}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl lg:text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          <Link href={`/works/${item.slug}`}>{item.title}</Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.briefDescription}</p>
        <div className="flex flex-wrap gap-2 mb-2">
            {item.tags?.slice(0,3).map(tag => (
              <span key={tag} className="text-xs bg-accent/20 text-primary px-2 py-1 rounded-full">{tag}</span>
            ))}
         </div>
      </CardContent>
      <CardFooter className="p-6 border-t mt-auto">
        <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
          <Link href={`/works/${item.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
