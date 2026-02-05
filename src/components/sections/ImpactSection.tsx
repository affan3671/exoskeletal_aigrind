import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wallet, Activity, Smile, Clock, Users } from "lucide-react";

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { icon: Shield, value: "30-50%", label: "Fall Prevention Rate", desc: "Measure reduction in hospitalization" },
    { icon: Activity, value: "96%", label: "Health Monitoring Accuracy", desc: "Real-time vital signs tracking" },
    { icon: Smile, value: "High", label: "Quality of Life", desc: "User satisfaction scores and independence metrics" },
    { icon: Clock, value: "Instant", label: "Caregiver Response", desc: "Average time from alert to intervention" },
  ];

  const vision = [
    "Prevent millions of falls annually in India",
    "Save billions in healthcare costs",
    "Improve quality of life for elderly",
    "Create a scalable, affordable solution",
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Impact Measurement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We'll Know <span className="text-gradient">It Worked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Success Metrics & Vision
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="feature-card text-center"
            >
              <div className="icon-container mx-auto mb-4">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-accent mb-1">{metric.value}</div>
              <h4 className="font-semibold text-foreground mb-2">{metric.label}</h4>
              <p className="text-sm text-muted-foreground">{metric.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-primary text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              With successful implementation, SMART EXO will transform elderly care in India:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {vision.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
            "Transforming reactive healthcare into proactive wellness, one step at a time."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
