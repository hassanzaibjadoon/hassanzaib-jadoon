
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SummaryProps {
  showTeam: boolean;
  setShowTeam: (show: boolean) => void;
}

const Summary = ({ showTeam, setShowTeam }: SummaryProps) => {
  return (
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
  );
};

export default Summary;
