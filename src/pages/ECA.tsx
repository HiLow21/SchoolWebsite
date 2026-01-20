import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Palette,
  Music,
  Trophy,
  Drama,
  Code,
  Leaf,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import ecaImage from "@/assets/eca-activities.jpg";

const activities = [
  {
    icon: Palette,
    name: "Visual Arts",
    description: "Painting, drawing, sculpture, and mixed media projects.",
    schedule: "Tue & Thu",
  },
  {
    icon: Music,
    name: "Music & Choir",
    description: "Vocal training, rhythm, and instrument introduction.",
    schedule: "Mon & Wed",
  },
  {
    icon: Trophy,
    name: "Sports & Athletics",
    description: "Soccer, basketball, swimming, and track & field.",
    schedule: "Daily",
  },
  {
    icon: Drama,
    name: "Drama & Theater",
    description: "Acting, public speaking, and annual productions.",
    schedule: "Wed & Fri",
  },
  {
    icon: Code,
    name: "Coding & Robotics",
    description: "Programming and robotics for the modern world.",
    schedule: "Tuesdays",
  },
  {
    icon: Leaf,
    name: "Nature Club",
    description: "Gardening and environmental exploration.",
    schedule: "Thursdays",
  },
];

const programDetails = [
  { icon: Users, label: "Ages 5-12", description: "Available for" },
  { icon: Clock, label: "1-2 Hours", description: "Per session" },
  { icon: Calendar, label: "After School", description: "Schedule" },
  { icon: Award, label: "Trained Staff", description: "Supervision" },
];

const benefits = [
  "Discover hidden talents and passions beyond academics",
  "Build confidence through performance and competition",
  "Develop teamwork, leadership, and social skills",
  "Stay physically active and promote wellness",
];

const ECA = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section with Image */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={ecaImage}
              alt="Children participating in various activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Beyond the Classroom
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
              >
                Extra-Curricular Activities
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-background/90 mb-8"
              >
                From sports to arts, coding to nature—our after-school programs help children 
                discover their passions and develop new skills.
              </motion.p>

              {/* Program Details Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {programDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm text-background rounded-full text-sm border border-background/30"
                  >
                    <detail.icon className="w-4 h-4" />
                    <span className="font-medium">{detail.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Activities Section - Clean Table Layout */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <span className="text-secondary font-medium text-sm uppercase tracking-wide">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Activities to Nurture Every Talent
              </h2>
              <p className="text-muted-foreground text-lg">
                A wide range of programs designed to help children explore their interests and develop new skills.
              </p>
            </motion.div>

            {/* Activities List */}
            <div className="border border-border rounded-2xl overflow-hidden">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-muted/30 transition-colors ${
                    index !== activities.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  {/* Icon & Name */}
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {activity.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="md:col-span-6 text-muted-foreground">
                    {activity.description}
                  </p>

                  {/* Schedule */}
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="inline-flex items-center gap-1.5 text-sm text-secondary font-medium">
                      <Clock className="w-4 h-4" />
                      {activity.schedule}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Two Column */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium text-sm uppercase tracking-wide">
                  Why Activities Matter
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Whole-Child Development
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Extra-curricular activities are essential for developing well-rounded individuals. 
                  They teach skills that can't be learned in a textbook—teamwork, perseverance, 
                  creativity, and leadership.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right - Enrollment CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
                  Ready to Enroll?
                </h3>
                
                <div className="space-y-4 text-secondary-foreground/90 mb-8">
                  <div className="flex justify-between py-3 border-b border-secondary-foreground/20">
                    <span>Enrollment</span>
                    <span className="font-medium">Open year-round</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-foreground/20">
                    <span>Class sizes</span>
                    <span className="font-medium">Small groups (8-12)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-secondary-foreground/20">
                    <span>Equipment</span>
                    <span className="font-medium">All provided</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Trial session</span>
                    <span className="font-medium">Available</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  asChild
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  <Link to="/contact">
                    Enroll Your Child
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Let Your Child Explore
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Not sure which activity is right? Schedule a visit and let your child try different programs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get More Information
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default ECA;
