"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Share2, MessageSquare, Code2 } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "KI-Beratung", href: "#services" },
    { name: "KI-Agenten", href: "#services" },
    { name: "Automatisierung", href: "#services" },
    { name: "System-Entwicklung", href: "#services" }
  ],
  company: [
    { name: "Über uns", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Karriere", href: "#" },
    { name: "Blog", href: "#" }
  ],
  legal: [
    { name: "Impressum", href: "#" },
    { name: "Datenschutz", href: "#" },
    { name: "AGB", href: "#" },
    { name: "Kontakt", href: "#contact" }
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: Share2, href: "#" },
  { name: "Twitter", icon: MessageSquare, href: "#" },
  { name: "Code", icon: Code2, href: "#" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-6">
                <div className="text-2xl font-display font-bold gradient-text">
                  NextLumen
                </div>
              </Link>

              <p className="text-foreground-tertiary mb-6 max-w-md">
                Wir transformieren Unternehmen durch KI. Von der Strategie bis zur
                Implementierung - wir machen KI zugänglich und wirkungsvoll.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground-tertiary">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">hello@nextlumen.ai</span>
                </div>
                <div className="flex items-center gap-3 text-foreground-tertiary">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-foreground-tertiary">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">München, Deutschland</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-tertiary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-tertiary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-tertiary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-foreground-tertiary hover:text-accent transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-foreground-tertiary text-sm"
            >
              © 2024 NextLumen. Alle Rechte vorbehalten.
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground-tertiary hover:text-accent transition-colors duration-300 text-sm group"
            >
              <span>Nach oben</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}