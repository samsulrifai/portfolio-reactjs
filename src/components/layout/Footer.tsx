import Link from 'next/link';
import { socialLinks, APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              {APP_NAME}
            </Link>
            <p className="mt-2 text-sm">Crafting digital experiences that resonate.</p>
          </div>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors rounded-full"
                aria-label={link.name}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <p className="text-sm text-center md:text-right">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
