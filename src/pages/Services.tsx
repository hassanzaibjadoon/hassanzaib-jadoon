
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Layout, PenTool, Code, Lightbulb, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const ServicesPage = () => {
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
              Services
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              How I can help you
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              I offer a range of services designed to help businesses and individuals create exceptional digital experiences that engage users and achieve business goals.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                
                <h2 className="text-2xl font-medium mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  {service.offerings.map((offering, i) => (
                    <div key={i} className="flex items-start">
                      <ArrowDownRight size={16} className="text-muted-foreground mr-2 mt-1" />
                      <span className="text-sm">{offering}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-sm font-medium text-foreground link-underline"
                >
                  Discuss a Project <ArrowRight size={14} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
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
              My Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              A proven approach to delivering successful projects that meet and exceed expectations.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 left-0 -ml-4 mt-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="pt-2 pl-8">
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
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
              Client Testimonials
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Hear what clients have to say about their experience working with me.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl neo-blur"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                    <span className="text-muted-foreground text-xs">Photo</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Answers to common questions about my services and process.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl neo-blur"
                >
                  <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Ready to start your project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Contact me today to discuss your project needs and how we can work together to achieve your goals.
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

// Mock Data
const services = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'Creating intuitive, user-centered designs that enhance user experience and drive engagement.',
    icon: Layout,
    offerings: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'User Interface Design',
      'Usability Testing',
      'Design Systems'
    ]
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'Building responsive, performant, and accessible websites using modern technologies and best practices.',
    icon: Code,
    offerings: [
      'Front-end Development',
      'Responsive Design',
      'Performance Optimization',
      'Accessibility Implementation',
      'Content Management Systems'
    ]
  },
  {
    id: '3',
    title: 'Brand Strategy',
    description: 'Developing comprehensive brand strategies that align with business goals and resonate with target audiences.',
    icon: Lightbulb,
    offerings: [
      'Brand Identity Development',
      'Logo Design',
      'Visual Language Creation',
      'Brand Guidelines',
      'Marketing Collateral'
    ]
  },
  {
    id: '4',
    title: 'Consulting & Training',
    description: 'Providing expert guidance and knowledge transfer to help teams improve their design and development processes.',
    icon: MessageSquare,
    offerings: [
      'Design Process Improvement',
      'Team Workshops',
      'Technical Consulting',
      'Design System Implementation',
      'Accessibility Audits'
    ]
  },
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your business, goals, users, and project requirements through in-depth research and analysis.'
  },
  {
    title: 'Strategy',
    description: 'Developing a comprehensive plan that outlines how we'll achieve your objectives and solve user problems.'
  },
  {
    title: 'Design & Development',
    description: 'Creating solutions through iterative design and development, with regular feedback and refinement.'
  },
  {
    title: 'Launch & Optimization',
    description: 'Delivering the final product and providing ongoing support to ensure continued success and improvement.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Retail Brand',
    quote: 'Working with this team was a game-changer for our brand. The attention to detail and focus on user experience transformed our online presence and significantly improved our conversion rates.'
  },
  {
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Tech Startup',
    quote: 'The brand identity created for our startup perfectly captured our vision and values. It has been instrumental in establishing our market presence and attracting both customers and investors.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'Financial Services',
    quote: 'The redesign of our mobile app exceeded all expectations. The intuitive interface and streamlined user experience have resulted in significantly higher engagement and positive feedback from our users.'
  },
  {
    name: 'David Miller',
    position: 'Creative Director',
    company: 'Design Agency',
    quote: 'The consultation services provided valuable insights that helped us improve our internal processes and deliver better results for our clients. Highly recommended for teams looking to level up.'
  }
];

const faqs = [
  {
    question: 'What is your typical process for working with a new client?',
    answer: 'I start with a discovery phase to understand your business, goals, and requirements. From there, I develop a strategy and proposal tailored to your needs. Once approved, I move into the design and development phase, with regular check-ins and feedback sessions. The final stage includes testing, refinement, and launch, followed by ongoing support as needed.'
  },
  {
    question: 'How long does a typical project take to complete?',
    answer: 'Project timelines vary depending on scope and complexity. A basic website design might take 4-6 weeks, while a comprehensive brand identity system could take 2-3 months. Complex web applications or e-commerce platforms typically require 3-6 months. During our initial consultation, I'll provide a more specific timeline based on your project requirements.'
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes, I offer various maintenance and support packages to ensure your project continues to perform optimally after launch. These can include regular updates, performance monitoring, content updates, and technical support. We can discuss the specific needs of your project and create a custom maintenance plan.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer both project-based and retainer pricing depending on your needs. Project-based pricing is determined by the scope, complexity, and timeline of the work. Retainer arrangements are ideal for ongoing work or multiple projects. During our initial consultation, I'll provide a detailed quote based on your specific requirements.'
  },
  {
    question: 'How do we get started?',
    answer: 'The first step is to schedule an initial consultation where we can discuss your project in detail. From there, I'll develop a proposal outlining the scope, timeline, and cost. Once approved, we'll begin with the discovery phase to lay the foundation for a successful project. Contact me today to schedule your consultation.'
  }
];

export default ServicesPage;
