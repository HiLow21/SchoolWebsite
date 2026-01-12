import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/pages/Gallery";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

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
          pin: true,
          scrub: 1,
          start: "-=50 top",
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-primary min-h-screen">
      <div className="h-screen flex items-center justify-center flex-col space-y-4">
        <h1 className="text-6xl font-bold text-white">Achievements</h1>
        <p className="font-bold text-white">Some glimpses of our achievements over the past few years</p>
      </div>

      <section 
        ref={sectionRef} 
        className="relative h-screen flex items-center overflow-hidden"
      >
        <div 
          ref={trackRef}
          className="gsap-track flex gap-8 px-8"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[500px] h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
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

  
      <div className="h-fit flex items-center justify-center flex-col space-y-4">
       <div className="container mx-auto px-4 text-center h-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto "
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Contact us
              </h2>
              <p className="text-white text-lg mb-8">
               Visit our school to for a tour or contact us for more information about our programs and enrollment process.
              </p>
             
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-school-lavender bg-white text-black"
                >
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default ImageScroll;