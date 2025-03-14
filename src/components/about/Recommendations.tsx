
import { motion } from 'framer-motion';
import { Award, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ProfilePicture from '@/img/Profile Picture Hassan.jpg';

interface Recommendation {
  name: string;
  title: string;
  text: string;
  image: string;
}

interface RecommendationsProps {
  recommendations: Recommendation[];
}

const Recommendations = ({ recommendations }: RecommendationsProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6 hover-glow"
          >
            <Award size={24} className="mr-2" /> Professional Recommendations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            What colleagues and mentors say about my professional contributions
          </motion.p>
        </div>
        
        <div className="space-y-8">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="neo-blur hover-trigger">
                <CardContent className="p-6 md:p-8">
                  <div className="md:flex items-start">
                    <div className="flex items-center mb-6 md:mb-0 md:mr-8">
                      <Avatar className="w-20 h-20 border-2 border-primary/20">
                        <AvatarImage src={recommendation.image} alt={recommendation.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <User size={24} />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h4 className="text-xl font-medium">{recommendation.name}</h4>
                        <p className="text-sm text-muted-foreground">{recommendation.title}</p>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                          {recommendation.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
