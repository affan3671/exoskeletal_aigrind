import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Globe, MapPin } from "lucide-react";

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    { name: "MD Farhan Ahmad", class: "Class 9E", email: "farhanahmadayan2021@gmail.com" },
    { name: "Affan Ali", class: "Class 9C", email: "affanali3671@gmail.com", },
    { name: "Mohd Hamza Khan", class: "Class 8B", email: "rizwan4676@gmail.com" },
    { name: "Sidrah Wali", class: "Class 9E", email: "alamwali02@gmail.com" },
    { name: "Jasmine Ahmed", class: "Class 9E", email: "ahmedjasmine1410@gmail.com" },
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Future of Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Team <span className="text-gradient">Hamdard Tech-Nexus</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI-Powered Smart Exoskeleton Revolutionizing Healthcare Through Predictive Technology
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="team-card"
            >
              <div className="p-5 text-center">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{member.class}</p>
                <div className="space-y-2 text-xs">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors justify-center"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[140px]">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors justify-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact & Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-lg">
            <h3 className="text-xl font-bold text-foreground text-center mb-6">Contact Us</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Links */}
              <div className="space-y-4">
                <a
                  href="https://smartexoskeleton.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors group"
                >
                  <Globe className="w-5 h-5 text-accent" />
                  <div>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Website</span>
                    <p className="text-xs text-muted-foreground truncate">https://smartexoskeleton.netlify.app/</p>
                  </div>
                </a>
                <a
                  href="https://github.com/MDFARHANAHMAD211 & https://github.com/affan3671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors group"
                >
                  <Github className="w-5 h-5 text-accent" />
                  <div>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">GitHub</span>
                    <p className="text-xs text-muted-foreground">MDFARHANAHMAD211 & affan3671</p>
                  </div>
                </a>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href="mailto:gmazizi.del@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Email</span>
                    <p className="text-xs text-muted-foreground">gmazizi.del@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <span className="text-sm font-medium text-foreground">Location</span>
                    <p className="text-xs text-muted-foreground">Hamdard Public School, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thanks note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Special Thanks to <span className="font-semibold text-foreground">Delhi AI Grind 2026</span> for this incredible opportunity
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Contact us to learn more about partnership opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
