import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Award, Users, User, MessageSquare, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';

// Define MixBlendMode type to fix TypeScript error
type MixBlendMode = 
  | 'normal' 
  | 'multiply' 
  | 'screen' 
  | 'overlay' 
  | 'darken' 
  | 'lighten' 
  | 'color-dodge' 
  | 'color-burn' 
  | 'hard-light' 
  | 'soft-light' 
  | 'difference' 
  | 'exclusion' 
  | 'hue' 
  | 'saturation' 
  | 'color' 
  | 'luminosity';

const AboutPage = () => {
  const { theme } = useTheme();
  const [showTeam, setShowTeam] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <Layout>
      {/* Chat Bot Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button 
          onClick={() => setShowChatBot(!showChatBot)}
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg sparkle-effect"
          variant="secondary"
          size="icon"
        >
          <MessageSquare size={24} />
        </Button>
      </motion.div>

      {showChatBot && (
        <motion.div 
          className="fixed bottom-24 right-8 w-80 bg-card rounded-xl shadow-xl z-40 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="p-4 border-b border-border">
            <h3 className="font-medium">Chat Assistant</h3>
          </div>
          <div className="h-80 p-4 overflow-y-auto">
            <div className="text-sm text-muted-foreground">
              How can I help you today? Feel free to ask me about my experience and skills.
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full rounded-full bg-background border border-border px-4 py-2 text-sm"
              />
              <Button size="sm" variant="ghost" className="absolute right-1 top-1">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* About Section */}
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
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6 hover-glow"
            >
              My journey & expertise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              A passionate community manager dedicated to fostering collaboration, optimizing team performance, and achieving organizational goals through effective leadership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                onClick={() => setShowTeam(!showTeam)} 
                variant="outline" 
                className="flex items-center gap-2 mb-8 border-glow"
              >
                {showTeam ? <Users size={16} /> : <User size={16} />}
                {showTeam ? "View Individual" : "View Team"}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden perspective-card"
            >
              {showTeam ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full bg-muted grid grid-cols-2 grid-rows-2 gap-2 p-2"
                >
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div 
                      key={item} 
                      className="bg-background/40 rounded-lg flex items-center justify-center shine-effect hover-trigger"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-muted-foreground text-sm">Team Member {item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full bg-muted flex items-center justify-center sparkle-effect"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <span className="text-muted-foreground">Hassan Zaib Jadoon</span>
                </motion.div>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2 
                className="text-3xl font-serif font-bold text-gradient hover-glow"
                whileHover={{ scale: 1.02 }}
              >
                {showTeam ? "Our Story" : "My Story"}
              </motion.h2>
              <div className="space-y-4 text-muted-foreground">
                {showTeam ? (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Our team brings together diverse talents from across the creative industry, with each member contributing unique expertise to our collaborative projects.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Together, we combine technical prowess with design thinking to deliver solutions that exceed expectations and push creative boundaries.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Our collaborative approach ensures that each project benefits from multiple perspectives, resulting in more innovative and comprehensive outcomes.
                    </motion.p>
                  </>
                ) : (
                  <>
                    <p>
                      As a Community Manager at The Order of Pen, I've dedicated myself to building effective teams and fostering collaborative environments that drive organizational success.
                    </p>
                    <p>
                      My approach combines strong leadership skills with technical knowledge, allowing me to coordinate complex projects while ensuring clear communication and documentation.
                    </p>
                    <p>
                      I believe that effective management is about empowering team members and creating systems that enable everyone to contribute their best work toward shared goals.
                    </p>
                  </>
                )}
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-medium text-foreground link-underline hover-trigger"
              >
                {showTeam ? "Contact Us" : "Let's Connect"} <ArrowRight size={14} className="ml-1" />
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
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6 hover-glow"
            >
              {showTeam ? "Our Expertise" : "Skills & Expertise"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              {showTeam ? 
                "Our combined skill set covers all aspects of project management and community leadership." :
                "A comprehensive set of skills developed through professional experience and continuous learning."
              }
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
                className="p-4 rounded-lg neo-blur text-center sparkle-effect hover-trigger"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8 hover-glow"
              >
                <Briefcase size={20} className="mr-2" /> {showTeam ? "Our Experience" : "Professional Experience"}
              </motion.h2>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-border/70 hover-trigger"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"
                      whileHover={{ scale: 1.2 }}
                    />
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
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8 hover-glow"
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
                    className="relative pl-8 border-l border-border/70 hover-trigger"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"
                      whileHover={{ scale: 1.2 }}
                    />
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
      
      {/* Beyond Work Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6 hover-glow"
            >
              <Award size={24} className="mr-2" /> {showTeam ? "Team Interests" : "Beyond Work"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              {showTeam ? 
                "Outside of our professional work, our team members pursue various interests and hobbies." :
                "When I'm not managing projects or coordinating teams, here are some things I enjoy."
              }
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
                className="p-6 rounded-xl neo-blur blur-bg hover-trigger"
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <h3 className="text-lg font-medium mb-3">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6 hover-glow"
            >
              <Star size={24} className="mr-2" /> Client Reviews
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              What clients say about my services and collaborative approach
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full neo-blur hover-trigger">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={`${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">{review.date}</span>
                    </div>
                    <p className="text-sm mb-4">{review.text}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium">{review.name}</h4>
                        <p className="text-xs text-muted-foreground">{review.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const skills = [
  'Project Management',
  'Team Coordination',
  'Community Leadership',
  'Strategic Planning',
  'People Management',
  'Data Analysis',
  'Technical Writing',
  'Documentation',
  'Performance Evaluation',
  'Communication',
  'Collaboration Tools',
  'Risk Assessment',
];

const experience = [
  {
    period: '09/2024 - Present',
    title: 'Community Manager',
    company: 'The Order of Pen',
    description: 'Leading ambassador selection and management, supervising 60 organization members across different projects, and ensuring effective communication and documentation.',
  },
  {
    period: '04/2024 - 11/2024',
    title: 'Research Analyst',
    company: 'Server4Sale',
    description: 'Conducted research on data scraping, created data visualizations, and contributed to market research and cybersecurity enhancements.',
  },
  {
    period: '07/2023 - 09/2024',
    title: 'Researcher',
    company: 'SECURED IOT DEVICES LAB',
    description: 'Assisted researchers in studying cryptographic tools and exploring applications for data security enhancement.',
  },
];

const education = [
  {
    period: '10/2022 - Present',
    degree: 'Computer Systems Engineering',
    institution: 'University of Engineering and Technology Peshawar',
    description: 'Studying computer systems engineering with a focus on practical applications and system development.',
  },
  {
    period: '2024',
    degree: 'Project Management Certifications',
    institution: 'Microsoft, Google, PMI',
    description: 'Career Essentials in Project Management, Project Management Foundations, Project Initiation, and Project Planning.',
  },
  {
    period: '2023',
    degree: 'Google AI Essentials',
    institution: 'Google',
    description: 'Certification in AI fundamentals and applications.',
  },
];

const interests = [
  {
    title: 'Community Building',
    description: 'Creating and nurturing vibrant communities that foster collaboration, learning, and growth.',
  },
  {
    title: 'Technology & Innovation',
    description: 'Exploring emerging technologies and how they can be applied to solve real-world problems.',
  },
  {
    title: 'Research & Development',
    description: 'Contributing to research efforts in IoT, cybersecurity, and artificial intelligence applications.',
  },
];

const clientReviews = [
  {
    name: "Tom North",
    title: "Job Seeker",
    rating: 5,
    date: "August 1, 2024",
    text: "Hassan is a consummate professional. I believe his expertise, especially with ATS, will effectively support my job search. I highly recommend his services."
  },
  {
    name: "Oben Eyonganyo",
    title: "Client",
    rating: 5,
    date: "July 22, 2024",
    text: "Hassan is very hardworking, resilient, and patient. He executed top-notch work with great knowledge and expertise. He asks the right questions, welcomes feedback, and makes necessary alterations without hesitation. I will 100% recommend him to my family, friends, and loved ones."
  },
  {
    name: "Joe Robinson",
    title: "Collaborator",
    rating: 5,
    date: "June 7, 2024",
    text: "Hassan Zaib Jadoon is a professional and a pleasure to work with. Very knowledgeable, understanding, and easy to collaborate with. Would absolutely recommend him."
  }
];

export default AboutPage;
