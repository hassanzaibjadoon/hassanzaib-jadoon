
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, BriefcaseBusiness, GraduationCap, Award, Clock, Code, Users } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<string>('experience');
  
  const experienceData = [
    {
      id: 1,
      role: 'Community Manager',
      company: 'The Order of Pen',
      duration: '09/2024 - Present',
      description: 'Leading ambassador selection and management, supervising 60 organization members across different projects, and ensuring effective communication and documentation.',
      achievements: [
        'Led and selected ambassadors, ensuring top-tier representation from Peshawar',
        'Supervised 60 organization members across different projects',
        'Prepared comprehensive documentation for all projects',
        'Conducted workshops on effective documentation and collaboration techniques',
        'Managed inquiries and negotiations with sponsors and collaborators'
      ]
    },
    {
      id: 2,
      role: 'Research Analyst',
      company: 'Server4Sale',
      duration: '04/2024 - 11/2024',
      description: 'Conducted research on data scraping, created data visualizations, and contributed to market research and cybersecurity enhancements.',
      achievements: [
        'Conducted research on data scraping techniques for market and user data',
        'Utilized Qlik and Power BI for data visualizations',
        'Worked on BITRIX 24 for task management and collaboration',
        'Produced reports on Cloudflare and cybersecurity measures',
        'Assisted in writing Software Requirement Specifications (SRS) and documentation'
      ]
    },
    {
      id: 3,
      role: 'Researcher',
      company: 'SECURED IOT DEVICES LAB',
      duration: '07/2023 - 09/2024',
      description: 'Assisted researchers in studying cryptographic tools and exploring applications for data security enhancement.',
      achievements: [
        'Studied cryptographic tools for enhancing data security',
        'Conducted research on Large Language Models (LLMs)',
        'Engaged in reading research papers on complex topics',
        'Collaborated on advancements in cybersecurity and IoT solutions'
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: 'Computer Systems Engineering',
      institution: 'University of Engineering and Technology Peshawar',
      duration: '10/2022 - Present',
      description: 'Studying computer systems engineering with a focus on practical applications and system development.',
      achievements: [
        'University Projects: Process Management Tool, Community Management System',
        'Portfolio Development, Deploy Folio, Brick Breaker Game in C++',
        'Publication: "A Robust Approach for Classification of COVID-19 Cough Based on CNN Deep Learning Model" (ICTAPP-24)'
      ]
    }
  ];

  const skillsData = {
    management: [
      { name: 'Project Management', level: 90 },
      { name: 'Team Coordination', level: 95 },
      { name: 'Community Leadership', level: 90 },
      { name: 'Strategic Planning', level: 85 },
      { name: 'People Management', level: 90 }
    ],
    technical: [
      { name: 'Data Analysis', level: 80 },
      { name: 'Data Visualization (Power BI, Qlik)', level: 85 },
      { name: 'Technical Writing', level: 85 },
      { name: 'Azure', level: 75 },
      { name: 'Office 365', level: 90 }
    ],
    other: [
      { name: 'Communication', level: 95 },
      { name: 'Performance Evaluation', level: 85 },
      { name: 'Documentation', level: 90 },
      { name: 'Risk Assessment', level: 80 },
      { name: 'Time Management', level: 85 }
    ]
  };

  const certifications = [
    { name: 'Career Essentials in Project Management', issuer: 'Microsoft', year: 2024 },
    { name: 'Project Management Foundations', issuer: 'PMI, NASBA, Google, Microsoft', year: 2024 },
    { name: 'Project Initiation: Starting a Successful Project', issuer: 'Google', year: 2023 },
    { name: 'Project Planning: Putting It All Together', issuer: 'Google', year: 2023 },
    { name: 'Business Model Canvas', issuer: 'Kennesaw State University', year: 2023 },
    { name: 'Google AI Essentials', issuer: 'Google', year: 2023 },
    { name: 'Foundations of Business Intelligence', issuer: 'Google', year: 2023 }
  ];

  const positions = [
    { name: 'Microsoft Learn Student Ambassador', year: '2023 - Present' },
    { name: 'Ambassador Asana', year: '2023 - Present' },
    { name: 'Campus Ambassador NIC Peshawar', year: '2023 - Present' },
    { name: 'Volunteer GDG Peshawar', year: '2023 - Present' },
    { name: 'Campus Director Youth International Conclave', year: '2023 - Present' },
    { name: 'Director Community Engagement', year: '2023 - Present' },
    { name: 'Campus Ambassador The Order of Pen', year: '2023 - Present' },
    { name: 'Coordinator LDS UET Peshawar', year: '2023 - Present' },
    { name: 'Founder Coding Prodigy Community', year: '2023 - Present' },
    { name: 'Management Intern CLLB Peshawar', year: '2023' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
              Hassan Zaib Jadoon
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Community Manager | Focused on Project Coordination and People Management
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <span className="text-sm text-muted-foreground">📱 +92 3119541429</span>
              <span className="text-sm text-muted-foreground">📧 Hassanzaibjadoon2004@gmail.com</span>
              <span className="text-sm text-muted-foreground">📍 Peshawar, Pakistan</span>
            </div>
          </div>
          <Button className="mt-6 md:mt-0 flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90">
            <Download size={16} />
            Download Resume PDF
          </Button>
        </motion.div>

        <Tabs 
          defaultValue="experience" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full md:w-auto flex justify-start mb-8 overflow-x-auto pb-2">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Award size={16} />
              Skills
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Clock size={16} />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="positions" className="flex items-center gap-2">
              <Users size={16} />
              Positions
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code size={16} />
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <motion.div
              initial="hidden"
              animate={activeTab === 'experience' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-8"
            >
              {experienceData.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeIn}
                  className="border-b border-border/40 pb-8 last:border-0"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-medium">{item.role}</h3>
                          <p className="text-lg text-muted-foreground">{item.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div
              initial="hidden"
              animate={activeTab === 'education' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-8"
            >
              {educationData.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeIn}
                  className="border-b border-border/40 pb-8 last:border-0"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-medium">{item.degree}</h3>
                          <p className="text-lg text-muted-foreground">{item.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Highlights:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <motion.div
              initial="hidden"
              animate={activeTab === 'skills' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Management Skills</h3>
                    <div className="space-y-5">
                      {skillsData.management.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
                    <div className="space-y-5">
                      {skillsData.technical.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Other Skills</h3>
                    <div className="space-y-5">
                      {skillsData.other.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <motion.div
              initial="hidden"
              animate={activeTab === 'certifications' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="flex flex-col h-full p-6">
                      <Award className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">{cert.name}</h3>
                      <div className="mt-auto space-y-1 pt-4">
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm font-medium">{cert.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Positions Tab */}
          <TabsContent value="positions">
            <motion.div
              initial="hidden"
              animate={activeTab === 'positions' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {positions.map((position, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="flex flex-col h-full p-6">
                      <Users className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">{position.name}</h3>
                      <div className="mt-auto pt-4">
                        <p className="text-sm font-medium">{position.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <motion.div
              initial="hidden"
              animate={activeTab === 'projects' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                "FS Workshops & Pitch",
                "Ambassadors 2025",
                "TBM Collaboration",
                "Renegades",
                "GYM & KLF Collabs",
                "Process Management Tool",
                "Community Management System",
                "Portfolio Development",
                "Deploy Folio",
                "Brick Breaker Game in C++"
              ].map((project, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="flex flex-col h-full p-6">
                      <Code className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">{project}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
