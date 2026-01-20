import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calculator,
  Globe,
  Microscope,
  Palette,
  Music,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import classroomImage from "@/assets/classroom.jpg";

const programs = [
  {
    name: "Early Years",
    ages: "Ages 3-5",
    description:
      "Play-based learning that develops social skills, creativity, and a foundation for literacy and numeracy.",
    highlights: [
      "Phonics & early reading",
      "Number concepts",
      "Creative play",
      "Social development",
    ],
  },
  {
    name: "Primary",
    ages: "Ages 6-9",
    description:
      "Building core skills in reading, writing, and mathematics while fostering curiosity across subjects.",
    highlights: [
      "Reading fluency",
      "Mathematical thinking",
      "Science exploration",
      "Writing skills",
    ],
  },
  {
    name: "Upper Primary",
    ages: "Ages 10-12",
    description:
      "Preparing students for secondary education with advanced concepts and critical thinking skills.",
    highlights: [
      "Advanced mathematics",
      "Research skills",
      "Digital literacy",
      "Leadership development",
    ],
  },
];

const subjects = [
  { icon: BookOpen, name: "Language Arts" },
  { icon: Calculator, name: "Mathematics" },
  { icon: Microscope, name: "Science" },
  { icon: Globe, name: "Social Studies" },
  { icon: Palette, name: "Visual Arts" },
  { icon: Music, name: "Music" },
];

const approaches = [
  {
    title: "Student-Centered Learning",
    description: "Each child's unique needs and interests guide their educational path.",
  },
  {
    title: "Hands-On Discovery",
    description: "Active learning through experiments, projects, and real-world applications.",
  },
  {
    title: "Regular Assessment",
    description: "Ongoing evaluation ensures every child progresses at their optimal pace.",
  },
];

const Academics = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section with Image */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={classroomImage}
              alt="Students engaged in classroom learning"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-6"
              >
                <GraduationCap className="w-4 h-4" />
                Our Curriculum
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
              >
                Academic Excellence Through Joyful Learning
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-background/90 mb-8"
              >
                Our balanced curriculum combines rigorous academics with creative exploration, 
                preparing students for success while nurturing their natural curiosity.
              </motion.p>

              {/* Subject Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {subjects.map((subject) => (
                  <span
                    key={subject.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm text-background rounded-full text-sm border border-background/30"
                  >
                    <subject.icon className="w-4 h-4" />
                    {subject.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section - Timeline Layout */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wide">
                Age Groups
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Programs for Every Stage
              </h2>
              <p className="text-muted-foreground text-lg">
                Developmentally appropriate learning experiences tailored to each age group's needs and abilities.
              </p>
            </motion.div>

            {/* Timeline Programs */}
            <div className="space-y-0">
              {programs.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-border last:border-b-0"
                >
                  {/* Age Badge */}
                  <div className="lg:col-span-2 flex items-start">
                    <span className="inline-flex items-center justify-center px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-full text-sm">
                      {program.ages}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {program.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-3">
                      {program.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section - Clean Two Column */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-32"
              >
                <span className="text-secondary font-medium text-sm uppercase tracking-wide">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Learning That Engages Mind and Heart
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We believe children learn best when they're actively engaged. Our teachers use 
                  a blend of direct instruction, hands-on activities, collaborative projects, 
                  and individual exploration to meet diverse learning styles.
                </p>

                <Button size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Visit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              {/* Right - Approach Points */}
              <div className="space-y-8">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={approach.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {approach.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                See Our Curriculum in Action
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8">
                Schedule a classroom visit and observe our teachers bringing learning to life.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Book a Tour
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

export default Academics;
