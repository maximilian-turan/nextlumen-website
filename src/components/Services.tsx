"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Cog, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "KI-Beratung",
    description: "Strategische KI-Beratung und Implementierung maßgeschneiderter Lösungen für Ihr Unternehmen."
  },
  {
    icon: Bot,
    title: "KI-Agenten",
    description: "Intelligente KI-Agenten für automatisierte Prozesse und verbesserte Effizienz."
  },
  {
    icon: Cog,
    title: "Automatisierung",
    description: "Vollständige Automatisierung von Routineaufgaben und komplexen Workflows."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Unsere <span className="gradient-text">Leistungen</span>
          </h2>

          <p className="text-lg text-foreground-tertiary max-w-2xl mx-auto">
            Von der Strategie bis zur Implementierung - wir begleiten Sie auf dem Weg zur KI-Transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 glass rounded-xl border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-foreground-tertiary mb-6">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 glass border border-border hover:border-accent/50 text-foreground font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}