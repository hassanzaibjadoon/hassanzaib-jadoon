
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const AboutPage = () => {
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
              About Me
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              My journey & expertise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              A passionate professional dedicated to creating exceptional digital experiences through design and innovation.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <div className="h-full w-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Profile Image</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-gradient">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 10 years of experience in the creative industry, I've dedicated my career to solving complex problems through thoughtful design and innovative solutions.
                </p>
                <p>
                  My approach combines technical expertise with a deep understanding of user needs, allowing me to create digital experiences that are both beautiful and functional.
                </p>
                <p>
                  I believe that great design should be accessible to all and strive to create work that makes a positive impact on the world.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-medium text-foreground link-underline"
              >
                Let's Connect <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
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
              Skills & Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              A comprehensive set of skills developed through years of professional experience and continuous learning.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg neo-blur text-center"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience & Education Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8"
              >
                <Briefcase size={20} className="mr-2" /> Professional Experience
              </motion.h2>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-border/70"
                  >
                    <span className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"></span>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">{item.period}</div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <div className="text-sm font-medium text-muted-foreground">{item.company}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8"
              >
                <GraduationCap size={20} className="mr-2" /> Education & Certifications
              </motion.h2>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-border/70"
                  >
                    <span className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"></span>
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">{item.period}</div>
                      <h3 className="text-lg font-medium">{item.degree}</h3>
                      <div className="text-sm font-medium text-muted-foreground">{item.institution}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6"
            >
              <Award size={24} className="mr-2" /> Beyond Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              When I'm not designing or coding, here are some things I enjoy.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl neo-blur"
              >
                <h3 className="text-lg font-medium mb-3">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Mock Data
const skills = [
  'UI/UX Design',
  'Web Development',
  'Brand Strategy',
  'User Research',
  'Wireframing',
  'Prototyping',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Figma',
  'Adobe Creative Suite',
  'Responsive Design',
];

const experience = [
  {
    period: '2019 - Present',
    title: 'Senior UX Designer',
    company: 'Design Studio',
    description: 'Leading design initiatives for major clients, overseeing project teams, and establishing design systems.',
  },
  {
    period: '2016 - 2019',
    title: 'UI/UX Designer',
    company: 'Tech Company',
    description: 'Created user interfaces for web and mobile applications, conducted user research, and developed wireframes and prototypes.',
  },
  {
    period: '2014 - 2016',
    title: 'Web Designer',
    company: 'Digital Agency',
    description: 'Designed responsive websites for clients across various industries, focusing on accessibility and user experience.',
  },
];

const education = [
  {
    period: '2010 - 2014',
    degree: 'Bachelor of Design',
    institution: 'Design University',
    description: 'Specialized in interactive design with a focus on digital products and user experience.',
  },
  {
    period: '2017',
    degree: 'UX Certification',
    institution: 'Design Academy',
    description: 'Advanced certification in user experience methodologies and research techniques.',
  },
  {
    period: '2019',
    degree: 'Front-End Development',
    institution: 'Tech Institute',
    description: 'Professional certification in modern front-end development frameworks and practices.',
  },
];

const interests = [
  {
    title: 'Photography',
    description: 'Exploring the world through a lens, capturing moments, and telling stories through visual imagery.',
  },
  {
    title: 'Travel',
    description: 'Experiencing different cultures, architectural styles, and design approaches from around the world.',
  },
  {
    title: 'Reading',
    description: 'Constantly learning through books on design, psychology, technology, and fiction to gain new perspectives.',
  },
];

export default AboutPage;
