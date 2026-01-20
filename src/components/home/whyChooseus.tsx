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
  const overviewRef = useRef<HTMLDivElement>(null);
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
    const overview = overviewRef.current;

    if (!section || !container || !overview) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".overview-card");
      const detailSlides = gsap.utils.toArray<HTMLElement>(".detail-slide");
      
      if (cards.length === 0 || detailSlides.length === 0) return;

      const overviewDuration = 1; // Duration to show overview
      const zoomOutDuration = 1; // Duration to zoom out from overview
      const detailDuration = 4; // Duration per detail slide
      const transitionDuration = 1; // Duration between detail slides
      const finalZoomBackDuration = 1; // Duration to zoom back to overview at end
      
      const totalDuration = 
        overviewDuration + 
        zoomOutDuration + 
        (detailSlides.length * (detailDuration + transitionDuration)) +
        finalZoomBackDuration;

      gsap.set(overview, { opacity: 1, scale: 1 });
      gsap.set(cards, { opacity: 1, scale: 1 });
      gsap.set(detailSlides, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "-=30 top",
          end: () => `+=${totalDuration * 100}vh`,
          scrub: 3,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      let currentTime = 0;

      tl.to(overview, {
        opacity: 1,
        duration: overviewDuration,
      }, currentTime);

      currentTime += overviewDuration;

      detailSlides.forEach((slide, index) => {
        const cardIndex = index;

        // Fade out other cards and zoom in on current
        tl.to(
          cards.filter((_, i) => i !== cardIndex),
          {
            opacity: 0.2,
            scale: 0.8,
            duration: transitionDuration,
          },
          currentTime
        );

        tl.to(
          cards[cardIndex],
          {
            scale: 1.1,
            duration: transitionDuration,
          },
          currentTime
        );

        // Fade out overview, show detail
        tl.to(
          overview,
          {
            opacity: 0,
            duration: transitionDuration,
          },
          currentTime
        );

        tl.to(
          slide,
          {
            opacity: 1,
            scale: 1,
            duration: transitionDuration,
          },
          currentTime
        );

        currentTime += transitionDuration;

        // Hold on detail slide
        tl.to(
          slide,
          {
            opacity: 1,
            duration: detailDuration,
          },
          currentTime
        );

        currentTime += detailDuration;

        if (index < detailSlides.length - 1) {
          // Fade out current detail, zoom back to overview briefly
          tl.to(
            slide,
            {
              opacity: 0,
              scale: 0.8,
              duration: transitionDuration * 0.5,
            },
            currentTime
          );


          // Reset all cards for next zoom
          tl.to(
            cards,
            {
              opacity: 1,
              scale: 1,
              duration: transitionDuration * 0.5,
            },
            currentTime
          );

          currentTime += transitionDuration * 0.5;
        } else {
          // Final slide - zoom back to full overview at the end
          tl.to(
            slide,
            {
              opacity: 0,
              scale: 0.8,
              duration: finalZoomBackDuration,
            },
            currentTime
          );

          tl.to(
            overview,
            {
              opacity: 1,
              duration: finalZoomBackDuration,
            },
            currentTime
          );

          tl.to(
            cards,
            {
              opacity: 1,
              scale: 1,
              duration: finalZoomBackDuration,
            },
            currentTime
          );
        }
      });

    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [lenis]);

  return (
    <div className="bg-muted/30">
      <div className="container mx-auto px-4 pt-20 md:pt-28 pb-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
          Our Difference
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Choose Bright Horizons?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover what makes our school the perfect place for your child's growth and development.
        </p>
      </div>

      <section
        className="h-screen flex items-center justify-center overflow-hidden bg-muted/30"
        ref={sectionRef}
      >
        <div
          className="container mx-auto px-4 sm:px-6 relative w-full h-full"
          ref={containerRef}
        >
          
          <div
            ref={overviewRef}
            className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 items-center"
          >
            {whyChooseUsData.map((data, index) => (
              <div
                key={`overview-${index}`}
                className="overview-card bg-card rounded-xl shadow-lg overflow-hidden  hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-32 sm:h-40 overflow-hidden">
                  <img
                    src={data.photo}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {data.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {whyChooseUsData.map((data, index) => (
            <div
              key={`detail-${index}`}
              className="detail-slide absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 items-center justify-items-center w-full h-full"
            >
              <div className="w-full h-[300px] sm:h-[450px] overflow-hidden rounded-xl ">
                <img
                  src={data.photo}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl sm:text-6xl font-bold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      {data.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {data.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {data.bulletPoints.map((point, idx) => (
                    <div
                      key={`point-${idx}`}
                      className="flex gap-3 items-start bg-primary/5 p-3 rounded-lg"
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