import { motion } from "framer-motion";
import { BookOpen, Heart, Shield, Users } from "lucide-react";
import { ReactNode } from "react";
import SectionHeader from "../ui/SectionHeader";


const FeatureCard = () => {
  const values = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Nurturing Environment",
      description:
        "We create a warm, supportive atmosphere where every child feels valued, safe, and encouraged to explore.",
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Excellence in Learning",
      description:
        "Our curriculum blends academic rigor with creative discovery, fostering a lifelong love of learning.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Strong Community",
      description:
        "Parents, teachers, and students work together as partners in every child's educational journey.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Safety First",
      description:
        "Comprehensive safety protocols and trained staff ensure your child's wellbeing is always our priority.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Values"
          title="Why Parents Choose Us"
          description="We believe every child deserves an education that nurtures their unique gifts while building a strong foundation for the future."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5,delay:0.5}}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <div className="text-primary">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
