
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Review {
  name: string;
  title: string;
  rating: number;
  text: string;
  image: string;
}

interface ClientReviewsProps {
  reviews: Review[];
}

const ClientReviews = ({ reviews }: ClientReviewsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6 hover-glow"
          >
            <Star size={24} className="mr-2" /> Client Reviews
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            What clients say about my work and collaborative approach
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neo-blur hover-trigger">
                <CardContent className="p-6">
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-16 h-16 border border-primary/20 mr-4">
                        <AvatarImage src={review.image} alt={review.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          <User size={20} />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-medium">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.title}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
