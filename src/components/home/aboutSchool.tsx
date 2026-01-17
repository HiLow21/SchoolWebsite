import React from "react";
import { motion } from "framer-motion";
import classroomImage from "../../assets/classroom.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import FeatureCard from "./FeatureCard";
const AboutSchool = () => {
  const highlights = [
    "STEM-focused curriculum",
    "Art & Music programs",
    "Sports & Physical Education",
    "Character development",
    "Modern facilities",
    "After-school care",
  ];

 

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={classroomImage}
              alt="Bright classroom with engaged students"
              className="rounded-2xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
              About Our School
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A Place Where Learning Comes Alive
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Since 1995, Bright Horizons has been dedicated to providing
              exceptional education for children ages 3-12. Our experienced
              teachers, modern facilities, and child-centered approach create
              the perfect environment for growth.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" variant="secondary" asChild className="mt-6">
              <Link to="/academics">
                Learn More About Our Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <FeatureCard />
    </section>
  );
};

export default AboutSchool;
