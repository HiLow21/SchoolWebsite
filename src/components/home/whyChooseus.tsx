import React, { useEffect, useRef, useMemo } from "react";
import classroomImage from "@/assets/classroom.jpg";
import ecaImage from "@/assets/eca-activities.jpg";
import eventImage from "@/assets/gallery-event.jpg";
import scienceImage from "@/assets/gallery-science.jpg";
import sportsImage from "@/assets/gallery-sports.jpg";
import artImage from "@/assets/gallery-art.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";

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
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const lenis = useMemo(
    () =>
      new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }),
    []
  );

  const isInView = useInView(sectionRef);

  useEffect(() => {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!isInView || !section || !container) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".why-slide");
      if (slides.length === 0) return;

      gsap.set(slides, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin:true,
          start: "-=30 top",
          end: ()=>`+=${slides.length * 100}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((slide, index) => {
        const slideDuration = 0.2;
        const slideHoldDuration = 1;
        const slideExitDuration = 1;

        tl.to(
          slide,
          {
            opacity: 1,
            duration: slideDuration,
          },
          index * 3
        );

        tl.to(
          slide,
          {
            opacity: 1,
            duration: slideHoldDuration,
          },
          index * 3 + slideDuration
        );

        tl.to(
          slide,
          {
            opacity: 0,
            duration: slideExitDuration,
          },
          index * 3 + slideDuration + slideHoldDuration
        );
      });
    }, section);

    return () => ctx.revert();
  }, [isInView, lenis]);

  return (
    <section
      className="h-screen flex items-center justify-center overflow-hidden mb-2 overflow-x-hidden"
      ref={sectionRef}
    >
      <div
        className="container mx-auto px-4 relative w-full h-full"
        ref={containerRef}
      >
        {whyChooseUsData.map((data, index) => (
          <div
            key={index}
            className="why-slide absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-5 p-10 items-center w-full h-full"
          >
            <div className="h-[400px] w-full overflow-hidden rounded-lg">
              <img src={data.photo} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-4xl font-black mb-4 fix-title">
                  {data.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {data.description}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {data.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
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
  );
};

export default WhyChooseus;
