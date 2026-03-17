import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILL_GROUPS = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { category: "Backend", skills: ["Java", "JavaScript", "Node.js"] },
  { category: "Databases", skills: ["MongoDB"] },
  { category: "Tools", skills: ["GitHub", "VS Code", "Vercel"] },
  { category: "AI Tools", skills: ["ChatGPT", "Gemini", "Lovable"] },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Technologies and tools I work with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.category} className="glass-card p-6 hover-lift">
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-foreground border border-border hover:border-primary/50 hover:shadow-[0_0_12px_-3px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
