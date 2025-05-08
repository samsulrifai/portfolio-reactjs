"use client";

import { useState, useMemo, useEffect } from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { portfolioItems, portfolioCategories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from 'next/navigation';
import type { Metadata } from 'next';

// Note: Metadata cannot be dynamically generated in client components.
// For dynamic metadata based on filters, consider server-side logic or a separate metadata export.
// export const metadata: Metadata = {
// title: 'My Works',
// description: 'Explore my collection of projects, showcasing my skills in web development, UI/UX design, and more.',
// keywords: ['projects', 'portfolio', 'gallery', 'web development', 'ui/ux design', 'mobile apps'],
// };


export default function WorksPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearchTerm = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    router.replace(`/works?${params.toString()}`, { scroll: false });
  }, [selectedCategory, searchTerm, router, mounted]);


  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const searchMatch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.briefDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  if (!mounted) {
    // Render a loading state or null to avoid hydration mismatch
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Loading Works...</h1>
          <p className="text-lg text-muted-foreground">Please wait while we fetch the projects.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">My Works</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Dive into my portfolio of projects. Filter by category or search for specific skills or technologies.
        </p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-muted/50 rounded-lg shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Input 
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          {searchTerm && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchTerm('')}
            >
              <X className="h-4 w-4"/>
            </Button>
          )}
        </div>
        
        <div className="w-full sm:w-auto">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {portfolioCategories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-2xl font-semibold text-muted-foreground">No projects found.</p>
          <p className="text-md text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
           { (selectedCategory !== 'All' || searchTerm !== '') && (
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
            >
              Clear Filters
            </Button>
           )}
        </div>
      )}
    </div>
  );
}
