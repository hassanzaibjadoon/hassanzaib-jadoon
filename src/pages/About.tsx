import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Briefcase, GraduationCap, Award, Users, User, Star, Book, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Summary from '@/components/about/Summary';
import Story from '@/components/about/Story';
import Skills from '@/components/about/Skills';
import Experience from '@/components/about/Experience';
import ClientReviews from '@/components/about/ClientReviews';
import Recommendations from '@/components/about/Recommendations';
import Certifications from '@/components/about/Certifications';
import LinkedInProfile from '@/components/about/LinkedInProfile';

// Import client review images directly - using public directory paths
const TomNorthImg = '/images/Tom North.jpeg';
const ObenImg = '/images/Oben.jpeg';
const JoeRobinsonImg = '/images/Joe Robbinson.jpeg';
const ProfilePicture = '/images/Profile Picture Hassan.jpg';

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
    text: "Hassan is a consummate professional. I believe his expertise, especially with ATS, will effectively support my job search. I highly recommend his services.",
    image: TomNorthImg
  },
  {
    name: "Oben Eyonganyo",
    title: "Client",
    rating: 5,
    text: "Hassan is very hardworking, resilient, and patient. He executed top-notch work with great knowledge and expertise. He asks the right questions, welcomes feedback, and makes necessary alterations without hesitation. I will 100% recommend him to my family, friends, and loved ones.",
    image: ObenImg
  },
  {
    name: "Joe Robinson",
    title: "Collaborator",
    rating: 5,
    text: "Hassan Zaib Jadoon is a professional and a pleasure to work with. Very knowledgeable, understanding, and easy to collaborate with. Would absolutely recommend him.",
    image: JoeRobinsonImg
  }
];

const recommendations = [
  {
    name: "Muhammad Zulqarnain",
    title: "Founder & CEO @ Clouditeture",
    text: "I had the pleasure of collaborating with Hassan during a community event organized through his leadership at MLSA UET Peshawar, and I was truly impressed.\n\nHassan is an exceptional leader who brings people together with enthusiasm and professionalism. His ability to create an inclusive environment and empower young talent is remarkable. He actively engaged participants, fostering meaningful discussions and ensuring everyone felt valued.\n\nI highly recommend Hassan for any future endeavors. His dedication and passion for community development make him a standout professional.",
    image: ProfilePicture
  },
  {
    name: "Rajesh Kumar",
    title: "Junior Pentester",
    text: "Hassan is an outstanding Research Analyst with whom I had the pleasure of working during our internship at Server4Sale. He consistently demonstrated a passion for learning and was always eager to take on new challenges.\n\nHis ability to manage projects efficiently and deliver high-quality work on time is truly impressive. Hassan's dedication and proactive approach make him an asset to any team, and I'm confident that he will continue to excel in his future endeavors.",
    image: ProfilePicture
  },
  {
    name: "Azzah Sarfraz",
    title: "Project Coordinator | Server4Sale",
    text: "I had the pleasure of supervising Hassan Zaib Jadoon during his internship at Server4Sale, and I can confidently say he exceeded expectations in every aspect.\n\nHassan quickly became an integral part of the team, demonstrating an impressive work ethic, creativity, and eagerness to learn. He contributed significantly to all relevant projects, taking on responsibilities with professionalism and attention to detail. One of Hassan's key strengths was his ability to work both independently and as part of a team, always bringing fresh ideas and enthusiasm to the table.\n\nI highly recommend Hassan to any organization looking for a reliable, proactive, and talented individual. I'm excited to see all that he will accomplish in the future!",
    image: ProfilePicture
  },
  {
    name: "Safdar Nawaz Marwat",
    title: "Assistant Professor | Researcher | Editor | Principal Investigator | Director of Quality Enhancement Cell",
    text: "I had the privilege to teach Hassan in the undergraduate course Signals and Systems Lab, and also work with him during his internship at our Secured IoT Devices (SID) Lab.\n\nHe is not just well-versed in the scientific domain but also an entrepreneur, philanthropist, and literary figure. His poetry is as good as his prose and computing skills. His passion to go higher and get better is intense and growing with each passing day.\n\nI wish him a successful life and a shining career ahead.",
    image: ProfilePicture
  }
];

const aiCertifications = [
  {
    name: "Artificial Intelligence on Microsoft Azure",
    issuer: "Microsoft",
    date: "Mar 2025"
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "Mar 2025"
  },
  {
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "Mar 2025"
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "Aug 2024"
  },
  {
    name: "Advanced Prompt Engineering Techniques",
    issuer: "LinkedIn",
    date: "Mar 2024"
  },
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    issuer: "LinkedIn",
    date: "Mar 2024"
  }
];

