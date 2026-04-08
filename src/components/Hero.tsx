"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-accent/5" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-background text-sm font-bold">AI</span>
              </div>
            </motion.div>
            <h1 className="text-2xl font-display font-bold gradient-text">
              NextLumen
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6"
          >
            KI für Ihr <span className="gradient-text">Unternehmen</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-foreground-tertiary max-w-2xl mx-auto mb-12"
          >
            Professionelle KI-Beratung und Automatisierungslösungen für moderne Unternehmen.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-primary hover:bg-primary-hover text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Kostenlos beraten lassen
            </button>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div>
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-foreground-tertiary">Projekte</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">8+</div>
              <div className="text-sm text-foreground-tertiary">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm text-foreground-tertiary">Zufriedenheit</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}