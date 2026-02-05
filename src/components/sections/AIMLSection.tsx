import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Fingerprint, AlertCircle, LineChart, RefreshCw, BookOpen } from "lucide-react";

const AIMLSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mlSteps = [
    { num: "1", icon: Database, title: "Data Collection", desc: "Continuously gathers movement patterns, gait data, vital signs, and environmental factors from all sensors." },
    { num: "2", icon: Fingerprint, title: "Pattern Recognition", desc: "Identifies individual user's normal movement patterns, walking style, and baseline health metrics." },
    { num: "3", icon: AlertCircle, title: "Anomaly Detection", desc: "Detects deviations from normal patterns that may indicate increased fall risk or health issues." },
    { num: "4", icon: LineChart, title: "Predictive Analysis", desc: "Uses trained models to predict fall probability before it happens, enabling proactive intervention." },
  ];

  const metrics = [
    { label: "Fall Prediction Accuracy", value: "80-96%" },
    { label: "Sensitivity (True Positive)", value: "85-93%" },
    { label: "Specificity (True Negative)", value: "80-91%" },
  ];

  return (
    <section className="py-20 lg:py-28 section-navy" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Predictive Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI & <span className="text-gradient">Machine Learning</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Learning, Adapting, Protecting
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ML Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">How ML Algorithms Work</h3>
            <div className="space-y-4">
              {mlSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold">
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="w-4 h-4 text-accent" />
                      <h4 className="font-semibold text-white">{step.title}</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Performance metrics */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-white/70">{metric.label}</span>
                    <span className="text-xl font-bold text-accent">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous learning */}
            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Personalized models adapt to each user's unique patterns</li>
                    <li>• Improves over time with more data and usage</li>
                    <li>• Detects gradual changes in mobility and health</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research backed */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Research-Backed</h4>
                  <p className="text-white/60 text-sm">
                    Recent studies show ML-based fall prediction models achieve 80-96% accuracy, significantly outperforming traditional risk assessment tools.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSection;
