
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: string[];
  showTeam: boolean;
}

const Skills = ({ skills, showTeam }: SkillsProps) => {
  return (
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
  );
};

export default Skills;
