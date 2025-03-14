
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, MessageSquare, Code, Users, Book, Award, Star, Coffee, Clock, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Animated counter component
const AnimatedCounter = ({ value, duration = 2, suffix = '', icon: Icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ''));
    const incrementTime = Math.floor(duration * 1000 / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime < 10 ? 10 : incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center">
      <div className="text-primary mb-3">
        <Icon size={28} />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-1">{count}{suffix}</h3>
    </div>
  );
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 backdrop-blur-sm" />
          <div 
            className="absolute top-0 left-1/2 w-[1000px] h-[1000px] bg-secondary/30 rounded-full blur-3xl opacity-40 animate-spotlight"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 mb-10"
            >
              <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
                <AvatarImage src="/src/img/Profile Picture Hassan.jpg" alt="Hassan Zaib Jadoon" />
                <AvatarFallback className="text-3xl font-bold">HZ</AvatarFallback>
              </Avatar>
              
              <div>
                <span className="inline-block py-1 px-3 mb-3 text-xs font-medium bg-muted rounded-full">
                  Portfolio & Professional Journey
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient leading-tight mb-4">
                  Hassan Zaib Jadoon
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  A natural leader with a passion for project management, people management, and community building. Currently serving as Community Manager at The Order of Pen, overseeing ambassadors and driving organizational success through strategic planning and effective team coordination.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link 
                to="/projects" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-primary hover:bg-foreground/90 h-11 px-8"
              >
                View Projects <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-foreground/20 bg-transparent hover:bg-muted h-11 px-8"
              >
                Contact Me <MessageSquare size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.a
            href="#featured"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-smooth"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.a>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Journey Highlights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Key achievements and milestones that showcase leadership and innovation
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl neo-blur hover:shadow-lg transition-smooth p-6"
              >
                <highlight.icon size={32} className="text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 2024 Year Journey Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">2024 Year Journey</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {yearJourneyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-card/30 backdrop-blur-sm p-6 text-center hover:shadow-md transition-smooth"
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    icon={stat.icon}
                    suffix={stat.suffix || ''}
                  />
                  <p className="text-sm text-muted-foreground mt-2">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="featured" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              A selection of my most remarkable work, showcasing leadership, technical skills, and problem-solving abilities.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl neo-blur hover:shadow-lg transition-smooth"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <project.icon size={48} className="text-muted-foreground" />
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
          
          <div className="mt-16 text-center">
            <Link 
              to="/projects" 
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-foreground/20 bg-transparent hover:bg-muted h-11 px-8"
            >
              View All Projects <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Professional Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Comprehensive solutions tailored to meet organizational needs and drive success
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl neo-blur hover:shadow-lg transition-smooth"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted mb-6">
                  <service.icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Ready to collaborate?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let's work together to achieve your organizational goals through effective project management and community leadership.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-primary hover:bg-foreground/90 h-11 px-8"
              >
                Get in Touch <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const highlights = [
  {
    title: "Award-Winning Speaker",
    description: "Multiple awards in declamation contests and public speaking events",
    icon: Award
  },
  {
    title: "37+ Volunteering Experiences",
    description: "Across tech, innovation, arts, literature, and environmental causes",
    icon: Users
  },
  {
    title: "Featured Speaker",
    description: "Featured on Suno Pakhtunkhwa discussing youth challenges",
    icon: MessageSquare
  },
  {
    title: "LinkedIn Marketing Insider",
    description: "Recognized for leadership, creativity, and dedication",
    icon: Star
  }
];

// New 2024 Journey Stats
const yearJourneyStats = [
  {
    title: "Happy Participants",
    value: 56,
    icon: Users
  },
  {
    title: "Certificates & Awards",
    value: 9,
    icon: Award
  },
  {
    title: "Educational Programs",
    value: 675,
    icon: GraduationCap
  },
  {
    title: "Tea Cups Per Year",
    value: 875,
    icon: Coffee
  },
  {
    title: "Volunteer & Working Hours",
    value: 1250,
    icon: Heart
  }
];

const services = [
  {
    id: '1',
    title: 'Project Management',
    description: 'Strategic planning, team coordination, and delivery of successful projects',
    icon: Code,
  },
  {
    id: '2',
    title: 'Human Resources',
    description: 'People management, recruitment, and organizational development',
    icon: Users,
  },
  {
    id: '3',
    title: 'Program Management',
    description: 'Overseeing multiple projects and ensuring alignment with organizational goals',
    icon: Book,
  }
];

const featuredProjects = [
  {
    id: '1',
    title: 'FS Workshops & Pitch',
    category: 'Community Management',
    description: 'Organized and led workshops focused on developing professional skills and project pitching techniques.',
    icon: Users
  },
  {
    id: '2',
    title: 'Ambassadors 2025',
    category: 'Leadership & Management',
    description: 'Coordinated the selection and management of ambassadors representing the organization.',
    icon: Users
  },
  {
    id: '3',
    title: 'Process Management Tool',
    category: 'Software Development',
    description: 'Developed a tool to streamline organizational processes and improve efficiency.',
    icon: Code
  },
];

export default HomePage;
