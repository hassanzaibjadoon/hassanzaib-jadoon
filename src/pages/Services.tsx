
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, 
  PencilRuler, 
  Globe, 
  Briefcase,
  Users, 
  BarChart,
  Lightbulb,
  CheckCircle,
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  Megaphone,
  Compass,
  Edit,
  Code,
  FileText,
  Mail,
  Calendar,
  HeartHandshake,
  School,
  Presentation
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

// Services data
const servicesData = [
  // Management & Leadership
  {
    id: "1",
    title: "Project Management",
    icon: <Briefcase className="h-10 w-10 text-muted-foreground" />,
    description: "Strategic planning, team coordination, and delivery of successful projects aligned with organizational goals.",
    keyPoints: [
      "Project Planning & Execution",
      "Resource Allocation",
      "Risk Management",
      "Timeline & Milestone Tracking"
    ],
    features: [
      "Agile & traditional methodologies",
      "Budget management",
      "Stakeholder communication",
      "Performance metrics & reporting"
    ],
    category: "management"
  },
  {
    id: "2",
    title: "Program Management",
    icon: <Compass className="h-10 w-10 text-muted-foreground" />,
    description: "Overseeing multiple projects and ensuring alignment with organizational goals and strategic initiatives.",
    keyPoints: [
      "Multi-project Coordination",
      "Strategic Alignment",
      "Resource Optimization",
      "Program Governance"
    ],
    features: [
      "Portfolio management",
      "Cross-functional leadership",
      "Benefits realization tracking",
      "Program performance metrics"
    ],
    category: "management"
  },
  {
    id: "3",
    title: "Human Resources (HR)",
    icon: <Users className="h-10 w-10 text-muted-foreground" />,
    description: "People management, recruitment, and organizational development strategies to build high-performing teams.",
    keyPoints: [
      "Talent Acquisition & Retention",
      "Performance Management",
      "Employee Development",
      "Organizational Culture"
    ],
    features: [
      "Recruitment strategies",
      "Employee engagement",
      "Conflict resolution",
      "HR policy development"
    ],
    category: "management"
  },
  {
    id: "4",
    title: "Leadership Development",
    icon: <HeartHandshake className="h-10 w-10 text-muted-foreground" />,
    description: "Programs and coaching to develop effective leadership skills and build strong, resilient teams.",
    keyPoints: [
      "Leadership Skills Training",
      "Team Building Workshops",
      "Performance Coaching",
      "Succession Planning"
    ],
    features: [
      "Personalized development plans",
      "Leadership assessment tools",
      "Mentorship programs",
      "Leadership retreat facilitation"
    ],
    category: "management"
  },
  
  // Design & Creative
  {
    id: "5",
    title: "UI/UX Design",
    icon: <PencilRuler className="h-10 w-10 text-muted-foreground" />,
    description: "Create intuitive, engaging, and accessible user interfaces that delight your users and achieve business goals.",
    keyPoints: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Interaction",
      "Usability Testing"
    ],
    features: [
      "User-centered design approach",
      "Cross-platform consistency",
      "Accessibility compliance",
      "Data-driven design decisions"
    ],
    category: "design"
  },
  {
    id: "6",
    title: "Graphic Design",
    icon: <Edit className="h-10 w-10 text-muted-foreground" />,
    description: "Visually compelling designs that communicate your message effectively and strengthen your brand identity.",
    keyPoints: [
      "Brand Visual Elements",
      "Marketing Materials",
      "Social Media Graphics",
      "Print & Digital Assets"
    ],
    features: [
      "Brand consistency",
      "Creative concept development",
      "Multi-format design",
      "Visual storytelling"
    ],
    category: "design"
  },
  {
    id: "7",
    title: "Brand Identity Design",
    icon: <Lightbulb className="h-10 w-10 text-muted-foreground" />,
    description: "Develop a cohesive and memorable brand identity that communicates your values and connects with your audience.",
    keyPoints: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral",
      "Brand Strategy"
    ],
    features: [
      "Market research & positioning",
      "Consistent visual language",
      "Cross-channel application",
      "Brand story development"
    ],
    category: "design"
  },
  
  // Development & Technical
  {
    id: "8",
    title: "Website & Web Development",
    icon: <Globe className="h-10 w-10 text-muted-foreground" />,
    description: "Build beautiful, responsive, and high-performance websites that represent your brand and convert visitors into customers.",
    keyPoints: [
      "Responsive Website Design",
      "Front-end Development",
      "CMS Integration",
      "Performance Optimization"
    ],
    features: [
      "Mobile-first approach",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Secure implementation"
    ],
    category: "development"
  },
  {
    id: "9",
    title: "Technical Training & Workshops",
    icon: <Code className="h-10 w-10 text-muted-foreground" />,
    description: "Specialized training sessions and workshops to enhance technical skills and knowledge within your team.",
    keyPoints: [
      "Customized Technical Curriculum",
      "Hands-on Workshops",
      "Technical Skill Assessment",
      "Follow-up Resources"
    ],
    features: [
      "Industry-specific training",
      "Practical application exercises",
      "Progress measurement tools",
      "Certification preparation"
    ],
    category: "development"
  },
  
  // Content & Marketing
  {
    id: "10",
    title: "Copywriting",
    icon: <FileText className="h-10 w-10 text-muted-foreground" />,
    description: "Compelling content that tells your story, engages your audience, and drives action across all platforms.",
    keyPoints: [
      "Website Copy",
      "Marketing Materials",
      "Social Media Content",
      "Brand Messaging"
    ],
    features: [
      "SEO-optimized writing",
      "Brand voice consistency",
      "Persuasive storytelling",
      "Call-to-action development"
    ],
    category: "marketing"
  },
  {
    id: "11",
    title: "SEO & Content Writing",
    icon: <BarChart className="h-10 w-10 text-muted-foreground" />,
    description: "Strategic content creation that improves your search rankings and drives organic traffic to your website.",
    keyPoints: [
      "Keyword Research & Strategy",
      "SEO Content Creation",
      "Content Optimization",
      "Performance Analysis"
    ],
    features: [
      "Search ranking improvement",
      "Conversion-focused content",
      "Competitive analysis",
      "Content calendar planning"
    ],
    category: "marketing"
  },
  {
    id: "12",
    title: "Marketing",
    icon: <Megaphone className="h-10 w-10 text-muted-foreground" />,
    description: "Comprehensive marketing strategies that build awareness, drive engagement, and generate leads for your business.",
    keyPoints: [
      "Marketing Strategy Development",
      "Campaign Management",
      "Digital Marketing",
      "Performance Tracking"
    ],
    features: [
      "Multi-channel approach",
      "Target audience analysis",
      "ROI measurement",
      "A/B testing & optimization"
    ],
    category: "marketing"
  },
  {
    id: "13",
    title: "Email Marketing",
    icon: <Mail className="h-10 w-10 text-muted-foreground" />,
    description: "Effective email campaigns that nurture leads, build customer relationships, and drive conversions.",
    keyPoints: [
      "Email Strategy & Planning",
      "Campaign Creation",
      "List Management",
      "Performance Analysis"
    ],
    features: [
      "Segmentation & personalization",
      "A/B testing",
      "Automation workflows",
      "Conversion tracking"
    ],
    category: "marketing"
  },
  {
    id: "14",
    title: "Public Relations",
    icon: <MessageSquare className="h-10 w-10 text-muted-foreground" />,
    description: "Strategic communication to build and maintain a positive public image and strong media relationships.",
    keyPoints: [
      "Media Relations",
      "Press Release Writing",
      "Crisis Management",
      "Public Image Strategy"
    ],
    features: [
      "Media outreach campaigns",
      "Spokesperson training",
      "Reputation management",
      "Brand story placement"
    ],
    category: "marketing"
  },
  
  // Career & Education
  {
    id: "15",
    title: "Resume Writing",
    icon: <Edit className="h-10 w-10 text-muted-foreground" />,
    description: "Professional resume writing services to help you stand out in the job market and land your dream position.",
    keyPoints: [
      "Achievement-focused Content",
      "ATS-friendly Formatting",
      "Industry-specific Targeting",
      "Personal Branding"
    ],
    features: [
      "Keyword optimization",
      "Professional formatting",
      "Skills highlighting",
      "Cover letter writing"
    ],
    category: "career"
  },
  {
    id: "16",
    title: "Resume Review",
    icon: <FileText className="h-10 w-10 text-muted-foreground" />,
    description: "Expert feedback on your existing resume to identify areas for improvement and maximize your chances of success.",
    keyPoints: [
      "Content Assessment",
      "Format & Design Review",
      "ATS Compatibility Check",
      "Improvement Recommendations"
    ],
    features: [
      "Detailed feedback report",
      "Industry-specific insights",
      "Priority improvement areas",
      "Follow-up consultation"
    ],
    category: "career"
  },
  {
    id: "17",
    title: "Education & Mentorship Programs",
    icon: <School className="h-10 w-10 text-muted-foreground" />,
    description: "Structured learning experiences and personalized mentorship to accelerate professional growth and development.",
    keyPoints: [
      "Customized Learning Plans",
      "One-on-one Mentorship",
      "Skill Development",
      "Career Guidance"
    ],
    features: [
      "Goal-oriented approach",
      "Progress tracking",
      "Real-world application",
      "Networking opportunities"
    ],
    category: "career"
  },
  
  // Community & Events
  {
    id: "18",
    title: "Community Building & Engagement",
    icon: <Users className="h-10 w-10 text-muted-foreground" />,
    description: "Strategies and programs to build vibrant, engaged communities around your brand, product, or mission.",
    keyPoints: [
      "Community Strategy Development",
      "Engagement Programs",
      "Ambassador Programs",
      "Community Management"
    ],
    features: [
      "Platform-specific strategies",
      "Community metrics & analytics",
      "Content calendar planning",
      "Moderation guidelines"
    ],
    category: "community"
  },
  {
    id: "19",
    title: "Event Management",
    icon: <Calendar className="h-10 w-10 text-muted-foreground" />,
    description: "End-to-end planning and execution of successful events that achieve your business objectives and delight attendees.",
    keyPoints: [
      "Event Strategy & Planning",
      "Logistics Management",
      "Vendor Coordination",
      "On-site Execution"
    ],
    features: [
      "Budget management",
      "Timeline development",
      "Attendee experience design",
      "Post-event analysis"
    ],
    category: "community"
  },
  
  // Research & Strategy
  {
    id: "20",
    title: "Research Skills",
    icon: <BookOpen className="h-10 w-10 text-muted-foreground" />,
    description: "Thorough research services to gather insights, analyze information, and support data-driven decision making.",
    keyPoints: [
      "Market Research",
      "Competitive Analysis",
      "Data Collection & Analysis",
      "Insight Development"
    ],
    features: [
      "Multiple research methodologies",
      "Primary & secondary research",
      "Data visualization",
      "Action recommendation reports"
    ],
    category: "strategy"
  },
  {
    id: "21",
    title: "Consultation & Strategic Planning",
    icon: <Presentation className="h-10 w-10 text-muted-foreground" />,
    description: "Expert guidance and strategic planning to help your organization overcome challenges and achieve its goals.",
    keyPoints: [
      "Situation Assessment",
      "Strategic Plan Development",
      "Implementation Roadmap",
      "Performance Measurement"
    ],
    features: [
      "Customized solutions",
      "Stakeholder alignment",
      "Resource planning",
      "Milestone tracking"
    ],
    category: "strategy"
  }
];

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business goals, target audience, and requirements through in-depth consultations and research."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a comprehensive plan and approach tailored to your project needs and objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Creating intuitive, engaging, and visually appealing designs that align with your brand and user expectations."
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, responsive, and high-performing implementations of the approved designs."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance to ensure everything functions perfectly across devices and browsers."
  },
  {
    number: "06",
    title: "Launch",
    description: "Smooth deployment of your project with ongoing support to ensure successful adoption."
  }
];

