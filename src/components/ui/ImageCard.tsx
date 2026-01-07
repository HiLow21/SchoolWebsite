import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  delay?: number;
}

const ImageCard = ({ src, alt, title, description, delay = 0 }: ImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {(title || description) && (
        <div className="p-5">
          {title && <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
    </motion.div>
  );
};

export default ImageCard;
