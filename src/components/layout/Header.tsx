"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinks, APP_NAME } from '@/lib/constants';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-background"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          {APP_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-foreground hover:text-primary hover:bg-accent/50 transition-colors",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-xl font-bold text-primary" onClick={closeMobileMenu}>
                  {APP_NAME}
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg py-2 rounded-md text-center hover:bg-accent hover:text-primary transition-colors",
                        pathname === link.href ? "font-semibold text-primary bg-accent/80" : "text-foreground"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
