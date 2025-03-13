
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Import client review images
import TomNorthImg from '@/img/Tom North.jpeg';
import ObenImg from '@/img/Oben.jpeg';
import JoeRobinsonImg from '@/img/Joe Robbinson.jpeg';
import ProfilePicture from '@/img/Profile Picture Hassan.jpg';

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
  const allReviews = [
    ...reviews,
    {
      name: "Muhammad Zulqarnain",
      title: "Founder & CEO @ Clouditeture",
      rating: 5,
      text: "I had the pleasure of collaborating with Hassan during a community event organized through his leadership at MLSA UET Peshawar, and I was truly impressed. Hassan is an exceptional leader who brings people together with enthusiasm and professionalism. His ability to create an inclusive environment and empower young talent is remarkable. He actively engaged participants, fostering meaningful discussions and ensuring everyone felt valued. I highly recommend Hassan for any future endeavors. His dedication and passion for community development make him a standout professional.",
      image: ProfilePicture // Using a placeholder since we don't have this person's image
    },
    {
      name: "Rajesh Kumar",
      title: "Junior Pentester",
      rating: 5,
      text: "Hassan is an outstanding Research Analyst with whom I had the pleasure of working during our internship at Server4Sale. He consistently demonstrated a passion for learning and was always eager to take on new challenges. His ability to manage projects efficiently and deliver high-quality work on time is truly impressive. Hassan's dedication and proactive approach make him an asset to any team, and I'm confident that he will continue to excel in his future endeavors.",
      image: ProfilePicture // Using a placeholder since we don't have this person's image
    },
    {
      name: "Azzah Sarfraz",
      title: "Project Coordinator | Server4Sale",
      rating: 5,
      text: "I had the pleasure of supervising Hassan Zaib Jadoon during his internship at Server4Sale, and I can confidently say he exceeded expectations in every aspect. Hassan quickly became an integral part of the team, demonstrating an impressive work ethic, creativity, and eagerness to learn. He contributed significantly to all relevant projects, taking on responsibilities with professionalism and attention to detail. One of Hassan's key strengths was his ability to work both independently and as part of a team, always bringing fresh ideas and enthusiasm to the table. I highly recommend Hassan to any organization looking for a reliable, proactive, and talented individual. I'm excited to see all that he will accomplish in the future!",
      image: ProfilePicture // Using a placeholder since we don't have this person's image
    },
    {
      name: "Safdar Nawaz Marwat",
      title: "Assistant Professor | Researcher | Editor | Principal Investigator | Director of Quality Enhancement Cell",
      rating: 5,
      text: "I had the privilege to teach Hassan in the undergraduate course Signals and Systems Lab, and also work with him during his internship at our Secured IoT Devices (SID) Lab. He is not just well-versed in the scientific domain but also an entrepreneur, philanthropist, and literary figure. His poetry is as good as his prose and computing skills. His passion to go higher and get better is intense and growing with each passing day. I wish him a successful life and a shining career ahead.",
      image: ProfilePicture // Using a placeholder since we don't have this person's image
    }
  ];

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
            <Star size={24} className="mr-2" /> Client Reviews & Recommendations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            What clients and colleagues say about my work and collaborative approach
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, index) => (
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
