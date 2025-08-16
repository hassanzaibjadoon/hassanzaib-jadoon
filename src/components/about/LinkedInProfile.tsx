import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LinkedInProfile = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-gradient mb-4">
            LinkedIn Profile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with me on LinkedIn to see my professional journey, latest posts, and industry insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="overflow-hidden bg-card border-2 sparkle-effect">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-xl">
                <Linkedin className="h-6 w-6 text-blue-600" />
                Professional Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-background rounded-lg p-4 mb-6">
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="medium" 
                  data-theme="light" 
                  data-type="VERTICAL" 
                  data-vanity="hassanzaibjadoon" 
                  data-version="v1"
                >
                  <a 
                    className="badge-base__link LI-simple-link text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2" 
                    href="https://www.linkedin.com/in/hassanzaibjadoon?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hassan Zaib Jadoon
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  View my complete professional profile, including recent posts, achievements, and professional network.
                </p>
                <a
                  href="https://www.linkedin.com/in/hassanzaibjadoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Visit LinkedIn Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInProfile;