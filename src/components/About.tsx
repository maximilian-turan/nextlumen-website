"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, Quote } from "lucide-react";

const stats = [
  { label: "KI-Projekte", value: "50+", icon: Target },
  { label: "Jahre Erfahrung", value: "8+", icon: Award },
  { label: "Kunden zufrieden", value: "98%", icon: TrendingUp },
  { label: "Team-Mitglieder", value: "12", icon: Users }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            Über <span className="gradient-text">uns</span>
          </h2>

          <p className="text-lg text-foreground-tertiary max-w-2xl mx-auto">
            Wir sind KI-Experten mit langjähriger Erfahrung in der Entwicklung und Implementierung von KI-Lösungen für Unternehmen.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-foreground-tertiary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}