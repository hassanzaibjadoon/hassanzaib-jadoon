
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag } from 'lucide-react';
import Layout from '@/components/Layout';

// Mock data - in a real app, you'd fetch this from an API or CMS
const projectsData = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    category: 'Web Design & Development',
    client: 'Retail Company',
    duration: '3 months',
    completedDate: 'June 2023',
    description: 'A complete redesign of an e-commerce platform focused on user experience and conversion optimization.',
    challenge: 'The client was experiencing high bounce rates and low conversion on their existing e-commerce site. The navigation was confusing, the checkout process was cumbersome, and the overall design was outdated.',
    solution: 'I conducted extensive user research to identify pain points in the current user journey. Based on these insights, I redesigned the information architecture, simplified the navigation, and created a streamlined checkout process. The new design featured a clean, modern aesthetic with clear product photography and improved product filtering.',
    results: 'The redesigned platform saw a 35% decrease in bounce rate, a 42% increase in time spent on site, and a 28% improvement in conversion rate within the first three months after launch.',
    technologies: ['React', 'Node.js', 'Figma', 'Shopify'],
    nextProjectId: '2',
    prevProjectId: '6'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    client: 'Financial Institution',
    duration: '4 months',
    completedDate: 'March 2023',
    description: 'Modern, intuitive mobile banking application designed with security and user experience in mind.',
    challenge: 'The client needed to modernize their mobile banking experience to compete with new fintech companies, while maintaining the security and reliability expected of an established financial institution.',
    solution: 'I developed a user-centered design that simplified complex banking tasks, incorporated biometric authentication, and used clear visual cues to help users understand their financial status at a glance. The design included real-time notifications, customizable dashboards, and an intuitive navigation system.',
    results: 'The new app received a 4.8/5 rating on app stores, a 67% increase in mobile banking engagement, and a 40% reduction in customer service calls related to app usage.',
    technologies: ['Figma', 'Sketch', 'Protopie', 'React Native'],
    nextProjectId: '3',
    prevProjectId: '1'
  },
  {
    id: '3',
    title: 'Brand Identity System',
    category: 'Branding',
    client: 'Tech Startup',
    duration: '2 months',
    completedDate: 'November 2022',
    description: 'Comprehensive brand identity system including logo, color palette, typography, and guidelines.',
    challenge: 'The startup was preparing for a significant funding round and market expansion, but their existing brand lacked cohesion and failed to communicate their innovative approach and values.',
    solution: 'I worked closely with the leadership team to define their brand values and positioning. From there, I developed a distinctive visual identity that reflected the company's forward-thinking approach while ensuring versatility across different applications and mediums.',
    results: 'The new brand identity helped secure $12M in funding, received industry recognition for its design excellence, and provided a solid foundation for the company's marketing efforts, resulting in increased brand recognition.',
    technologies: ['Adobe Illustrator', 'Adobe InDesign', 'After Effects'],
    nextProjectId: '4',
    prevProjectId: '2'
  },
  {
    id: '4',
    title: 'Corporate Website',
    category: 'Web Design',
    client: 'Consulting Firm',
    duration: '3 months',
    completedDate: 'August 2022',
    description: 'Professional website for a corporate client, focusing on clear communication and brand representation.',
    challenge: 'The client's existing website failed to effectively communicate their expertise and services, resulting in low engagement and poor lead generation.',
    solution: 'I restructured the site architecture to better highlight the client's core services and expertise. The new design incorporated case studies, testimonials, and thought leadership content to establish credibility and drive engagement.',
    results: '42% increase in organic traffic, 57% improvement in lead generation, and a significant reduction in bounce rate, particularly for service pages.',
    technologies: ['WordPress', 'Figma', 'HTML/CSS', 'JavaScript'],
    nextProjectId: '5',
    prevProjectId: '3'
  },
  {
    id: '5',
    title: 'Product Packaging',
    category: 'Branding',
    client: 'Consumer Goods Company',
    duration: '2 months',
    completedDate: 'May 2022',
    description: 'Distinctive packaging design for a consumer product, enhancing shelf presence and brand recognition.',
    challenge: 'The client was launching a new premium product line but needed packaging that would stand out on crowded retail shelves while communicating the product's quality and value.',
    solution: 'I developed a packaging design that utilized premium materials, tactile finishes, and a distinctive color palette to create shelf impact. The design incorporated storytelling elements that connected with the target audience and clearly communicated the product's benefits.',
    results: 'The product exceeded first-year sales projections by 25%, received industry recognition for packaging innovation, and established a strong visual foundation for future product extensions.',
    technologies: ['Adobe Illustrator', 'Photoshop', '3D Rendering'],
    nextProjectId: '6',
    prevProjectId: '4'
  },
  {
    id: '6',
    title: 'Healthcare Platform',
    category: 'UI/UX Design',
    client: 'Healthcare Provider',
    duration: '5 months',
    completedDate: 'February 2022',
    description: 'User-centered design for a healthcare platform, improving patient experience and information accessibility.',
    challenge: 'The client needed to modernize their patient portal to improve information accessibility, enhance appointment scheduling, and provide better communication channels between patients and healthcare providers.',
    solution: 'I conducted user research with diverse patient groups to understand their needs and pain points. Based on these insights, I designed an accessible, intuitive interface that simplified navigation, used clear language, and prioritized the most commonly used features.',
    results: 'The redesigned platform saw a 62% increase in patient portal adoption, 78% improvement in appointment scheduling via the platform, and significantly higher patient satisfaction scores.',
    technologies: ['Figma', 'React', 'Accessibility Testing', 'User Research'],
    nextProjectId: '1',
    prevProjectId: '5'
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 md:px-12 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-medium text-foreground link-underline"
          >
            <ArrowLeft size={14} className="mr-1" /> Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }
  
  const nextProject = projectsData.find(p => p.id === project.nextProjectId);
  const prevProject = projectsData.find(p => p.id === project.prevProjectId);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/projects" 
              className="inline-flex items-center mb-6 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <ArrowLeft size={14} className="mr-1" /> Back to Projects
            </Link>
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-muted rounded-full"
            >
              {project.category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              {project.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="space-y-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <User size={12} className="mr-1" /> Client
                </div>
                <div className="text-sm font-medium">{project.client}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={12} className="mr-1" /> Duration
                </div>
                <div className="text-sm font-medium">{project.duration}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar size={12} className="mr-1" /> Completed
                </div>
                <div className="text-sm font-medium">{project.completedDate}</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Tag size={12} className="mr-1" /> Technologies
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-medium py-0.5 px-1.5 bg-muted rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Image */}
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-xl overflow-hidden"
          >
            <div className="h-full w-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Project Image</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold">The Results</h2>
              <p className="text-muted-foreground">{project.results}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* More Project Images */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Next/Previous Project Navigation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevProject && (
              <Link 
                to={`/projects/${prevProject.id}`} 
                className="group flex items-center py-4 transition-smooth"
              >
                <ArrowLeft size={20} className="mr-4 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Previous Project</div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </Link>
            )}
            
            <div className="hidden md:block">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-sm font-medium text-foreground link-underline"
              >
                All Projects
              </Link>
            </div>
            
            {nextProject && (
              <Link 
                to={`/projects/${nextProject.id}`} 
                className="group flex items-center py-4 transition-smooth text-right"
              >
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Next Project</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
