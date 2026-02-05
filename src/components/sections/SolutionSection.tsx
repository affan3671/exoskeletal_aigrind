import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Activity, Brain, Wifi, Heart, Users } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Proactive Fall Prevention",
      desc: "Predicts & prevents falls before they happen using AI-powered analysis",
    },
    {
      icon: Activity,
      title: "24/7 Health Monitoring",
      desc: "Continuous vital signs & activity tracking for comprehensive care",
    },
    {
      icon: Brain,
      title: "AI Prediction",
      desc: "Machine learning algorithms achieve 96% accuracy in fall prediction",
    },
    {
      icon: Wifi,
      title: "Real-Time Connectivity",
      desc: "Instant alerts to caregivers via Wi-Fi and Bluetooth connectivity",
    },
    {
      icon: Heart,
      title: "Stability Support",
      desc: "Reduces injury risk through intelligent mechanical support",
    },
    {
      icon: Users,
      title: "Enhanced Independence",
      desc: "Promotes confidence & quality of life for elderly users",
    },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 section-teal-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet <span className="text-gradient">SMART EXO</span>: Your AI Guardian
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            An AI-powered smart exoskeleton designed specifically for elderly individuals prone to falls and people with weak legs and knees.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="feature-card group"
            >
              <div className="icon-container mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <blockquote className="relative p-8 md:p-10 rounded-2xl bg-primary text-primary-foreground">
            <div className="absolute top-4 left-6 text-6xl text-accent/30 font-serif">"</div>
            <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed text-center">
              By predicting and preventing falls, SMART EXO revolutionizes elderly care—providing not just physical support, but peace of mind, independence, and dignity for millions of families.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
