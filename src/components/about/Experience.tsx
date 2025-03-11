
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

const Experience = ({ experience, education }: ExperienceProps) => {
  return (
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
  );
};

export default Experience;
