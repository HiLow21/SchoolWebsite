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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";
import classroomImage from "@/assets/classroom.jpg";

const programs = [
  {
    name: "Early Years (Ages 3-5)",
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
    name: "Primary (Ages 6-9)",
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
    name: "Upper Primary (Ages 10-12)",
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
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "Language Arts",
    description:
      "Reading, writing, grammar, and communication skills through engaging literature and creative expression.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    name: "Mathematics",
    description:
      "Problem-solving, logical reasoning, and foundational math concepts with hands-on activities.",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    name: "Science",
    description:
      "Inquiry-based learning covering life sciences, physical sciences, and environmental studies.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Social Studies",
    description:
      "History, geography, and civic responsibility to develop informed global citizens.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    name: "Visual Arts",
    description:
      "Drawing, painting, sculpture, and crafts to nurture creativity and self-expression.",
  },
  {
    icon: <Music className="w-6 h-6" />,
    name: "Music",
    description:
      "Vocal training, rhythm, and introduction to instruments fostering musical appreciation.",
  },
];

const Academics = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Our Curriculum
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Academic Excellence Through{" "}
                <span className="text-primary">Joyful Learning</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Our balanced curriculum combines rigorous academics with
                creative exploration, preparing students for success while
                nurturing their natural curiosity.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Age Groups"
              title="Programs for Every Stage"
              description="Developmentally appropriate learning experiences tailored to each age group's needs and abilities."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border/50"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {program.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Learning That Engages Mind and Heart
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We believe children learn best when they're actively engaged.
                  Our teachers use a blend of direct instruction, hands-on
                  activities, collaborative projects, and individual exploration
                  to meet diverse learning styles.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Student-Centered Learning
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Each child's unique needs and interests guide their
                        educational path.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Hands-On Discovery
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Active learning through experiments, projects, and
                        real-world applications.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Regular Assessment
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Ongoing evaluation ensures every child progresses at
                        their optimal pace.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <img
                  src={classroomImage}
                  alt="Students engaged in classroom learning"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Core Subjects"
              title="A Well-Rounded Education"
              description="Our curriculum covers all essential subjects while integrating arts, technology, and physical education."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <div className="text-primary">{subject.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {subject.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                See Our Curriculum in Action
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
                Schedule a classroom visit and observe our teachers bringing
                learning to life.
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
