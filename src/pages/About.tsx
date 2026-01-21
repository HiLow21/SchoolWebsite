import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import { 
  Award, 
  Heart, 
  Lightbulb, 
  Users, 
  Target, 
  BookOpen,
  GraduationCap,
  Star,
  Quote,
  Calendar,
  TrendingUp
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const milestones = [
  { year: "1995", title: "Foundation", description: "Bright Horizons was established with just 45 students and a vision for excellence" },
  { year: "2002", title: "First Expansion", description: "Added new wing with science labs and art studios" },
  { year: "2010", title: "STEM Initiative", description: "Launched comprehensive STEM curriculum and robotics program" },
  { year: "2018", title: "Digital Learning", description: "Introduced smart classrooms and digital learning platforms" },
  { year: "2024", title: "Today", description: "Over 800 students with award-winning programs and dedicated faculty" },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We nurture empathy and kindness, teaching children to care for others and their community.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "We encourage questions, exploration, and the joy of discovering new knowledge.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building meaningful connections.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, inspiring students to reach their potential.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We teach honesty, responsibility, and the courage to do what is right.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    description: "We instill a love of learning that extends far beyond the classroom walls.",
  },
];

const aims = [
  "Develop critical thinking and problem-solving abilities",
  "Foster creativity and innovative mindset",
  "Build strong communication and leadership skills",
  "Cultivate emotional intelligence and resilience",
  "Prepare students for a rapidly changing world",
  "Inspire a commitment to community service",
];

const About = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Est. 1995
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Shaping Tomorrow's
                <span className="text-primary block mt-2">Leaders Today</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                For nearly three decades, Bright Horizons has been a beacon of educational excellence, 
                nurturing young minds and building the foundation for lifelong success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <GraduationCap className="w-16 h-16 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">Principal's Portrait</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                  From the Principal's Desk
                </span>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10" />
                  <blockquote className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed pl-8">
                    "Every child who walks through our doors carries unlimited potential. 
                    Our mission is to unlock that potential and guide them toward a future 
                    where they can make a meaningful difference in the world."
                  </blockquote>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground">Dr. Sarah Mitchell</h3>
                  <p className="text-muted-foreground">Principal & Founder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ed.D. in Educational Leadership • 25+ Years in Education
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <span className="text-2xl font-bold text-primary">25+</span>
                    <p className="text-xs text-muted-foreground mt-1">Years Leading</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <span className="text-2xl font-bold text-secondary">5000+</span>
                    <p className="text-xs text-muted-foreground mt-1">Alumni</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl">
                    <span className="text-2xl font-bold text-primary">15</span>
                    <p className="text-xs text-muted-foreground mt-1">Awards</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Journey"
              title="Three Decades of Excellence"
              description="From humble beginnings to a leading institution, our journey reflects our commitment to educational innovation."
            />

            <div className="relative mt-12">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className={`inline-block p-6 bg-background rounded-xl border border-border shadow-sm ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary-foreground" />
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Values"
              title="The Pillars of Our Philosophy"
              description="These core values guide every decision we make and every interaction we have with our students."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative p-6 bg-muted/30 rounded-xl border border-transparent hover:border-primary/20 hover:bg-background transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision & Mission */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Our Purpose</span>
                    <h2 className="text-2xl font-bold text-foreground">Vision</h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the premier institution where every child discovers their unique gifts, 
                  develops a love for learning, and grows into a compassionate, innovative leader 
                  who positively impacts their community and the world.
                </p>

                <div className="p-6 bg-background rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Shaping the Future
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We envision a generation of thinkers, creators, and changemakers who approach 
                    challenges with confidence, creativity, and compassion. Our graduates will be 
                    equipped not just with knowledge, but with the wisdom to use it responsibly.
                  </p>
                </div>
              </motion.div>

              {/* What We Aim to Teach */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Our Goals</span>
                    <h2 className="text-2xl font-bold text-foreground">What We Aim to Teach</h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond academics, we focus on developing the whole child—mind, body, and character—
                  preparing them for success in an ever-evolving world.
                </p>

                <ul className="space-y-3">
                  {aims.map((aim, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50"
                    >
                      <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-secondary">
                        {index + 1}
                      </span>
                      <span className="text-foreground text-sm">{aim}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Growing Family
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Discover how Bright Horizons can help your child reach their full potential. 
                Schedule a visit and see our values in action.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
              >
                Schedule a Campus Tour
              </a>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
