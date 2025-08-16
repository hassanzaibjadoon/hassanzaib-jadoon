
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the profile picture with the correct path
const ProfilePicture = '/images/Profile Picture Hassan.jpg';

interface StoryProps {
  showTeam: boolean;
}

const Story = ({ showTeam }: StoryProps) => {
  return (
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
                className="h-full w-full flex items-center justify-center sparkle-effect"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={ProfilePicture} 
                  alt="Hassan Zaib Jadoon" 
                  className="w-full h-full object-cover"
                />
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
  );
};

export default Story;
