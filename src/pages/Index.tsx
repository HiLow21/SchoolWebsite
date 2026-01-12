import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  BookOpen,
  Users,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import ImageScroll from "@/components/home/imageScroll";

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Nurturing Environment",
    description:
      "We create a warm, supportive atmosphere where every child feels valued, safe, and encouraged to explore.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Excellence in Learning",
    description:
      "Our curriculum blends academic rigor with creative discovery, fostering a lifelong love of learning.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Strong Community",
    description:
      "Parents, teachers, and students work together as partners in every child's educational journey.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Safety First",
    description:
      "Comprehensive safety protocols and trained staff ensure your child's wellbeing is always our priority.",
  },
];

const stats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "500+", label: "Happy Students" },
  { value: "1:15", label: "Teacher Ratio" },
  { value: "98%", label: "Parent Satisfaction" },
];

const highlights = [
  "STEM-focused curriculum",
  "Art & Music programs",
  "Sports & Physical Education",
  "Character development",
  "Modern facilities",
  "After-school care",
];

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Happy children learning and playing together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
                  Enrolling for 2025-2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
              >
                Where Every Child's{" "}
                <span className="text-accent">Potential</span> Shines
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed"
              >
                At Bright Horizons, we nurture curious minds and kind hearts in
                a safe, joyful environment. Give your child the foundation for
                a lifetime of learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="text-base">
                  <Link to="/contact">
                    Schedule a Visit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base bg-background/10 border-background/30 text-background hover:bg-background/20"
                >
                  <Link to="/academics">Explore Programs</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Values"
              title="Why Parents Choose Us"
              description="We believe every child deserves an education that nurtures their unique gifts while building a strong foundation for the future."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <FeatureCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

      
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={classroomImage}
                  alt="Bright classroom with engaged students"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                  About Our School
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  A Place Where Learning Comes Alive
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Since 1995, Bright Horizons has been dedicated to providing
                  exceptional education for children ages 3-12. Our experienced
                  teachers, modern facilities, and child-centered approach
                  create the perfect environment for growth.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button size="lg" variant="secondary" asChild className="mt-6">
                  <Link to="/academics">
                    Learn More About Our Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

       
        {/* <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                  "Choosing Bright Horizons was the best decision we made for
                  our daughter. She's not just learning academics—she's growing
                  into a confident, curious, and kind person. The teachers
                  genuinely care."
                </blockquote>
                <div className="text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Sarah M.
                  </span>{" "}
                  — Parent of a Grade 3 Student
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}
        <ImageScroll />

     
      </PageTransition>
    </Layout>
  );
};

export default Index;
