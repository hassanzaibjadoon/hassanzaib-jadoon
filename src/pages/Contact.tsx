
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Create a mailto URL with the form data
      const mailtoUrl = `mailto:Hassanzaibjadoon2004@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
      )}`;
      
      // Open the user's email client
      window.open(mailtoUrl, '_blank');
      
      // Show success toast
      toast({
        title: "Message Ready to Send",
        description: "Your email client has been opened. Please send the email to complete the process.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      
      toast({
        title: "Something went wrong",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
            Let's Connect
          </h1>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            Reach out using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-1 space-y-4"
          >
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:Hassanzaibjadoon2004@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      Hassanzaibjadoon2004@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a 
                      href="tel:+923119541429" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      +92 311 9541429
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Peshawar, Pakistan
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/923119541429" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-medium mb-6">Send a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      <a
                        href="https://wa.me/923119541429"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 transition-colors rounded-md py-2 px-4"
                      >
                        <MessageSquare size={16} />
                        WhatsApp Chat
                      </a>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