// FAQ data
const faqData = [
  {
    question: "What types of projects do you typically work on?",
    answer: "I specialize in digital products including websites, mobile applications, e-commerce platforms, and SaaS interfaces. My experience spans various industries including technology, finance, healthcare, education, and retail."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive mobile app or complex web application could take 3-6 months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, I offer various maintenance and support packages to ensure your digital product continues to function optimally and evolve with your business needs and user feedback."
  },
  {
    question: "How do you charge for your services?",
    answer: "I offer both project-based pricing and hourly rates depending on the nature of the work. For most client projects, I provide a comprehensive quote based on the project scope after our initial consultation."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! I frequently collaborate with in-house teams, providing specialized expertise in UI/UX design, front-end development, or strategic guidance while integrating with your existing workflows."
  },
  {
    question: "Do you offer consultation services?",
    answer: "Yes, I provide UX audits, design system consultations, and strategic advisory services for businesses looking to improve their existing digital products or planning new initiatives."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const navigate = useNavigate();
  
  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeTab);
  
  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
            Services & Expertise
          </h1>
          <p className="text-muted-foreground">
            I offer comprehensive services across management, design, development, marketing, 
            and community building to help organizations achieve their goals and create exceptional experiences.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-12"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:grid-cols-7 gap-1 justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service) => (
                <motion.div key={service.id} variants={fadeIn}>
                  <Card 
                    className="h-full flex flex-col cursor-pointer transition-all hover:shadow-md"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {service.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="my-24"
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient mb-4">
              My Process
            </h2>
            <p className="text-muted-foreground">
              A structured approach to deliver consistent results and exceptional quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <span className="text-3xl font-serif font-semibold text-muted-foreground">{step.number}</span>
                    <CardTitle className="text-xl mt-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="my-24"
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Answers to common questions about my services and process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                {faqData.map((faq, index) => (
                  <div key={index}>
                    <div className="py-4">
                      <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                    {index < faqData.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="my-24 max-w-3xl mx-auto text-center"
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8 md:p-12">
              <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how my services can help bring your vision to life and create exceptional experiences for your organization.
              </p>
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
