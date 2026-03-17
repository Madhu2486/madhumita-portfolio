import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Smart To-Do",
    status: "Completed",
    category: "Web page",
    description:
      "Developed a Smart To-Do application that helps users organize, track, and manage their daily tasks efficiently. Implemented core functionalities like creating, updating, and deleting tasks using JavaScript and basic web technologies.",
    tech: ["JavaScript", "HTML", "CSS", "MongoDB"],
    github: "https://github.com/Madhu2486/Smart-To-Do",
  },
  {
    title: "My Journal App",
    status: "Completed",
    category: "Web page",
    description:
      "The Journal App helps users organize and manage their daily entries, enhancing personal productivity and reflection. It provides an easy-to-use digital platform that improves consistency and record-keeping over traditional methods.",
    tech: ["Node.js", "JavaScript", "MongoDB"],
    github: "https://github.com/Madhu2486/my-daily-journal",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function Projects() {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
          Hands-on projects showcasing my development skills.
        </p>

        {/* Filter pills */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300 ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <div key={p.title} className="glass-card p-6 hover-lift flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                  {p.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
