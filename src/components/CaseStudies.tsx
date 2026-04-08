"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle, Star, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Logistik-Automatisierung",
    description: "KI-gestützte Routenoptimierung und Bestandsverwaltung für ein Logistik-Unternehmen.",
    result: "45% schnellere Lieferzeiten"
  },
  {
    title: "KI-Chatbot",
    description: "Intelligenter Kundenservice-Bot für 24/7 Support und automatische Ticket-Bearbeitung.",
    result: "70% weniger Support-Anfragen"
  },
  {
    title: "E-Commerce Analytics",
    description: "Predictive Analytics für Nachfrageprognose und personalisierte Empfehlungen.",
    result: "30% höhere Conversion-Rate"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
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
            Erfolgreiche <span className="gradient-text">Projekte</span>
          </h2>

          <p className="text-lg text-foreground-tertiary max-w-2xl mx-auto">
            Entdecken Sie, wie wir Unternehmen mit KI-Lösungen zum Erfolg führen.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
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
              <div className="p-8 glass rounded-xl border border-border hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {study.title}
                </h3>

                <p className="text-foreground-tertiary mb-4">
                  {study.description}
                </p>

                <div className="text-accent font-semibold">
                  {study.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}