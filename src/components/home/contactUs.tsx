import React from 'react'
import {motion} from "framer-motion"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className="h-fit flex items-center justify-center flex-col space-y-4 mt-10">
          <div className="container mx-auto px-4 text-center h-[40vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto "
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Contact us
              </h2>
              <p className="text-black text-lg mb-8">
                Visit our school to for a tour or contact us for more
                information about our programs and enrollment process.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="bg-background text-foreground hover:bg-primary/90 text-black hover:text-white"
                >
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-school-lavender bg-primary text-white"
                >
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
  )
}

export default ContactUs