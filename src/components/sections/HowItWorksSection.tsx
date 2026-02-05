import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Radar, BrainCircuit, Target, Zap, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "1",
      icon: Radar,
      title: "Sense",
      desc: "Multiple sensors continuously monitor user's movement patterns, vital signs, and environmental conditions in real-time.",
    },
    {
      num: "2",
      icon: BrainCircuit,
      title: "Analyze",
      desc: "AI algorithms process data to detect anomalies, learn individual patterns, and identify early warning signs of potential falls.",
    },
    {
      num: "3",
      icon: Target,
      title: "Predict",
      desc: "System predicts fall risk before it happens, allowing for proactive intervention rather than reactive response.",
    },
    {
      num: "4",
      icon: Zap,
      title: "Prevent",
      desc: "Takes proactive action: servo motors assist movement, alerts notify caregivers, and stability support activates.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Core Innovation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient">SMART EXO</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From Reactive to Predictive Care
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
              className="relative"
            >
              <div className="feature-card h-full">
                <div className="step-indicator mb-5">{step.num}</div>
                <div className="flex items-center gap-2 mb-3">
                  <step.icon className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Difference highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center p-8 rounded-2xl bg-card border border-border/50 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The SMART EXO Difference</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike traditional fall detection systems that respond <span className="font-semibold text-destructive">AFTER</span> a fall, SMART EXO predicts and prevents falls <span className="font-semibold text-accent">BEFORE</span> they happen—shifting from reactive emergency response to proactive healthcare.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-6xl md:text-7xl font-extrabold text-accent mb-2">96%</div>
              <p className="text-muted-foreground text-sm">
                Our AI models achieve industry-leading accuracy in fall prediction, validated through extensive testing and research.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
