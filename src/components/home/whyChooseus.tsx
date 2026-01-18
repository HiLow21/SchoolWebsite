import React, { useEffect, useRef, useMemo } from "react";
import classroomImage from "@/assets/classroom.jpg";
import ecaImage from "@/assets/eca-activities.jpg";
import eventImage from "@/assets/gallery-event.jpg";
import scienceImage from "@/assets/gallery-science.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const whyChooseUsData = [
  {
    title: "Social Skill Enhancement",
    description:
      "We help children build confidence, communication skills, and positive relationships in a safe and supportive school environment.",
    bulletPoints: [
      "Encourages teamwork and collaboration",
      "Develops communication and leadership skills",
      "Promotes respect, empathy, and kindness",
    ],
    photo: classroomImage,
  },
  {
    title: "Physical Growth & Development",
    description:
      "Our school focuses on healthy physical development through structured activities and playful learning experiences.",
    bulletPoints: [
      "Daily physical activities and outdoor play",
      "Improves motor skills and coordination",
      "Encourages a healthy and active lifestyle",
    ],
    photo: ecaImage,
  },
  {
    title: "Excellent Academic Foundation",
    description:
      "We provide a strong academic base using engaging teaching methods that nurture curiosity and a love for learning.",
    bulletPoints: [
      "Well-structured and child-friendly curriculum",
      "Experienced and qualified teachers",
      "Focus on creativity, problem-solving, and critical thinking",
    ],
    photo: eventImage,
  },
  {
    title: "Friendly & Caring Staff",
    description:
      "Our dedicated staff ensures every child feels safe, valued, and encouraged throughout their learning journey.",
    bulletPoints: [
      "Supportive and approachable teachers",
      "Individual attention for every child",
      "Safe, warm, and welcoming school environment",
    ],
    photo: scienceImage,
  },
];

const WhyChooseus = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const lenis = useMemo(() => {
    if (lenisRef.current) return lenisRef.current;

    const newLenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = newLenis;
    return newLenis;
  }, []);

  useEffect(() => {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".why-slide");
      if (slides.length === 0) return;

      gsap.set(slides, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: " top",
          end: () => `+=${slides.length * 120}`,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      slides.forEach((slide, index) => {
        const slideDuration = 1;
        const slideHoldDuration = 5;
        const slideExitDuration = 1;
        const totalSlideDuration =
          slideDuration + slideHoldDuration + slideExitDuration;

        // Fade in
        tl.to(
          slide,
          {
            opacity: 1,
            duration: slideDuration,
          },
          index * totalSlideDuration,
        );

        // Hold
        tl.to(
          slide,
          {
            opacity: 1,
            duration: slideHoldDuration,
          },
          index * totalSlideDuration + slideDuration,
        );

        // Fade out
        tl.to(
          slide,
          {
            opacity: 0,
            duration: slideExitDuration,
          },
          index * totalSlideDuration + slideDuration + slideHoldDuration,
        );
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [lenis]);

  return (
    <div className="">
      <div className="text-center my-16">
        <span className="text-6xl font-bold text-primary ">Why choose us?</span>
      </div>

      <section
        className="h-screen flex items-center justify-center overflow-hidden"
        ref={sectionRef}
      >
        <div
          className="container mx-auto px-4 sm:px-6 relative w-full h-full"
          ref={containerRef}
        >
          {whyChooseUsData.map((data, index) => (
            <div
              key={`why-slide-${index}`}
              className="why-slide absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 items-center justify-items-center w-full h-full"
            >
              <div className="w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={data.photo}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
                    {data.title}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {data.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {data.bulletPoints.map((point, idx) => (
                    <div
                      key={`point-${idx}`}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseus;
