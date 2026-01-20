import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeader from "@/components/ui/SectionHeader";

import heroImage from "@/assets/hero-children.jpg";
import classroomImage from "@/assets/classroom.jpg";
import ecaImage from "@/assets/eca-activities.jpg";
import eventImage from "@/assets/gallery-event.jpg";
import scienceImage from "@/assets/gallery-science.jpg";
import sportsImage from "@/assets/gallery-sports.jpg";
import artImage from "@/assets/gallery-art.jpg";

const categories = ["All", "Campus", "Classroom", "Events", "Activities"];

export const galleryImages = [
  {
    src: heroImage,
    alt: "Children reading and playing outdoors",
    category: "Campus",
    title: "Outdoor Learning",
  },
  {
    src: classroomImage,
    alt: "Bright classroom with students",
    category: "Classroom",
    title: "Our Classrooms",
  },
  {
    src: eventImage,
    alt: "School event performance",
    category: "Events",
    title: "Annual Day Celebration",
  },
  {
    src: scienceImage,
    alt: "Science experiments in lab",
    category: "Classroom",
    title: "Science Lab",
  },
  {
    src: sportsImage,
    alt: "Sports day races",
    category: "Events",
    title: "Sports Day",
  },
  {
    src: artImage,
    alt: "Art class creativity",
    category: "Activities",
    title: "Art & Creativity",
  },
  {
    src: ecaImage,
    alt: "Extra-curricular activities",
    category: "Activities",
    title: "After-School Fun",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <PageTransition>
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-accent/30 via-background to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  <Camera className="w-4 h-4" />
                  School Moments
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Our <span className="text-primary">Gallery</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Take a peek into daily life at Bright Horizons—learning,
                playing, creating, and growing together.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-md aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs font-medium text-background/80 bg-background/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          {image.category}
                        </span>
                        <h3 className="text-lg font-semibold text-background mt-2">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
              />
              <div className="absolute bottom-8 text-center">
                <h3 className="text-xl font-semibold text-background">
                  {selectedImage.title}
                </h3>
                <span className="text-sm text-background/70">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <SectionHeader
              badge="Follow Us"
              title="More Moments on Social Media"
              description="Stay connected with daily updates, photos, and school news on our social media channels."
            />
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow text-foreground font-medium"
              >
                Facebook
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow text-foreground font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Gallery;