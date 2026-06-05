import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";
import SplineScene from "./SplineScene";

const ROBOT_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const EASE = [0.16, 1, 0.3, 1] as const;

const NAV_ITEMS = [
  "Unser Ansatz",
  "Kollektiv",
  "Workshops",
  "Programme",
  "Anfragen",
];

const LINK_COLOR = "rgba(225, 224, 204, 0.8)";
const LINK_HOVER = "#E1E0CC";

export default function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Gradient fallback shown behind the scene while it streams in */}
        <div className="media-placeholder absolute inset-0 h-full w-full" aria-hidden />

        {/* 3D robot animation (Spline) — same scene as nextlumen.ai.
            The canvas is pulled upward so the robot sits in the upper area of
            the hero instead of "lying" near the bottom. Tweak top/height to
            nudge it higher or lower. */}
        <SplineScene
          scene={ROBOT_SCENE}
          className="!absolute !left-0 !top-[-22%] !h-[130%] !w-full"
        />

        {/* Noise grain overlay (lightened so the robot stays visible) */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay" />

        {/* Gradient overlay for legibility — kept subtle on top, stronger at the bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        {/* Navbar — black pill hanging from the top edge, right-aligned so it
            doesn't cover the robot's head (which sits at the top center). */}
        <nav className="absolute right-4 top-0 z-20 md:right-8">
          <ul className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-10 md:rounded-b-3xl md:px-8 lg:gap-12">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[10px] tracking-wide transition-colors duration-300 sm:text-xs md:text-sm"
                  style={{ color: LINK_COLOR }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = LINK_HOVER)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = LINK_COLOR)
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Top: heading (left) + slogan directly underneath, right-aligned to
            the heading's width. The inline-block wrapper shrinks to the
            heading so the slogan sits exactly under "NextLumen". */}
        <div className="absolute left-0 top-0 z-10 px-5 pt-14 sm:px-8 sm:pt-16 md:px-10 md:pt-20">
          <div className="inline-block">
            <h1
              className="whitespace-nowrap text-left font-bold leading-[0.85] tracking-[-0.07em] text-[9vw] sm:text-[8.4vw] md:text-[7.8vw] lg:text-[6.6vw] xl:text-[6.3vw] 2xl:text-[6vw]"
              style={{ color: "#E1E0CC" }}
            >
              <WordsPullUp text="NextLumen" showAsterisk />
            </h1>

            <motion.p
              className="mt-1 text-right text-sm font-light tracking-tight text-primary/80 sm:text-base md:mt-2 md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            >
              Wir automatisieren Ihr Heute, Sie steuern die Zukunft.
            </motion.p>
          </div>
        </div>

        {/* Bottom: description + CTA */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 flex flex-col gap-5 lg:col-span-5 lg:col-start-8 lg:pb-4">
              <motion.p
                className="max-w-md text-xs leading-[1.35] text-primary/70 sm:text-sm md:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              >
                NextLumen entwickelt maßgeschneiderte KI-Systeme – von
                automatisierten Prozessen bis hin zu leistungsstarken KI-Agenten.
                <br />
                <br />
                <span className="text-primary">
                  Bis zu 60 % weniger manuelle Arbeit. Bis zu 3× schnellere
                  Abläufe.
                </span>
                <br />
                <br />
                Mehr Zeit für das, was wirklich zählt.
              </motion.p>

              <motion.a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 font-medium text-black transition-all duration-300 hover:gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <span className="text-sm sm:text-base">
                  Beginnen Sie mit dem Aufbau Ihrer individuellen KI-Lösung.
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
