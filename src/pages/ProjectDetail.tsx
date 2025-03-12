import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Users, 
  Globe,
  Layers,
  ListChecks,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

// Updated Mock data for project details
const projectsData = [
  {
    id: "1",
    title: "Project Fankarana Safar",
    client: "National Development Initiative",
    date: "2023",
    category: "Project Management",
    tags: ["Strategic Planning", "Resource Allocation", "Team Management", "Stakeholder Communication"],
    description: "A comprehensive project management initiative designed to streamline processes, improve resource allocation, and enhance overall efficiency for a national development program.",
    challenge: "The client was struggling with inefficient resource allocation, poor team coordination, and missed deadlines, resulting in significant project delays and budget overruns.",
    solution: "I implemented a structured project management approach, including detailed work breakdown structures, milestone-based planning, and regular progress tracking. A dedicated communication channel was established for all stakeholders to ensure transparency and timely decision-making.",
    results: [
      "30% reduction in project completion time",
      "25% decrease in resource wastage",
      "95% of milestones completed on schedule",
      "Stakeholder satisfaction increased from 65% to 92%"
    ],
    process: [
      {
        phase: "Assessment & Analysis",
        description: "Conducted a thorough analysis of existing processes, identified bottlenecks, and gathered stakeholder requirements.",
        deliverables: ["Gap Analysis Report", "Stakeholder Requirements Document", "Risk Assessment"]
      },
      {
        phase: "Planning & Strategy",
        description: "Developed a comprehensive project plan with clear milestones, resource allocations, and communication protocols.",
        deliverables: ["Detailed Project Plan", "Resource Allocation Matrix", "Communication Strategy"]
      },
      {
        phase: "Implementation",
        description: "Executed the planned strategies, monitored progress, and made real-time adjustments to ensure optimal performance.",
        deliverables: ["Implementation Guidelines", "Progress Tracking System", "Quality Control Measures"]
      },
      {
        phase: "Monitoring & Control",
        description: "Established regular review cycles, performance metrics, and feedback mechanisms to maintain project quality.",
        deliverables: ["Performance Dashboards", "Weekly Status Reports", "Issue Resolution Framework"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Project Fankarana Safar Management Dashboard",
    link: "https://example.com/project-fankarana"
  },
  {
    id: "2",
    title: "Process Management Tool (PMT)",
    client: "Corporate Enterprise Solutions",
    date: "2022",
    category: "Project Management",
    tags: ["Process Optimization", "Workflow Automation", "Efficiency Enhancement", "Custom Tool Development"],
    description: "Development and implementation of a custom process management tool for organizational workflows, designed to streamline operations and improve productivity.",
    challenge: "The client was using multiple disconnected systems to manage their organizational processes, leading to data inconsistencies, redundant work, and inefficient resource utilization.",
    solution: "I developed a centralized process management tool that integrated various workflows, automated routine tasks, and provided real-time analytics for management decision-making.",
    results: [
      "40% reduction in process completion time",
      "60% decrease in data entry errors",
      "85% increase in cross-department collaboration efficiency",
      "Annual cost savings of approximately $180,000"
    ],
    process: [
      {
        phase: "Requirements Gathering",
        description: "Conducted interviews with department heads and process owners to understand pain points and requirements.",
        deliverables: ["Requirements Specification", "Process Flow Diagrams", "User Stories"]
      },
      {
        phase: "System Design",
        description: "Created detailed system architecture, database schema, and user interface designs.",
        deliverables: ["System Architecture Document", "Database Design", "UI/UX Mockups"]
      },
      {
        phase: "Development & Testing",
        description: "Built the solution using agile methodology with regular sprint reviews and comprehensive testing.",
        deliverables: ["Functional Prototype", "Test Cases", "User Acceptance Test Plan"]
      },
      {
        phase: "Deployment & Training",
        description: "Implemented the solution across departments with comprehensive training sessions and documentation.",
        deliverables: ["Deployment Plan", "Training Materials", "User Manuals"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Process Management Tool Interface",
    link: "https://example.com/pmt-solution"
  },
  {
    id: "3",
    title: "HR Digital Transformation",
    client: "Multinational Corporation",
    date: "2022",
    category: "Human Resources",
    tags: ["HR Automation", "Employee Experience", "Digital Transformation", "Process Optimization"],
    description: "Complete digital transformation of HR processes, including recruitment, onboarding, performance management, and employee engagement initiatives.",
    challenge: "The client's HR department was operating with paper-based systems and disconnected digital tools, resulting in slow processes, data inconsistencies, and poor employee experience.",
    solution: "I designed and implemented an integrated HR digital ecosystem that connected all HR functions, automated routine tasks, and created a seamless experience for both HR staff and employees.",
    results: [
      "70% reduction in recruitment cycle time",
      "90% decrease in onboarding paperwork",
      "45% improvement in employee satisfaction with HR services",
      "Annual labor cost savings of approximately $250,000"
    ],
    process: [
      {
        phase: "Assessment & Strategy",
        description: "Evaluated existing HR processes, systems, and pain points to develop a comprehensive transformation strategy.",
        deliverables: ["HR Process Audit", "Digital Maturity Assessment", "Transformation Roadmap"]
      },
      {
        phase: "Solution Design",
        description: "Designed integrated digital solutions for each HR function with emphasis on user experience and system interoperability.",
        deliverables: ["Solution Architecture", "Process Redesign", "Integration Framework"]
      },
      {
        phase: "Implementation",
        description: "Executed the transformation in phases, starting with core HR functions and progressively expanding to all areas.",
        deliverables: ["Implementation Plan", "Change Management Strategy", "System Configuration"]
      },
      {
        phase: "Adoption & Optimization",
        description: "Ensured successful adoption through training, support, and continuous improvement initiatives.",
        deliverables: ["Training Program", "Adoption Metrics", "Optimization Recommendations"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "HR Digital Transformation Dashboard",
    link: "https://example.com/hr-transformation"
  },
  {
    id: "4",
    title: "Employee Training & Development Program",
    client: "Technology Services Company",
    date: "2023",
    category: "Human Resources",
    tags: ["Learning & Development", "Skill Enhancement", "Career Growth", "Employee Retention"],
    description: "Comprehensive training program designed to enhance employee skills, support career growth, and improve organizational capabilities.",
    challenge: "The client was facing high employee turnover, skill gaps, and difficulties in keeping pace with industry advancements due to inadequate training and development opportunities.",
    solution: "I developed a structured training and development program with personalized learning paths, mentorship opportunities, and clear connections to career advancement within the organization.",
    results: [
      "35% reduction in employee turnover",
      "80% of employees reported improved job satisfaction",
      "65% increase in internal promotions",
      "42% improvement in critical skill competency assessments"
    ],
    process: [
      {
        phase: "Needs Assessment",
        description: "Identified organizational skill gaps, individual development needs, and future capability requirements.",
        deliverables: ["Skills Gap Analysis", "Learning Needs Assessment", "Competency Framework"]
      },
      {
        phase: "Program Design",
        description: "Designed a comprehensive training framework with diverse learning methods and personalized development paths.",
        deliverables: ["Curriculum Design", "Learning Pathways", "Delivery Methods"]
      },
      {
        phase: "Content Development",
        description: "Created high-quality training content, leveraging both internal expertise and external resources.",
        deliverables: ["Training Materials", "E-Learning Modules", "Assessment Tools"]
      },
      {
        phase: "Implementation & Evaluation",
        description: "Launched the program with a phased approach and established metrics to measure effectiveness and impact.",
        deliverables: ["Implementation Schedule", "Engagement Metrics", "Impact Assessment Framework"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Employee Training Program Interface",
    link: "https://example.com/training-program"
  },
  {
    id: "5",
    title: "TOOP Ambassadors Program",
    client: "International Organization",
    date: "2022",
    category: "Program Management",
    tags: ["Ambassador Program", "Community Engagement", "Strategic Management", "Global Initiative"],
    description: "Strategic program management for ambassador recruitment, training, and engagement initiatives across multiple regions to promote organizational objectives.",
    challenge: "The client needed to establish a global presence through brand ambassadors but lacked the structure, processes, and management framework to recruit, train, and coordinate ambassadors effectively.",
    solution: "I designed and implemented a comprehensive ambassador program with standardized recruitment criteria, structured training, engagement tools, and performance metrics to ensure consistency across all regions.",
    results: [
      "Successful onboarding of 150+ ambassadors across 25 countries",
      "85% ambassador retention rate year-over-year",
      "40% increase in program reach and brand awareness",
      "60% of organizational growth initiatives supported by ambassador activities"
    ],
    process: [
      {
        phase: "Program Strategy",
        description: "Developed the overall program framework, objectives, and success metrics aligned with organizational goals.",
        deliverables: ["Program Charter", "Strategic Framework", "Success Criteria"]
      },
      {
        phase: "Recruitment & Selection",
        description: "Created and implemented a structured process to identify, evaluate, and select suitable ambassadors.",
        deliverables: ["Recruitment Strategy", "Selection Criteria", "Application Process"]
      },
      {
        phase: "Training & Enablement",
        description: "Designed comprehensive training and provided ambassadors with necessary tools and resources.",
        deliverables: ["Training Curriculum", "Resource Toolkit", "Knowledge Base"]
      },
      {
        phase: "Engagement & Management",
        description: "Established ongoing engagement mechanisms and performance management systems for the ambassador network.",
        deliverables: ["Engagement Calendar", "Performance Dashboards", "Recognition Framework"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "TOOP Ambassadors Program Dashboard",
    link: "https://example.com/toop-ambassadors"
  },
  {
    id: "6",
    title: "Brand Awareness Campaign",
    client: "Multiple Organizations",
    date: "2023",
    category: "Public Relations",
    tags: ["Brand Strategy", "Media Relations", "Public Engagement", "Campaign Management"],
    description: "Multi-channel brand awareness campaign for various organizations and programs, focusing on increasing visibility and positive public perception.",
    challenge: "The clients were struggling with limited brand recognition, inconsistent messaging, and difficulty differentiating themselves in competitive markets.",
    solution: "I developed integrated brand awareness campaigns with consistent messaging, strategic media placements, and targeted community engagement activities tailored to each organization's unique value proposition.",
    results: [
      "55% increase in brand recognition metrics",
      "120% growth in social media engagement",
      "35 earned media placements in targeted publications",
      "45% increase in website traffic from campaign sources"
    ],
    process: [
      {
        phase: "Brand Analysis",
        description: "Conducted comprehensive analysis of existing brand perception, competitor positioning, and market opportunities.",
        deliverables: ["Brand Audit Report", "Competitive Analysis", "Perception Study"]
      },
      {
        phase: "Campaign Strategy",
        description: "Developed targeted campaign strategies with clear objectives, messaging frameworks, and channel approaches.",
        deliverables: ["Campaign Strategy Document", "Messaging Platform", "Channel Strategy"]
      },
      {
        phase: "Content Creation",
        description: "Created compelling content across various formats to support campaign objectives and resonate with target audiences.",
        deliverables: ["Content Calendar", "Media Materials", "Visual Assets"]
      },
      {
        phase: "Implementation & Measurement",
        description: "Executed campaign elements across channels and implemented comprehensive measurement framework.",
        deliverables: ["Implementation Timeline", "Progress Reports", "Campaign Analytics"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Brand Awareness Campaign Materials",
    link: "https://example.com/brand-campaigns"
  },
  {
    id: "13",
    title: "FinTech Mobile App Design",
    client: "Financial Technology Startup",
    date: "2022",
    category: "UI/UX Design",
    tags: ["Mobile Design", "Financial Services", "User Experience", "Interface Design"],
    description: "User interface and experience design for a financial technology mobile application focused on personal finance management and investment tools.",
    challenge: "The client needed a mobile app that would make complex financial operations accessible and intuitive for users with varying levels of financial literacy, while ensuring security and compliance with regulations.",
    solution: "I designed a clean, intuitive interface with progressive disclosure of complex features, clear data visualization, and thoughtful user flows that guide users through financial tasks and decisions.",
    results: [
      "95% task completion rate in usability testing",
      "User satisfaction rating of 4.8/5 in beta testing",
      "67% reduction in support requests compared to previous version",
      "87% of users reported increased confidence in financial decisions"
    ],
    process: [
      {
        phase: "User Research",
        description: "Conducted interviews, surveys, and competitive analysis to understand user needs, pain points, and expectations.",
        deliverables: ["User Personas", "Journey Maps", "Competitive Analysis"]
      },
      {
        phase: "Information Architecture",
        description: "Developed the app structure, navigation patterns, and content organization to ensure intuitive access to features.",
        deliverables: ["App Sitemap", "User Flows", "Feature Prioritization"]
      },
      {
        phase: "UI Design",
        description: "Created a comprehensive design system and high-fidelity mockups for all app screens and states.",
        deliverables: ["Design System", "UI Components", "Screen Designs"]
      },
      {
        phase: "Prototyping & Testing",
        description: "Built interactive prototypes and conducted multiple rounds of usability testing to refine the experience.",
        deliverables: ["Interactive Prototype", "Usability Test Results", "Design Iterations"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "FinTech Mobile App Design Screens",
    link: "https://example.com/fintech-app"
  },
  {
    id: "24",
    title: "Coding Bootcamp",
    client: "Educational Institution",
    date: "2023",
    category: "Training",
    tags: ["Coding Education", "Curriculum Development", "Technical Training", "Career Preparation"],
    description: "Intensive coding bootcamp program designed for beginners entering tech, focusing on practical skills and job placement preparation.",
    challenge: "The client wanted to create an effective coding bootcamp that would prepare students with no prior programming experience for entry-level developer positions in just 12 weeks.",
    solution: "I developed a comprehensive, project-based curriculum with a balanced focus on technical skills, practical application, and career preparation, delivered through a blend of instruction methods and real-world projects.",
    results: [
      "92% program completion rate",
      "85% job placement rate within 3 months of graduation",
      "Average 45% increase in participant income after program completion",
      "95% of graduates reported feeling prepared for entry-level positions"
    ],
    process: [
      {
        phase: "Curriculum Development",
        description: "Designed a progressive curriculum that builds foundational knowledge and advances to complex concepts through practical application.",
        deliverables: ["Curriculum Outline", "Learning Objectives", "Project Specifications"]
      },
      {
        phase: "Content Creation",
        description: "Developed comprehensive learning materials including lectures, coding exercises, projects, and assessment tools.",
        deliverables: ["Lecture Materials", "Coding Exercises", "Project Briefs"]
      },
      {
        phase: "Delivery Planning",
        description: "Structured the program delivery to maximize engagement and knowledge retention through varied teaching methods.",
        deliverables: ["Program Schedule", "Teaching Methodology", "Support Framework"]
      },
      {
        phase: "Career Preparation",
        description: "Integrated career-focused elements including portfolio development, interview preparation, and industry networking.",
        deliverables: ["Portfolio Guidelines", "Interview Prep Materials", "Industry Connection Events"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Coding Bootcamp Class in Session",
    link: "https://example.com/coding-bootcamp"
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[0] | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  useEffect(() => {
    // In a real app, this would be a data fetch from an API
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject);
    // If project isn't found, you could redirect to a 404 page
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 md:px-12 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
            Project Not Found
          </h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-smooth"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All Projects
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient">
              {project.title}
            </h1>
            
            <Button asChild variant="outline" className="self-start">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                View Live Project
              </a>
            </Button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-2"
          >
            <motion.div variants={fadeIn} className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={project.imageSrc} 
                alt={project.imageAlt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <Tabs 
              defaultValue="overview" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full md:w-auto flex justify-start mb-8 overflow-x-auto pb-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'overview' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                          <p className="text-muted-foreground">
                            {project.challenge}
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-4">The Solution</h3>
                          <p className="text-muted-foreground">
                            {project.solution}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="process">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'process' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-6">Design Process</h2>
                    <div className="space-y-8">
                      {project.process.map((phase, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mt-1">
                                <span className="font-medium text-sm">{index + 1}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-medium mb-2">{phase.phase}</h3>
                                <p className="text-muted-foreground mb-4">
                                  {phase.description}
                                </p>
                                
                                <h4 className="text-sm font-medium mb-2">Deliverables:</h4>
                                <ul className="list-disc pl-5">
                                  {phase.deliverables.map((deliverable, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground mb-1">
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="results">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'results' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-6">Results & Impact</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">
                          The final solution delivered exceptional results for the client, meeting and exceeding the initial objectives.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-medium mb-4">Key Outcomes</h3>
                            <ul className="space-y-3">
                              {project.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 mt-1 text-foreground">
                                    <ListChecks size={18} />
                                  </div>
                                  <span className="text-muted-foreground">
                                    {result}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-medium mb-4">Testimonial</h3>
                            <div className="bg-muted p-4 rounded-lg">
                              <p className="italic text-muted-foreground mb-4">
                                "The solution exceeded our expectations. Not only did it solve our immediate challenges, but it also set us up for future growth and digital transformation."
                              </p>
                              <p className="text-sm font-medium">— Client Representative</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-1"
          >
            <motion.div variants={fadeIn}>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Layers size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:underline flex items-center gap-1"
                        >
                          View Site
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full text-xs font-medium"
                      >
                        <Tag size={12} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-6">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how my design services can help your next project succeed.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
