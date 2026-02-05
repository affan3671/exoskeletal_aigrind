import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Home, Wallet, Target, Check } from "lucide-react";

const MarketSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const opportunities = [
    { icon: Users, value: "104M", label: "Elderly", desc: "India has 104 million elderly (60+ years), growing rapidly" },
    { icon: Home, value: "46%", label: "Home Care", desc: "Prefer aging-in-place, creating demand for home monitoring" },
    { icon: Wallet, value: "30%+", label: "Cost Savings", desc: "Fall-related injuries cost billions; prevention saves significantly" },
  ];

  const demographics = [
    { group: "Elderly (65+)", detail: "30-50% annual fall rate" },
    { group: "Mobility Impaired", detail: "Weak legs, knee problems" },
    { group: "Post-Surgery", detail: "Rehabilitation support" },
    { group: "Chronic Conditions", detail: "Parkinson's, arthritis" },
  ];

  const advantages = [
    "Predictive vs. reactive approach",
    "Affordable vs. expensive alternatives",
    "Comprehensive health monitoring",
    "Designed for Indian market",
  ];

  return (
    <section id="market" className="py-20 lg:py-28 section-teal-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Commercial Potential
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Massive <span className="text-gradient">Market Opportunity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Global Medical Exoskeleton Market Growth
          </p>
        </motion.div>

        {/* India opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">India-Specific Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="feature-card text-center"
              >
                <div className="icon-container mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="metric-highlight mb-1">{item.value}</div>
                <div className="font-semibold text-foreground mb-2">{item.label}</div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Target demographics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Target Demographics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {demographics.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-1">{item.group}</h4>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Competitive advantage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Competitive Advantage</h3>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50">
              <ul className="space-y-4">
                {advantages.map((adv, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
