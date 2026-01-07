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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import ecaImage from "@/assets/eca-activities.jpg";

const activities = [
  {
    icon: <Palette className="w-6 h-6" />,
    name: "Visual Arts",
    description:
      "Painting, drawing, sculpture, and mixed media projects that spark creativity and self-expression.",
    schedule: "Tuesdays & Thursdays",
    color: "bg-chart-1/20 text-chart-1",
  },
  {
    icon: <Music className="w-6 h-6" />,
    name: "Music & Choir",
    description:
      "Vocal training, rhythm, and introduction to various instruments. Annual performances included.",
    schedule: "Mondays & Wednesdays",
    color: "bg-chart-2/20 text-chart-2",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    name: "Sports & Athletics",
    description:
      "Soccer, basketball, swimming, and track & field. Focus on teamwork and physical fitness.",
    schedule: "Daily after school",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: <Drama className="w-6 h-6" />,
    name: "Drama & Theater",
    description:
      "Acting, public speaking, and annual theater productions that build confidence.",
    schedule: "Wednesdays & Fridays",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: <Code className="w-6 h-6" />,
    name: "Coding & Robotics",
    description:
      "Age-appropriate programming, robotics, and digital literacy for the modern world.",
    schedule: "Tuesdays",
    color: "bg-chart-4/20 text-chart-4",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    name: "Nature Club",
    description:
      "Gardening, environmental projects, and outdoor exploration to connect with nature.",
    schedule: "Thursdays",
    color: "bg-chart-5/20 text-chart-5",
  },
];

const benefits = [
  {
    title: "Discover Passions",
    description: "Help your child explore interests beyond academics.",
  },
  {
    title: "Build Confidence",
    description: "Performance and competition develop self-assurance.",
  },
  {
    title: "Make Friends",
    description: "Connect with peers who share similar interests.",
  },
  {
    title: "Stay Active",
    description: "Physical activities promote health and wellness.",
  },
];

const ECA = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-secondary/10 via-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Beyond the Classroom
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Extra-Curricular{" "}
                <span className="text-secondary">Activities</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                From sports to arts, coding to nature—our after-school programs
                help children discover their passions and develop new skills.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Activities Overview Image */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={ecaImage}
                alt="Children participating in various activities"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Programs"
              title="Explore Our Activities"
              description="A wide range of activities to nurture every talent and interest."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-border/50"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${activity.color} flex items-center justify-center mb-5`}
                  >
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {activity.description}
                  </p>
                  <div className="text-xs font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded-full">
                    {activity.schedule}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Why Activities Matter
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Whole-Child Development
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Extra-curricular activities are essential for developing
                  well-rounded individuals. They teach skills that can't be
                  learned in a textbook—teamwork, perseverance, creativity, and
                  leadership.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-4 shadow-sm"
                    >
                      <h4 className="font-medium text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary rounded-2xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Program Details
                </h3>
                <div className="space-y-4 text-secondary-foreground/90">
                  <div className="flex justify-between border-b border-secondary-foreground/20 pb-3">
                    <span>Available for</span>
                    <span className="font-medium">Ages 5-12</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary-foreground/20 pb-3">
                    <span>Schedule</span>
                    <span className="font-medium">After school hours</span>
                  </div>
                  <div className="flex justify-between border-b border-secondary-foreground/20 pb-3">
                    <span>Duration</span>
                    <span className="font-medium">1-2 hours per session</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervision</span>
                    <span className="font-medium">Trained instructors</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  asChild
                  className="w-full mt-6 bg-background text-foreground hover:bg-background/90"
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
        <section className="py-16 md:py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Let Your Child Explore
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Not sure which activity is right? Schedule a visit and let your
                child try different programs.
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
