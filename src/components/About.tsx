import WordsPullUpMultiStyle, {
  type StyledSegment,
} from "./animations/WordsPullUpMultiStyle";
import ScrollRevealText from "./animations/ScrollRevealText";

const HEADING_SEGMENTS: StyledSegment[] = [
  { text: "Ich bin Maximilian Turan,", className: "font-normal" },
  { text: "ein autodidaktischer KI-Stratege.", className: "italic font-serif" },
  {
    text: "Ich habe Expertise in Automatisierung, LLM-Systemen und Produktdesign.",
    className: "font-normal",
  },
];

const BODY_TEXT =
  "In den letzten sieben Jahren habe ich mit schnell wachsenden Start-ups und etablierten Unternehmen zusammengearbeitet und KI-Systeme gebaut, die chaotische Abläufe in einen klaren, sich verstärkenden Vorteil verwandeln. Gemeinsam haben wir Lösungen geliefert, die in mehreren Branchen messbare Ergebnisse erzielt haben.";

export default function About() {
  return (
    <section className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-2xl bg-[#101010] px-6 py-16 text-center md:rounded-[2rem] md:px-12 md:py-24">
        <span className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          Angewandte KI
        </span>

        <h2
          className="max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
        </h2>

        <ScrollRevealText
          text={BODY_TEXT}
          className="mt-12 max-w-2xl text-xs leading-relaxed sm:text-sm md:text-base"
          style={{ color: "#DEDBC8" }}
        />
      </div>
    </section>
  );
}
