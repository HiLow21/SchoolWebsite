import React from 'react'
import heroImage from "../../assets/hero-children.jpg"
import {motion} from "framer-motion"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Happy children learning and playing together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
                  Enrolling for 2025-2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
              >
                Where Every Child's{" "}
                <span className="text-accent">Potential</span> Shines
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed"
              >
                At Bright Horizons, we nurture curious minds and kind hearts in
                a safe, joyful environment. Give your child the foundation for a
                lifetime of learning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="text-base">
                  <Link to="/contact">
                    Schedule a Visit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base bg-background/10 border-background/30 text-background hover:bg-background/20"
                >
                  <Link to="/academics">Explore Programs</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection