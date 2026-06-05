const LINK_COLOR = "rgba(225, 224, 204, 0.7)";
const LINK_HOVER = "#E1E0CC";

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: "Studio", links: ["Unser Ansatz", "Kollektiv", "Programme", "Fallstudien"] },
  { title: "Ressourcen", links: ["Workshops", "Playbooks", "Einblicke", "FAQ"] },
  { title: "Verbinden", links: ["LinkedIn", "X / Twitter", "GitHub", "Anfragen"] },
];

function FooterLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-sm transition-colors duration-300"
      style={{ color: LINK_COLOR }}
      onMouseEnter={(e) => (e.currentTarget.style.color = LINK_HOVER)}
      onMouseLeave={(e) => (e.currentTarget.style.color = LINK_COLOR)}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black px-4 pb-6 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-[#101010] px-6 py-12 md:rounded-[2rem] md:px-12 md:py-16">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span
                className="text-2xl font-medium tracking-tight"
                style={{ color: "#E1E0CC" }}
              >
                NextLumen
                <span className="align-super text-[0.4em]">*</span>
              </span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
                Ein Studio für angewandte KI, das intelligente Systeme für
                ambitionierte Teams baut.
              </p>
            </div>

            {/* Link columns */}
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <FooterLink label={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} NextLumen. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <FooterLink label="Impressum" />
              <FooterLink label="Datenschutz" />
              <FooterLink label="AGB" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
