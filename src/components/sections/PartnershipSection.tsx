import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Coins, Handshake, Users, Lightbulb, Network, FileCheck, Building } from "lucide-react";

const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const needs = [
    {
      icon: FlaskConical,
      title: "Research Support",
      desc: "Access to advanced AI/ML research facilities and mentorship from industry experts to enhance our predictive algorithms.",
      items: ["ML model optimization", "Algorithm validation", "Research collaboration"],
    },
    {
      icon: Coins,
      title: "Funding & Resources",
      desc: "Seed funding for prototype development, clinical trials, and initial market entry in the eldercare sector.",
      items: ["Prototype refinement", "Clinical testing", "Market launch"],
    },
    {
      icon: Handshake,
      title: "Industry Connections",
      desc: "Partnerships with healthcare providers and medical device manufacturers for pilot testing and commercialization.",
      items: ["Hospital partnerships", "Manufacturing support", "Distribution networks"],
    },
  ];

  const mentorship = [
    { icon: Lightbulb, title: "Business Strategy", desc: "Go-to-market planning" },
    { icon: FileCheck, title: "Regulatory Guidance", desc: "Medical device approval" },
    { icon: Building, title: "Technical Advisory", desc: "Engineering expertise" },
    { icon: Network, title: "Network Access", desc: "Industry connections" },
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
            Partnership Opportunity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Help Do We Need
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From Delhi AI Grind
          </p>
        </motion.div>

        {/* Main needs */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {needs.map((need, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <need.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{need.title}</h3>
              <p className="text-white/60 text-sm mb-4">{need.desc}</p>
              <ul className="space-y-2">
                {need.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mentorship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Mentorship & Guidance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mentorship.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <item.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision with Delhi AI Grind's Support</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Transform SMART EXO from a prototype into a market-ready solution that prevents millions of falls, saves billions in healthcare costs, and improves quality of life for elderly across India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
