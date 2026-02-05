import { Github, Globe, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">SE</span>
              </div>
              <span className="font-bold text-lg">SMART EXO</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              AI-Powered Smart Exoskeleton for Elderly Fall Prevention by Team Hamdard Tech-Nexus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "The Challenge", href: "#challenge" },
                { label: "Our Solution", href: "#solution" },
                { label: "Technology", href: "#technology" },
                { label: "Meet the Team", href: "#team" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://mdfarhanahmad211.github.io/Smart-exo-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Project Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MDFARHANAHMAD211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:gmazizi.del@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  gmazizi.del@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2026 SMART EXO by Hamdard Tech-Nexus. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-primary-foreground/50 text-sm">
              Made with <Heart className="w-4 h-4 text-destructive" /> for Delhi AI Grind 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
