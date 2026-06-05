import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import WordsPullUpMultiStyle, {
  type StyledSegment,
} from "./animations/WordsPullUpMultiStyle";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

const HEADER_SEGMENTS: StyledSegment[] = [
  {
    text: "KI-Workflows auf Studio-Niveau für ambitionierte Teams.",
    className: "text-primary",
  },
  {
    text: "Gebaut für echte Ergebnisse. Angetrieben von Intelligenz.",
    className: "text-gray-500",
  },
];

interface StepCardData {
  number: string;
  title: string;
  icon: string;
  items: string[];
}

const STEP_CARDS: StepCardData[] = [
  {
    number: "01",
    title: "KI-Strategie-Roadmap.",
    // TODO: replace placeholder with real icon asset
    icon: "https://placehold.co/96x96/212121/DEDBC8/png?text=01",
    items: [
      "Potenzialanalyse über Ihren gesamten Stack",
      "Priorisierte, nach ROI sortierte Anwendungsfälle",
      "Empfehlungen zu Eigenentwicklung vs. Zukauf",
      "Ein fokussierter 90-Tage-Umsetzungsplan",
    ],
  },
  {
    number: "02",
    title: "Intelligente Automatisierung.",
    icon: "https://placehold.co/96x96/212121/DEDBC8/png?text=02",
    items: [
      "LLM-gestützte Workflow-Analyse",
      "Kontrollmechanismen mit Mensch im Prozess",
      "Native Integrationen in Ihre Tools",
    ],
  },
  {
    number: "03",
    title: "Kontinuierliche Optimierung.",
    icon: "https://placehold.co/96x96/212121/DEDBC8/png?text=03",
    items: [
      "Automatisiertes Performance-Monitoring",
      "Feinabstimmung von Modellen und Prompts",
      "Vierteljährlicher Roadmap-Abgleich",
    ],
  },
];

/** Wraps a card with the staggered scale + fade entrance animation. */
function CardReveal({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: CARD_EASE }}
    >
      {children}
    </motion.div>
  );
}

function LearnMore() {
  return (
    <a
      href="#"
      className="group mt-6 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
    >
      Mehr erfahren
      <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Features() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28">
      {/* Subtle background grain */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-12 max-w-2xl text-xl font-normal sm:text-2xl md:mb-16 md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={HEADER_SEGMENTS}
            className="!justify-start text-left"
          />
        </header>

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          {/* Card 1 — video */}
          <CardReveal
            index={0}
            className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl lg:h-full"
          >
            {/* Gradient fallback shown behind the video while it loads */}
            <div className="media-placeholder absolute inset-0" aria-hidden />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              className="relative p-6 text-lg font-medium md:text-xl"
              style={{ color: "#E1E0CC" }}
            >
              Ihre Intelligenz-Ebene.
            </p>
          </CardReveal>

          {/* Cards 2–4 — step cards */}
          {STEP_CARDS.map((card, i) => (
            <CardReveal
              key={card.number}
              index={i + 1}
              className="flex min-h-[320px] flex-col rounded-2xl bg-[#212121] p-6 lg:h-full"
            >
              <img
                src={card.icon}
                alt=""
                className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
              />

              <h3
                className="mt-6 flex items-baseline gap-2 text-lg font-medium md:text-xl"
                style={{ color: "#E1E0CC" }}
              >
                {card.title}
                <span className="text-xs text-gray-500">{card.number}</span>
              </h3>

              <ul className="mt-5 flex flex-col gap-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-snug text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <LearnMore />
              </div>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
