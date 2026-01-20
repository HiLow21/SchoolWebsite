import Counter from '@/utlis/counter';
import React, { useRef } from 'react'
import {motion} from "framer-motion"

const StatSection = () => {
      const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      value: (
        <>
          <Counter from={0} to={30} />+
        </>
      ),
      label: "Years of Excellence",
    },
    {
      value: (
        <>
          <Counter from={0} to={500} />+
        </>
      ),
      label: "Happy Students",
    },
    {
      value: (
        <>
          <Counter from={0} to={1} />:<Counter from={0} to={15} />
        </>
      ),
      label: "Teacher Ratio",
    },
    {
      value: (
        <>
          <Counter from={0} to={98} />%
        </>
      ),
      label: "Parent Satisfaction",
    },
  ];
  return (
   <section className="py-12 bg-primary" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default StatSection