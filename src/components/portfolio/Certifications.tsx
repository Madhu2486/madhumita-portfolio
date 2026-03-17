import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Credentials that validate my learning.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Full Stack Development
                </h3>
                <p className="text-primary text-sm font-medium">Intern Infobyte</p>
                <p className="text-muted-foreground text-sm mt-1">
                  January 2026 – February 2026
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  Skills: Full Stack Development
                </p>
                <a
                  href="https://drive.google.com/file/d/1RDiuflfo88aYtoTH18MFJsmxVAMEqgnm/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
