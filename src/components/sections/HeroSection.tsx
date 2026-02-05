import { motion } from "framer-motion";
import { ArrowDown, Shield, Activity, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen section-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-accent font-semibold text-sm">HPS Delhi AI Grind 2026</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/80 text-sm">Health & Well-being Innovation</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Hamdard Tech Nexus Presents
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            <span className="text-gradient">SMART EXO</span>
            <br />
            <span className="text-white/90">AI-Powered Smart</span>
            <br />
            <span className="text-white/90">Exoskeleton</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Revolutionizing Elderly Care Through Predictive Fall Prevention & Real-Time Health Monitoring
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { icon: Shield, label: "Fall Prevention" },
              { icon: Activity, label: "Health Monitoring" },
              { icon: Brain, label: "AI-Powered" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <item.icon className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#solution"
              className="btn-primary text-base"
            >
              Discover SMART EXO
            </a>
            <a
              href="#challenge"
              className="btn-outline text-white border-white/30 hover:bg-white hover:text-primary"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: "96%", label: "AI Accuracy" },
            { value: "30-50%", label: "Fall Reduction" },
            { value: "104M", label: "Elderly in India" },
            { value: "24/7", label: "Health Monitoring" },
          ].map((stat, index) => (
            <div key={index} className="stat-card text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#challenge" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors">
            <span className="text-xs mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
