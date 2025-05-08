
import type { PortfolioItem, Skill, Experience, Education } from '@/types';
import { Code, Database, Cloud, Mic, Users, PenTool, Palette, BarChart3, Briefcase, GraduationCap, Settings, ShieldCheck } from 'lucide-react';

export const portfolioCategories: string[] = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    slug: 'project-alpha',
    title: 'Project Alpha',
    briefDescription: 'A cutting-edge web application for data visualization.',
    detailedDescription: (
      <>
        <p className="mb-4">Project Alpha is a comprehensive web platform designed to revolutionize how users interact with complex datasets. Built with a modern tech stack including Next.js, TypeScript, and D3.js, it offers an intuitive interface for generating insightful visualizations.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Key Features:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Interactive charts and graphs</li>
          <li>Real-time data updates</li>
          <li>Customizable dashboards</li>
          <li>Secure user authentication</li>
        </ul>
        <p>The primary challenge was handling large volumes of data efficiently while maintaining a smooth user experience. We employed server-side rendering and optimized data fetching strategies to achieve this.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/alpha/600/400',
    category: 'Web Development',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Data Visualization'],
    projectUrl: '#',
    client: 'Tech Solutions Inc.',
    date: '2023-05-15',
  },
  {
    id: '2',
    slug: 'ux-redesign-beta',
    title: 'UX Redesign Beta',
    briefDescription: 'User experience overhaul for a popular e-commerce platform.',
    detailedDescription: (
       <>
        <p className="mb-4">This project involved a complete UX/UI overhaul for BetaCommerce, aiming to improve user engagement and conversion rates. We conducted extensive user research, A/B testing, and iterative prototyping.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Achievements:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>20% increase in conversion rates</li>
          <li>15% reduction in bounce rate</li>
          <li>Improved user satisfaction scores by 25%</li>
        </ul>
        <p>The redesigned interface focuses on simplicity, intuitive navigation, and a visually appealing aesthetic that aligns with modern e-commerce trends.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/beta/600/400',
    category: 'UI/UX Design',
    tags: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
    client: 'BetaCommerce LLC',
    date: '2022-11-01',
  },
  {
    id: '3',
    slug: 'mobile-gamma',
    title: 'Mobile App Gamma',
    briefDescription: 'A cross-platform mobile application for productivity.',
    detailedDescription: (
      <>
        <p className="mb-4">Gamma Mobile is a productivity application built with React Native, available for both iOS and Android. It helps users organize tasks, manage projects, and collaborate seamlessly.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Core Functionality:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Task management with deadlines and priorities</li>
          <li>Project collaboration with team members</li>
          <li>Offline access and synchronization</li>
          <li>Push notifications for important updates</li>
        </ul>
        <p>The app boasts a clean, minimalist design focused on enhancing user productivity without overwhelming them with features.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/gamma/600/400',
    category: 'Mobile App',
    tags: ['React Native', 'iOS', 'Android', 'Firebase'],
    projectUrl: '#',
    date: '2023-09-20',
  },
  {
    id: '4',
    slug: 'delta-dashboard',
    title: 'Delta Dashboard',
    briefDescription: 'An analytics dashboard for enterprise clients.',
    detailedDescription: (
      <>
        <p className="mb-4">The Delta Dashboard provides enterprise clients with powerful analytics and reporting tools. It features a modular design, allowing customization to specific business needs.</p>
        <h3 className="text-xl font-semibold mb-2 text-primary">Technical Stack:</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Frontend: React, Redux, Chart.js</li>
          <li>Backend: Node.js, Express, PostgreSQL</li>
          <li>Deployment: AWS Elastic Beanstalk</li>
        </ul>
        <p>Security and scalability were paramount, leading to the implementation of robust authentication mechanisms and a microservices-based architecture.</p>
      </>
    ),
    imageUrl: 'https://picsum.photos/seed/delta/600/400',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'Analytics', 'Enterprise'],
    client: 'Global Corp',
    date: '2024-01-10',
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 95, icon: <Code /> },
  { name: 'TypeScript', level: 90, icon: <Code /> },
  { name: 'React / Next.js', level: 95, icon: <Code /> },
  { name: 'Node.js / Express', level: 85, icon: <Database /> },
  { name: 'UI/UX Design (Figma, Adobe XD)', level: 90, icon: <Palette /> },
  { name: 'Responsive Web Design', level: 95, icon: <PenTool /> },
  { name: 'REST APIs & GraphQL', level: 80, icon: <Cloud /> },
  { name: 'Databases (SQL, NoSQL)', level: 75, icon: <Database /> },
  { name: 'Version Control (Git)', level: 90, icon: <Briefcase /> },
  { name: 'Agile Methodologies', level: 85, icon: <Users /> },
  { name: 'Problem Solving', level: 95, icon: <Settings /> },
  { name: 'Communication', level: 90, icon: <Mic /> },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Innovatech Solutions',
    period: 'Jan 2021 - Present',
    description: 'Led frontend development for key client projects, mentored junior developers, and contributed to architectural decisions. Specialized in building performant and accessible web applications using React and Next.js.',
    logoUrl: 'https://picsum.photos/seed/innovatech/40/40'
  },
  {
    role: 'UI/UX Designer',
    company: 'Creative Designs Co.',
    period: 'Jun 2018 - Dec 2020',
    description: 'Designed user-centric interfaces for web and mobile applications. Conducted user research, created wireframes and prototypes, and collaborated closely with development teams to ensure design fidelity.',
    logoUrl: 'https://picsum.photos/seed/creativeco/40/40'
  },
  {
    role: 'Junior Web Developer',
    company: 'WebStartups Inc.',
    period: 'Aug 2016 - May 2018',
    description: 'Developed and maintained websites for various clients using HTML, CSS, JavaScript, and jQuery. Gained foundational experience in full-stack development and agile practices.',
    logoUrl: 'https://picsum.photos/seed/webstartups/40/40'
  },
];

export const educations: Education[] = [
  {
    degree: 'M.Sc. in Human-Computer Interaction',
    institution: 'University of Advanced Technology',
    period: '2014 - 2016',
    description: 'Focused on usability engineering, interaction design, and user research methodologies.',
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'State University',
    period: '2010 - 2014',
    description: 'Completed a comprehensive curriculum in software development, algorithms, and data structures.',
  },
];

export const aboutMe = {
  name: "Alex Johnson", // Replace with your name
  title: "Full-Stack Developer & UI/UX Enthusiast",
  bio: `Hello! I'm Alex, a passionate and results-driven Full-Stack Developer with a keen eye for UI/UX design. With over 7 years of experience in the tech industry, I specialize in creating dynamic, responsive, and user-friendly web and mobile applications. My journey in technology began with a fascination for how software can solve real-world problems, and this curiosity continues to drive my work today.

I thrive in collaborative environments and enjoy tackling complex challenges, transforming ideas into tangible products. My expertise spans across the MERN stack, Next.js, and various design tools like Figma. I'm always eager to learn new technologies and methodologies to stay at the forefront of innovation.

When I'm not coding or designing, you can find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects. I believe in continuous learning and strive to make a positive impact through my work.`,
  profileImageUrl: "https://picsum.photos/seed/profile/300/300",
};
