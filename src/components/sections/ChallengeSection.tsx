import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Bone, Brain as BrainIcon, Pill, Home, TrendingUp } from "lucide-react";

const ChallengeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const riskFactors = [
    { level: "HIGH", icon: AlertTriangle, title: "Age-Related Changes", desc: "Vision, hearing & muscle decline" },
    { level: "HIGH", icon: BrainIcon, title: "Chronic Illnesses", desc: "Arthritis, diabetes, Parkinson's" },
    { level: "MED", icon: Pill, title: "Medications", desc: "Sedatives, antidepressants" },
    { level: "MED", icon: Home, title: "Environmental Hazards", desc: "Poor lighting, slippery floors" },
  ];

  const consequences = [
    { title: "Hip Fractures", desc: "Most common serious injury" },
    { title: "Head Trauma", desc: "Life-threatening injuries" },
    { title: "Hospitalization", desc: "Extended stays & costs" },
    { title: "Loss of Mobility", desc: "Permanent disability" },
  ];

  return (
    <section id="challenge" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Silent Crisis: <span className="text-gradient">Elderly Falls</span> in India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Falls are the leading cause of injury among older adults, creating a massive healthcare burden.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { stat: "30-50%", label: "of Indian adults over 60 experience falls annually" },
            { stat: "28-35%", label: "global fall rate for seniors 65+ (rises to 40%+ for 70+)" },
            { stat: "30%", label: "fall reduction possible with preventive technology" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="feature-card text-center"
            >
              <div className="metric-highlight mb-3">{item.stat}</div>
              <p className="text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Risk factors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              Fall Risk Factors
            </h3>
            <div className="space-y-4">
              {riskFactors.map((factor, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow"
                >
                  <div className={`flex-shrink-0 ${factor.level === "HIGH" ? "badge-high" : "badge-medium"}`}>
                    {factor.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <factor.icon className="w-4 h-4 text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">{factor.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Consequences */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Bone className="w-6 h-6 text-destructive" />
              Physical Consequences
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {consequences.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-destructive/5 border border-destructive/20"
                >
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Opportunity callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-6 rounded-xl bg-accent/10 border border-accent/30"
            >
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">The Opportunity</h4>
                  <p className="text-muted-foreground text-sm">
                    Preventive technology can reduce falls by up to 30% and save billions in healthcare costs. This is where SMART EXO makes a difference.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
