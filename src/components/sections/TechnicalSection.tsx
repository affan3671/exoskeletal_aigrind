import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Wifi, Heart, Move, Gauge, MapPin, Thermometer, Battery, Radio, Cloud } from "lucide-react";
import arduinoImg from "@/assets/arduino.jpg";
import esp32Img from "@/assets/esp32.jpg";

const TechnicalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sensors = [
    { icon: Heart, name: "MAX30102", desc: "Heart Rate & SpO2" },
    { icon: Move, name: "MPU6050", desc: "Motion & Position" },
    { icon: Gauge, name: "ADXL345", desc: "Accelerometer" },
    { icon: Radio, name: "Ultrasonic", desc: "Object Detection" },
    { icon: Thermometer, name: "Thermometer", desc: "Body Temperature" },
    { icon: MapPin, name: "GPS Module", desc: "Location Tracking" },
  ];

  const dataFlow = [
    { num: "1", title: "Sensors Collect", desc: "Multi-modal sensor array captures movement, vitals & environment" },
    { num: "2", title: "Arduino Processes", desc: "Real-time data processing and initial analysis" },
    { num: "3", title: "ESP32 Transmits", desc: "Wireless transmission via Wi-Fi/Bluetooth" },
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Technical Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The Brain & Connectivity Hub
          </p>
        </motion.div>

        {/* Main controllers */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Arduino Nano */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="feature-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={arduinoImg} alt="Arduino Nano" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">Arduino Nano</h3>
                </div>
                <p className="text-sm text-muted-foreground">Main Logic Controller</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Located in the belt structure, serves as the central brain processing sensor data and coordinating all system responses in real-time.
            </p>
          </motion.div>

          {/* ESP32 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="feature-card"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={esp32Img} alt="ESP32 Module" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Wifi className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">ESP32 Module</h3>
                </div>
                <p className="text-sm text-muted-foreground">Wi-Fi & Bluetooth Connectivity</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Enables seamless wireless communication, transmitting live health data, fall alerts, and location information to caregivers.
            </p>
          </motion.div>
        </div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Data Flow</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dataFlow.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-xl bg-card border border-border/50 text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sensor Array */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Comprehensive Sensor Array</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sensors.map((sensor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border/50 text-center hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <sensor.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{sensor.name}</h4>
                <p className="text-xs text-muted-foreground">{sensor.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Server note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 rounded-xl bg-accent/5 border border-accent/20">
            <Cloud className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Use of AI</h4>
              <p className="text-muted-foreground text-sm">
                An AI server receives cloud-connected data through ESP-32 and applies advanced algorithms for highly accurate reporting and fall prediction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSection;
