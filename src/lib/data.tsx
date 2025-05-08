
import type { PortfolioItem, Skill, Experience, Education } from '@/types';
import { ShoppingCart, Search, ThumbsUp, FileText, Target, BarChart3, Mail, Briefcase, Lightbulb, Mic, GraduationCap, UserCircle2, Palette } from 'lucide-react';

export const portfolioCategories: string[] = ['All', 'Marketplace Advertising', 'SEO & Content', 'Social Media Campaigns', 'E-commerce Strategy'];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    slug: 'shopee-campaign-success',
    title: 'Shopee Campaign Success Story',
    briefDescription: 'Boosted sales by 150% for a fashion brand on Shopee through targeted ads and promotions.',
    detailedDescription: (
      <>
        <p className="mb-4">This project focused on revitalizing a fashion brand&apos;s presence on Shopee. We developed a comprehensive strategy involving Shopee Ads (Search Ads, Discovery Ads), Flash Sales, and influencer collaborations.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Key Achievements:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Increased overall sales by 150% within 3 months.</li>
          <li>Achieved an average Return on Ad Spend (ROAS) of 8:1.</li>
          <li>Grew store followers by 50K.</li>
          <li>Improved product visibility for key items.</li>
        </ul>
        <p>The primary challenge was standing out in a competitive fashion market. We overcame this through meticulous keyword research, compelling ad creatives, and optimized bidding strategies for Shopee Ads.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/shopee-campaign/600/400',
    category: 'Marketplace Advertising',
    tags: ['Shopee Ads', 'E-commerce', 'Fashion', 'Campaign Management', 'ROAS Optimization'],
    projectUrl: '#', // Link to a mock case study or report
    client: 'Chic Apparel Co.',
    date: '2023-08-20',
  },
  {
    id: '2',
    slug: 'tokopedia-seo-overhaul',
    title: 'Tokopedia SEO & Content Overhaul',
    briefDescription: 'Drove a 70% increase in organic traffic for an electronics store on Tokopedia.',
    detailedDescription: (
       <>
        <p className="mb-4">This project involved a complete SEO and content strategy overhaul for an electronics retailer on Tokopedia. We focused on optimizing product listings, store decoration, and creating informative content to attract organic traffic.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Results:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>70% increase in organic search traffic on Tokopedia.</li>
          <li>Improved ranking for 20+ high-intent keywords.</li>
          <li>Enhanced user engagement metrics (e.g., time on page, lower bounce rate).</li>
          <li>Significant uplift in conversions from organic channels.</li>
        </ul>
        <p>We utilized Tokopedia&apos;s native tools and SEO best practices to ensure maximum visibility and relevance for the client&apos;s products within the platform.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/tokopedia-seo/600/400',
    category: 'SEO & Content',
    tags: ['Tokopedia', 'SEO', 'Content Marketing', 'E-commerce', 'Electronics'],
    client: 'Gadget Hub',
    date: '2022-12-10',
  },
  {
    id: '3',
    slug: 'lazada-social-campaign',
    title: 'Lazada Integrated Social Media Campaign',
    briefDescription: 'Successful multi-platform social media campaign driving traffic and sales to a Lazada store.',
    detailedDescription: (
      <>
        <p className="mb-4">Developed and executed an integrated social media campaign across Facebook, Instagram, and TikTok to promote a home goods store on Lazada. The campaign included engaging content, targeted ads, and influencer partnerships.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Campaign Highlights:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Reached over 2 million unique users.</li>
          <li>Generated 50,000+ clicks to the Lazada store.</li>
          <li>Increased social media engagement by 300%.</li>
          <li>Contributed to a 40% sales uplift during the campaign period.</li>
        </ul>
        <p>The strategy focused on creating platform-specific content that resonated with target audiences, seamlessly guiding them to the client&apos;s Lazada store for purchases.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/lazada-social/600/400',
    category: 'Social Media Campaigns',
    tags: ['Lazada', 'Social Media Marketing', 'Facebook Ads', 'Instagram Marketing', 'TikTok Strategy'],
    projectUrl: '#',
    date: '2023-11-05',
  },
  {
    id: '4',
    slug: 'ecommerce-growth-strategy',
    title: 'E-commerce Growth Strategy for SME',
    briefDescription: 'Developed a comprehensive e-commerce growth strategy for a small business, resulting in 200% YoY growth.',
    detailedDescription: (
      <>
        <p className="mb-4">This project involved creating a holistic e-commerce strategy for a startup in the artisanal food sector. The strategy encompassed marketplace selection (Shopee & Tokopedia), branding, digital marketing, and customer retention plans.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Key Components:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Market analysis and competitive research.</li>
          <li>Multi-channel marketing plan (Marketplace Ads, Social Media, Email).</li>
          <li>Store setup and optimization on Shopee and Tokopedia.</li>
          <li>Customer journey mapping and CRM integration.</li>
        </ul>
        <p>The strategy led to a 200% year-over-year growth in online sales and established a strong brand presence in the target market.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/ecommerce-strategy/600/400',
    category: 'E-commerce Strategy',
    tags: ['Strategy', 'Growth Hacking', 'Shopee', 'Tokopedia', 'SME Consulting'],
    client: 'Artisan Delights Ltd.',
    date: '2024-02-15',
  },
];

export const skills: Skill[] = [
  { name: 'Marketplace Ads (Shopee, Tokopedia, Lazada)', level: 95, icon: <ShoppingCart /> },
  { name: 'SEO/SEM (Google, Marketplace SEO)', level: 90, icon: <Search /> },
  { name: 'Social Media Marketing (FB, IG, TikTok)', level: 85, icon: <ThumbsUp /> },
  { name: 'Content Marketing & Strategy', level: 80, icon: <FileText /> },
  { name: 'Digital Campaign Management', level: 90, icon: <Target /> },
  { name: 'Analytics & Reporting (GA, Marketplace Dashboards)', level: 88, icon: <BarChart3 /> },
  { name: 'Email Marketing', level: 75, icon: <Mail /> },
  { name: 'E-commerce Strategy & Growth Hacking', level: 92, icon: <Briefcase /> },
  { name: 'Market Research & Analysis', level: 85, icon: <Lightbulb /> },
  { name: 'Communication & Presentation', level: 90, icon: <Mic /> },
  { name: 'Ad Creative Design (Canva, Basic PS/AI)', level: 70, icon: <Palette /> },
  { name: 'CRM & Customer Retention Strategies', level: 78, icon: <UserCircle2 /> },
];

export const experiences: Experience[] = [
  {
    role: 'Digital Marketing & Marketplace Ads Specialist',
    company: 'EcomGrowth Agency',
    period: 'Feb 2020 - Present',
    description: 'Managed and optimized ad campaigns on Shopee, Tokopedia, and Lazada for diverse clients, consistently exceeding ROAS targets. Developed comprehensive digital marketing strategies, including SEO, SMM, and content marketing to drive e-commerce growth.',
    logoUrl: 'https://picsum.photos/seed/ecomgrowth/40/40'
  },
  {
    role: 'Marketplace Executive',
    company: 'RetailGiant Indonesia',
    period: 'Jul 2018 - Jan 2020',
    description: 'Handled daily operations for official stores on Tokopedia and Shopee. Responsible for product listing optimization, campaign execution, inventory coordination, and customer service. Gained deep insights into marketplace algorithms and best practices.',
    logoUrl: 'https://picsum.photos/seed/retailgiant/40/40'
  },
  {
    role: 'Digital Marketing Intern',
    company: 'StartupHub Accelerator',
    period: 'Jan 2018 - Jun 2018',
    description: 'Assisted multiple startups with their initial digital marketing efforts, including social media setup, content creation, and basic ad campaigns on Google and Facebook. Contributed to market research and competitor analysis.',
    logoUrl: 'https://picsum.photos/seed/startuphub/40/40'
  },
];

export const educations: Education[] = [
  {
    degree: 'Sarjana Komputer (S.Kom.) - Teknik Informatika',
    institution: 'Universitas Muhammadiyah Purwokerto',
    period: '2019 - 2023',
    description: 'Graduated with a focus on software development, data structures, algorithms, and information systems. Developed a strong foundation in technology which complements my digital marketing expertise.',
  },
  {
    degree: 'Certified Digital Marketing Professional (CDMP)',
    institution: 'Digital Marketing Institute',
    period: '2019', // Assuming this is still relevant or was obtained earlier/concurrently
    description: 'Completed comprehensive certification covering SEO, SEM, Social Media Marketing, Email Marketing, and Digital Strategy.',
  },
];

export const aboutMe = {
  name: "Samsul Rifai",
  title: "Digital Marketing Enthusiast & Marketplace Ads Expert",
  bio: `Hello! I'm Samsul Rifai, a results-oriented Digital Marketing Enthusiast with a strong specialization in Marketplace Ads, particularly on Shopee, Tokopedia, and Lazada. With a passion for helping businesses thrive in the digital landscape, I've dedicated my career to mastering the art and science of online advertising and e-commerce growth.

My expertise lies in crafting and executing high-impact ad campaigns, optimizing product listings for maximum visibility, and leveraging data analytics to drive conversions and maximize ROI. I have a deep understanding of the nuances of Southeast Asian e-commerce platforms and enjoy developing tailored strategies that resonate with local audiences. From keyword research and bid management to creative optimization and performance analysis, I handle the full spectrum of marketplace advertising.

Beyond marketplaces, I'm skilled in broader digital marketing disciplines including SEO/SEM, social media marketing, and content strategy, all aimed at building strong online presences and achieving sustainable growth for e-commerce businesses. I thrive on data-driven decision-making and continuously adapt to the ever-evolving digital marketing trends.

When I'm not immersed in campaign analytics or exploring new platform features, I enjoy staying updated with industry blogs, attending webinars, and sharing insights with fellow marketing professionals. I'm committed to continuous learning and empowering businesses to succeed in the competitive online arena.`,
  profileImageUrl: "https://picsum.photos/seed/samsul-profile/300/300",
};