const pmCertifications = [
  {
    name: "Project Management Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2025"
  },
  {
    name: "Career Essentials in Project Management",
    issuer: "Microsoft & LinkedIn",
    date: "Nov 2024"
  },
  {
    name: "Project Management Foundations: Budgets, Risk, Schedules, and Communication",
    issuer: "LinkedIn",
    date: "Nov - Oct 2024"
  },
  {
    name: "Managing Projects with Microsoft 365",
    issuer: "LinkedIn",
    date: "Sep 2024"
  },
  {
    name: "Project Execution: Running the Project",
    issuer: "Google",
    date: "Sep 2024"
  },
  {
    name: "Project Planning: Putting It All Together",
    issuer: "Google",
    date: "Sep 2024"
  },
  {
    name: "Managing Project Stakeholders",
    issuer: "LinkedIn",
    date: "Aug 2024"
  },
  {
    name: "Project Initiation: Starting a Successful Project",
    issuer: "Google",
    date: "Aug 2024"
  },
  {
    name: "Project Management Foundations: Teams & Requirements",
    issuer: "LinkedIn",
    date: "Aug - Jul 2024"
  },
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    date: "Jul 2024"
  },
  {
    name: "Project Management Foundations",
    issuer: "PMI, NASBA, LinkedIn",
    date: "Apr 2024"
  }
];

const marketingCertifications = [
  {
    name: "LinkedIn Content and Creative Design",
    issuer: "LinkedIn",
    date: "Nov 2024"
  },
  {
    name: "LinkedIn Marketing Solutions Fundamentals",
    issuer: "LinkedIn",
    date: "Nov 2024"
  },
  {
    name: "LinkedIn Marketing Strategy",
    issuer: "LinkedIn",
    date: "Nov 2024"
  },
  {
    name: "The Three Pillars of Effective Communication",
    issuer: "LinkedIn",
    date: "Oct 2024"
  }
];

const biCertifications = [
  {
    name: "Foundations of Business Intelligence",
    issuer: "Google",
    date: "Sep 2024"
  },
  {
    name: "Business Model Canvas: A Tool for Entrepreneurs and Innovators",
    issuer: "Kennesaw State University",
    date: "Jan 2025"
  },
  {
    name: "Business Analysis & Process Management",
    issuer: "Coursera",
    date: "Apr 2024"
  }
];

const techCertifications = [
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "Sep 2024"
  },
  {
    name: "Collaborating with Microsoft 365",
    issuer: "LinkedIn",
    date: "Aug 2024"
  },
  {
    name: "Optimizing Your Work with Microsoft 365",
    issuer: "LinkedIn",
    date: "Aug 2024"
  },
  {
    name: "Ubuntu Linux: Operating System Basics",
    issuer: "LinkedIn",
    date: "Apr 2024"
  }
];

const financeCertifications = [
  {
    name: "Investment Risk Management",
    issuer: "Coursera",
    date: "Apr 2024"
  }
];

const leadershipCertifications = [
  {
    name: "Asana Ambassador",
    issuer: "Asana",
    date: "May 2024"
  },
  {
    name: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    date: "Feb 2024"
  },
  {
    name: "The Six Skills of Proactive Professionals",
    issuer: "LinkedIn",
    date: "Apr 2024"
  },
  {
    name: "Nano Tips for Developing Magnetic Charisma",
    issuer: "LinkedIn",
    date: "Feb 2024"
  },
  {
    name: "Career Wellness Nano Tips",
    issuer: "LinkedIn",
    date: "Feb 2024"
  }
];

const programmingCertifications = [
  {
    name: "Programming for Everybody (Python)",
    issuer: "Coursera",
    date: "Sep 2023"
  },
  {
    name: "Certified Python Elementary Programmer",
    issuer: "Python Career Trainers",
    date: "Apr 2023"
  },
  {
    name: "HTML Basics",
    issuer: "Skillhub",
    date: "Feb 2023"
  },
  {
    name: "Build a Free Website with WordPress",
    issuer: "Coursera",
    date: "Apr 2024"
  }
];

const socialCertifications = [
  {
    name: "Exploring Gender Equality in Education",
    issuer: "British Council",
    date: "Aug 2024"
  }
];

const AboutPage = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <Layout>
      {/* Chat Bot Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <a 
          href="https://wa.me/923119541429"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg sparkle-effect bg-green-600 text-white hover:bg-green-700 transition-colors"
        >
          <MessageSquare size={24} />
        </a>
      </motion.div>

      <Summary showTeam={showTeam} setShowTeam={setShowTeam} />
      <Story showTeam={showTeam} />
      <Skills skills={skills} showTeam={showTeam} />
      <Experience experience={experience} education={education} />
      <Recommendations recommendations={recommendations} />
      <ClientReviews reviews={clientReviews} />
      <Certifications 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        aiCertifications={aiCertifications}
        pmCertifications={pmCertifications}
        marketingCertifications={marketingCertifications}
        biCertifications={biCertifications}
        techCertifications={techCertifications}
        financeCertifications={financeCertifications}
        leadershipCertifications={leadershipCertifications}
        programmingCertifications={programmingCertifications}
        socialCertifications={socialCertifications}
      />
      <LinkedInProfile />
    </Layout>
  );
};

export default AboutPage;
