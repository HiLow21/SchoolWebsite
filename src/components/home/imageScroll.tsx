import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/pages/Gallery";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // Kill any existing ScrollTrigger instances to prevent conflicts
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === section) {
        trigger.kill();
      }
    });

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "-=30 top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          markers: false,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="bg-primary">
      <div className="py-16 md:py-20 flex items-center justify-center flex-col space-y-4 text-center px-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
          Achievements & Moments
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Some glimpses of our achievements over the past few years
        </p>
      </div>

      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden flex items-center bg-primary"
      >
        <div
          ref={trackRef}
          className="flex gap-8 px-8 items-center will-change-transform"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={`${img.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[450px] sm:w-[500px] h-[500px] sm:h-[600px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs sm:text-sm font-semibold text-secondary mb-2 tracking-wider uppercase">
                    {img.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-background leading-tight">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageScroll;
