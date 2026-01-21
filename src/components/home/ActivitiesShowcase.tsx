import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Music, Trophy, Drama, Code, Leaf, ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import ecaImage from "@/assets/eca-activities.jpg";
import eventImage from "@/assets/gallery-event.jpg";
import scienceImage from "@/assets/gallery-science.jpg";
import sportsImage from "@/assets/gallery-sports.jpg";
import artImage from "@/assets/gallery-art.jpg";

const activitiesData = [
  {
    id: "arts",
    icon: Palette,
    name: "Visual Arts",
    tagline: "Express. Create. Inspire.",
    description: "From painting to sculpture, our art program nurtures creativity and self-expression in every child.",
    schedule: "Tue & Thu",
    color: "from-rose-500/20 to-orange-500/20",
    images: [artImage, classroomImage, heroImage],
  },
  {
    id: "music",
    icon: Music,
    name: "Music & Choir",
    tagline: "Find Your Voice.",
    description: "Vocal training, rhythm exploration, and instrument introduction in a supportive environment.",
    schedule: "Mon & Wed",
    color: "from-violet-500/20 to-purple-500/20",
    images: [eventImage, ecaImage, heroImage],
  },
  {
    id: "sports",
    icon: Trophy,
    name: "Sports & Athletics",
    tagline: "Play. Compete. Excel.",
    description: "Soccer, basketball, swimming, and track & field—building healthy bodies and team spirit.",
    schedule: "Daily",
    color: "from-emerald-500/20 to-teal-500/20",
    images: [sportsImage, heroImage, ecaImage],
  },
  {
    id: "drama",
    icon: Drama,
    name: "Drama & Theater",
    tagline: "The World is Your Stage.",
    description: "Acting, public speaking, and annual productions that build confidence and communication skills.",
    schedule: "Wed & Fri",
    color: "from-amber-500/20 to-yellow-500/20",
    images: [eventImage, artImage, classroomImage],
  },
  {
    id: "coding",
    icon: Code,
    name: "Coding & Robotics",
    tagline: "Build the Future.",
    description: "Programming fundamentals and robotics for the innovators of tomorrow.",
    schedule: "Tuesdays",
    color: "from-blue-500/20 to-cyan-500/20",
    images: [scienceImage, classroomImage, ecaImage],
  },
  {
    id: "nature",
    icon: Leaf,
    name: "Nature Club",
    tagline: "Explore. Discover. Protect.",
    description: "Gardening, nature walks, and environmental exploration connecting children with the natural world.",
    schedule: "Thursdays",
    color: "from-green-500/20 to-lime-500/20",
    images: [heroImage, ecaImage, sportsImage],
  },
];

const ActivitiesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeActivity = activitiesData[activeIndex];
  const Icon = activeActivity.icon;

  // Auto-rotate images within active activity
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % activeActivity.images.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, activeActivity.images.length]);

  // Reset image index when activity changes
  useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? activitiesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === activitiesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            <Play className="w-4 h-4" />
            Beyond the Classroom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Activities That <span className="text-primary">Shape</span> Character
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our extra-curricular programs develop well-rounded individuals with diverse skills and passions.
          </motion.p>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeIndex}-${imageIndex}`}
                src={activeActivity.images[imageIndex]}
                alt={activeActivity.name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeActivity.color} mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

            {/* Image indicators */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {activeActivity.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === imageIndex ? "w-8 bg-background" : "w-4 bg-background/50"
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Side - Activity Details */}
          <div className="space-y-8">
            {/* Activity Tabs */}
            <div className="flex flex-wrap gap-2">
              {activitiesData.map((activity, index) => {
                const TabIcon = activity.icon;
                return (
                  <button
                    key={activity.id}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-background border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">{activity.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Activity Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Icon and Name */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {activeActivity.name}
                    </h3>
                    <p className="text-primary font-medium italic">{activeActivity.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {activeActivity.description}
                </p>

                {/* Schedule Badge */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Schedule:</span>
                    <span className="text-sm font-semibold text-foreground">{activeActivity.schedule}</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground">Students per batch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Expert</div>
                    <div className="text-xs text-muted-foreground">Instructors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Modern</div>
                    <div className="text-xs text-muted-foreground">Facilities</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" asChild>
                <Link to="/eca">
                  Explore All Activities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesShowcase;
