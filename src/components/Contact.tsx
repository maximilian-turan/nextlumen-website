"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            Kontakt <span className="gradient-text">aufnehmen</span>
          </h2>

          <p className="text-lg text-foreground-tertiary max-w-2xl mx-auto">
            Bereit für Ihre KI-Transformation? Kontaktieren Sie uns für eine kostenlose Beratung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-border">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-foreground-tertiary">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder-foreground-tertiary"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder-foreground-tertiary"
                      placeholder="ihre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-foreground placeholder-foreground-tertiary resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Nachricht senden</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6 border border-border">
              <Mail className="w-6 h-6 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-1">E-Mail</h3>
              <p className="text-foreground-tertiary">hello@nextlumen.ai</p>
            </div>

            <div className="glass rounded-xl p-6 border border-border">
              <Phone className="w-6 h-6 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-1">Telefon</h3>
              <p className="text-foreground-tertiary">+49 (0) 123 456 789</p>
            </div>

            <div className="glass rounded-xl p-6 border border-border">
              <MapPin className="w-6 h-6 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-1">Adresse</h3>
              <p className="text-foreground-tertiary">München, Deutschland</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}