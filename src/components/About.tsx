import WordsPullUpMultiStyle, {
  type StyledSegment,
} from "./animations/WordsPullUpMultiStyle";
import ScrollRevealText from "./animations/ScrollRevealText";

const HEADING_SEGMENTS: StyledSegment[] = [
  {
    text: "NextLumen entwickelt KI-Systeme, die Unternehmen",
    className: "font-normal",
  },
  { text: "effizienter und skalierbarer", className: "italic font-serif" },
  { text: "machen.", className: "font-normal" },
];

const PARAGRAPHS = [
  "Viele Unternehmen stehen vor dem gleichen Problem: Prozesse sind gewachsen, aber nicht strukturiert. Zeit wird in manuelle Aufgaben investiert, während echtes Wachstum liegen bleibt.",
  "Wir analysieren, wo in deinem Business Zeit verloren geht, wo Prozesse bremsen und wo Potenzial ungenutzt bleibt – und bauen darauf aufbauend KI-Lösungen, die genau dort ansetzen.",
  "Unser Fokus liegt nicht auf Tools oder Trends, sondern auf Ergebnissen: weniger manueller Aufwand, klarere Abläufe und Systeme, die im Hintergrund zuverlässig arbeiten.",
  "So entstehen Lösungen, die nicht nur kurzfristig entlasten, sondern langfristig einen echten Wettbewerbsvorteil schaffen.",
];

const bodyClass = "text-sm leading-relaxed sm:text-base";
const bodyStyle = { color: "#DEDBC8" };

export default function About() {
  return (
    <section id="ueber-uns" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-2xl bg-[#101010] px-6 py-16 text-center md:rounded-[2rem] md:px-12 md:py-24">
        <span className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          Über uns
        </span>

        <h2
          className="max-w-4xl text-3xl leading-[1.05] sm:text-4xl sm:leading-[1] md:text-5xl md:leading-[0.95] lg:text-6xl"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
        </h2>

        <div className="mt-12 flex max-w-2xl flex-col gap-7">
          <ScrollRevealText
            text={PARAGRAPHS[0]}
            className={bodyClass}
            style={bodyStyle}
          />

          <ScrollRevealText
            text="Genau hier setzen wir an."
            className="font-serif text-xl italic sm:text-2xl md:text-3xl"
            style={{ color: "#E1E0CC" }}
          />

          <ScrollRevealText
            text={PARAGRAPHS[1]}
            className={bodyClass}
            style={bodyStyle}
          />
          <ScrollRevealText
            text={PARAGRAPHS[2]}
            className={bodyClass}
            style={bodyStyle}
          />
          <ScrollRevealText
            text={PARAGRAPHS[3]}
            className={bodyClass}
            style={bodyStyle}
          />
        </div>
      </div>
    </section>
  );
}
