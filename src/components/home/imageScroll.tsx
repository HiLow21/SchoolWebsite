import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/pages/Gallery";

const ImageScroll = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: section,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-primary">
      <div className="h-[40vh] flex items-center justify-center flex-col space-y-4 text-center">
        <h1 className="text-6xl font-bold text-white">Achievements</h1>
        <p className="font-bold text-white">
          Some glimpses of our achievements over the past few years
        </p>
      </div>

      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden flex items-center"
      >
        <div
          ref={trackRef}
          className="gsap-track flex gap-6 px-8 items-center"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[500px] h-[5clear00px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm font-semibold text-blue-400 mb-2 tracking-wider uppercase">
                    {img.category}
                  </p>
                  <h3 className="text-3xl font-bold text-white">
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
