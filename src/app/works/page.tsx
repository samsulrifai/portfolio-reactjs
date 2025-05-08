"use client";

import { useState, useMemo, useEffect } from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { portfolioItems, portfolioCategories, aboutMe } from '@/lib/data';
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
// import type { Metadata } from 'next'; // Metadata should be handled in a server component or generateMetadata function if dynamic aspects are needed

// export const metadata: Metadata = { // This should be in a server component or page.tsx if static
// title: `My Works | ${aboutMe.name}`,
// description: `Explore ${aboutMe.name}'s collection of digital marketing campaigns and e-commerce projects, showcasing expertise in Shopee, Tokopedia, Lazada, SEO, SMM, and more.`,
// keywords: ['projects', 'portfolio', 'digital marketing', 'marketplace advertising', 'shopee', 'tokopedia', 'lazada', 'seo', 'social media marketing', aboutMe.name],
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Loading Projects...</h1>
          <p className="text-lg text-muted-foreground">Please wait while we fetch the campaigns and projects.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">My Campaigns & Projects</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Dive into my portfolio of successful digital marketing campaigns and e-commerce projects. Filter by expertise or search for specific platforms like Shopee, Tokopedia, or Lazada.
        </p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-muted/50 rounded-lg shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Input 
            type="text"
            placeholder="Search projects (e.g., Shopee, SEO)"
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
            <SelectTrigger className="w-full sm:w-[220px]">
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

// It's better to define static metadata directly or use generateMetadata for dynamic parts in a server context.
// For this client component, if metadata is desired, it would typically be set in the nearest parent server component or layout.
// For example, in `src/app/works/layout.tsx` if it existed, or `src/app/layout.tsx` if global to all works.
// Since we are in a client component, we cannot export `metadata` directly for Next.js to pick up.
// The `metadata` object above the component is commented out for this reason.
// However, if you need a static title for this page, you can set it in the parent layout or a specific layout for `/works`.
// Or, if this page were a Server Component, the metadata object would work.
export const dynamic = 'force-dynamic'; // Or other appropriate export if needed for searchParams
