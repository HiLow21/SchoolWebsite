import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Images } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Visit our school for a tour or contact us for more information about
            our programs and enrollment process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/eca">
                <Images className="mr-2 w-5 h-5" />
                View Gallery
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;