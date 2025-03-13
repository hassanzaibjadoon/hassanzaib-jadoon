
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Import client review images
import TomNorthImg from '@/img/Tom North.jpeg';
import ObenImg from '@/img/Oben.jpeg';
import JoeRobinsonImg from '@/img/Joe Robbinson.jpeg';

interface Review {
  name: string;
  title: string;
  rating: number;
  date: string;
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
            What clients say about my services and collaborative approach
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-1">{review.date}</span>
                  </div>
                  <p className="text-sm mb-4">{review.text}</p>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 border border-primary/20">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.title}</p>
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

export default ClientReviews;
