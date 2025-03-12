
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

interface CertificationsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  aiCertifications: CertificationItem[];
  pmCertifications: CertificationItem[];
  marketingCertifications: CertificationItem[];
  biCertifications: CertificationItem[];
  techCertifications: CertificationItem[];
  financeCertifications: CertificationItem[];
  leadershipCertifications: CertificationItem[];
  programmingCertifications: CertificationItem[];
  socialCertifications: CertificationItem[];
}

const Certifications = ({
  activeTab,
  setActiveTab,
  aiCertifications,
  pmCertifications,
  marketingCertifications,
  biCertifications,
  techCertifications,
  financeCertifications,
  leadershipCertifications,
  programmingCertifications,
  socialCertifications,
}: CertificationsProps) => {
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
            Certifications & Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Continuous learning and professional development across various domains.
          </motion.p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-9 gap-1">
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="pm">Project Management</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="bi">Business</TabsTrigger>
              <TabsTrigger value="tech">Technology</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="social">Social Impact</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ai" className="space-y-4">
            <CertificationGrid certifications={aiCertifications} />
          </TabsContent>
          
          <TabsContent value="pm" className="space-y-4">
            <CertificationGrid certifications={pmCertifications} />
          </TabsContent>
          
          <TabsContent value="marketing" className="space-y-4">
            <CertificationGrid certifications={marketingCertifications} />
          </TabsContent>
          
          <TabsContent value="bi" className="space-y-4">
            <CertificationGrid certifications={biCertifications} />
          </TabsContent>
          
          <TabsContent value="tech" className="space-y-4">
            <CertificationGrid certifications={techCertifications} />
          </TabsContent>
          
          <TabsContent value="finance" className="space-y-4">
            <CertificationGrid certifications={financeCertifications} />
          </TabsContent>
          
          <TabsContent value="leadership" className="space-y-4">
            <CertificationGrid certifications={leadershipCertifications} />
          </TabsContent>
          
          <TabsContent value="programming" className="space-y-4">
            <CertificationGrid certifications={programmingCertifications} />
          </TabsContent>
          
          <TabsContent value="social" className="space-y-4">
            <CertificationGrid certifications={socialCertifications} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const CertificationGrid = ({ certifications }: { certifications: CertificationItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.name + index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="h-full neo-blur sparkle-effect hover-trigger">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium leading-tight">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
