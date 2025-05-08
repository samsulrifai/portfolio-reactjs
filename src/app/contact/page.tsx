import { ContactForm } from '@/components/ContactForm';
import { socialLinks } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';
import { aboutMe } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: `Get in touch with ${aboutMe.name} for collaborations on digital marketing, Shopee, Tokopedia, or Lazada advertising projects. Send a message or connect on social media.`,
  keywords: ['contact', 'message', 'email', 'social media', aboutMe.name, 'digital marketing consultant', 'marketplace ads expert', 'shopee ads', 'tokopedia ads', 'lazada ads', 'e-commerce strategy'],
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">Get In Touch</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Have an e-commerce project, a question about marketplace advertising, or just want to discuss digital growth? I&apos;d love to hear from you!
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <MessageSquare className="h-7 w-7 mr-3" />
                <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
              </div>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <aside className="md:col-span-2 space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <Mail className="h-7 w-7 mr-3" />
                <CardTitle className="text-2xl text-foreground">Other Ways to Connect</CardTitle>
              </div>
              <CardDescription>You can also find me on these platforms:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  asChild
                  className="w-full justify-start text-left group hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5 mr-3 text-primary group-hover:text-accent-foreground transition-colors" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>

          <div className="text-center p-6 bg-muted/30 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-foreground mb-2">Availability</h3>
              <p className="text-sm text-muted-foreground">
                I&apos;m currently available for freelance projects and consulting on marketplace advertising and e-commerce strategy. Feel free to reach out!
              </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
