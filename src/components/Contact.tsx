import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle, {
  type StyledSegment,
} from "./animations/WordsPullUpMultiStyle";

const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_SEGMENTS: StyledSegment[] = [
  { text: "Lassen Sie uns etwas", className: "font-normal" },
  { text: "wirklich Intelligentes bauen.", className: "italic font-serif" },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your CRM / form endpoint (e.g. a Vercel Function).
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-2xl bg-[#101010] px-6 py-20 text-center md:rounded-[2rem] md:px-12 md:py-28">
        {/* Subtle grain for depth */}
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />

        <div className="relative flex flex-col items-center">
          <span className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
            Anfragen
          </span>

          <h2
            className="max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
          </h2>

          <motion.p
            className="mt-8 max-w-xl text-sm leading-relaxed text-primary/70 md:text-base"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            Sagen Sie uns, wo KI für Ihr Team den entscheidenden Unterschied
            machen könnte. Wir antworten innerhalb von zwei Werktagen mit einem
            konkreten ersten Schritt.
          </motion.p>

          <motion.div
            className="mt-10 w-full max-w-md"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          >
            {submitted ? (
              <p
                className="rounded-full bg-primary/10 px-6 py-4 text-sm font-medium"
                style={{ color: "#E1E0CC" }}
              >
                Danke – wir melden uns in Kürze.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="group flex items-center gap-2 rounded-full bg-black/60 p-1.5 pl-5 ring-1 ring-white/10 transition-colors focus-within:ring-primary/40"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sie@unternehmen.de"
                  aria-label="E-Mail-Adresse"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500 sm:text-base"
                  style={{ color: "#E1E0CC" }}
                />
                <button
                  type="submit"
                  aria-label="Absenden"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black transition-transform duration-300 hover:scale-110"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-gray-500">
              Lieber per E-Mail?{" "}
              <a
                href="mailto:hello@nextlumen.ai"
                className="text-primary/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                hello@nextlumen.ai
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
