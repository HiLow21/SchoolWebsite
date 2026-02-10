import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Bright Horizons</span>
                <span className="text-xs opacity-70">Primary School</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds since 1995. We provide a safe, caring environment 
              where every child can thrive academically, socially, and emotionally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Academics", path: "/academics" },
                { name: "Activities", path: "/eca" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70 flex-shrink-0" />
                <span className="opacity-80">123 Education Lane, Learning City, LC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 opacity-70" />
                <span className="opacity-80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 opacity-70" />
                <span className="opacity-80">info@brighthorizons.edu</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">School Hours</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Monday - Friday: 8:00 AM - 3:30 PM</li>
              <li>Office: 7:30 AM - 4:30 PM</li>
              <li>Saturday - Sunday: Closed</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Bright Horizons Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
