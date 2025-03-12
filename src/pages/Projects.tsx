import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter } from 'lucide-react';
import Layout from '@/components/Layout';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-muted rounded-full"
            >
              Portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              My Work
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Explore a collection of my work across various disciplines, showcasing creativity, technical skill, and attention to detail.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8 overflow-x-auto pb-4 scrollbar-none"
          >
            <Filter size={16} className="mr-2 flex-shrink-0" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`py-1 px-3 text-xs font-medium rounded-full whitespace-nowrap ${
                    filter === category 
                      ? 'bg-foreground text-background' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  } transition-smooth`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl neo-blur hover:shadow-lg transition-smooth"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-muted-foreground block mb-2">{project.category}</span>
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-sm font-medium text-foreground link-underline"
                  >
                    View Case Study <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

// Updated Mock Data
const projects = [
  {
    id: '1',
    title: 'Project Fankarana Safar',
    category: 'project management',
    description: 'A comprehensive project management initiative focused on streamlining processes and improving efficiency.',
  },
  {
    id: '2',
    title: 'Process Management Tool (PMT)',
    category: 'project management',
    description: 'Development and implementation of a custom process management tool for organizational workflows.',
  },
  {
    id: '3',
    title: 'HR Digital Transformation',
    category: 'human resources',
    description: 'Complete digital transformation of HR processes, including recruitment, onboarding, and performance management.',
  },
  {
    id: '4',
    title: 'Employee Training & Development Program',
    category: 'human resources',
    description: 'Comprehensive training program designed to enhance employee skills and career growth.',
  },
  {
    id: '5',
    title: 'TOOP Ambassadors Program',
    category: 'program management',
    description: 'Strategic program management for ambassador recruitment, training, and engagement initiatives.',
  },
  {
    id: '6',
    title: 'Brand Awareness Campaign',
    category: 'public relations',
    description: 'Multi-channel brand awareness campaign for various organizations and programs.',
  },
  {
    id: '7',
    title: 'Young Leaders Training Initiative',
    category: 'leadership development',
    description: 'Comprehensive leadership training program designed for emerging young professionals.',
  },
  {
    id: '8',
    title: 'Healthcare Website Content Strategy',
    category: 'copywriting',
    description: 'Development of content strategy and creation for a healthcare provider\'s website.',
  },
  {
    id: '9',
    title: 'Food Brand Identity Design',
    category: 'graphic design',
    description: 'Complete brand identity design including logo, packaging, and marketing materials.',
  },
  {
    id: '10',
    title: 'Online Learning Platform Research',
    category: 'research',
    description: 'In-depth user research and analysis for an educational technology platform.',
  },
  {
    id: '11',
    title: 'Resume & LinkedIn Optimization',
    category: 'career services',
    description: 'Professional resume revamp and LinkedIn profile optimization for executives.',
  },
  {
    id: '12',
    title: 'Corporate Events Management',
    category: 'event management',
    description: 'Successfully managed and executed over 15+ onsite corporate events and conferences.',
  },
  {
    id: '13',
    title: 'FinTech Mobile App Design',
    category: 'ui/ux design',
    description: 'User interface and experience design for a financial technology mobile application.',
  },
  {
    id: '14',
    title: 'E-Commerce UX Optimization',
    category: 'ui/ux design',
    description: 'Complete user experience optimization for an e-commerce platform.',
  },
  {
    id: '15',
    title: 'Portfolio Website Development',
    category: 'web development',
    description: 'Custom portfolio website development for creative professionals.',
  },
  {
    id: '16',
    title: 'Law Firm Website Redesign',
    category: 'web development',
    description: 'Corporate website redesign and development for a law firm.',
  },
  {
    id: '17',
    title: 'Startup Brand Identity',
    category: 'branding',
    description: 'Complete brand identity system development for a new startup.',
  },
  {
    id: '18',
    title: 'SaaS Blog SEO Optimization',
    category: 'seo',
    description: 'Search engine optimization strategy and implementation for a SaaS company blog.',
  },
  {
    id: '19',
    title: 'E-commerce Email Marketing',
    category: 'marketing',
    description: 'Email marketing automation strategy and implementation for an e-commerce business.',
  },
  {
    id: '20',
    title: 'Career Mentorship Program',
    category: 'education',
    description: 'Structured mentorship program designed for students and early career professionals.',
  },
  {
    id: '21',
    title: 'Tech Forum Community Building',
    category: 'community',
    description: 'Online community growth and engagement strategies for a technical forum.',
  },
  {
    id: '22',
    title: 'Strategic Business Planning',
    category: 'consulting',
    description: 'Business strategy development and implementation plan for startup expansion.',
  },
  {
    id: '23',
    title: 'Data Analytics Workshop',
    category: 'training',
    description: 'Technical training workshop on data analytics for business professionals.',
  },
  {
    id: '24',
    title: 'Coding Bootcamp',
    category: 'training',
    description: 'Intensive coding bootcamp program designed for beginners entering tech.',
  }
];

export default ProjectsPage;
