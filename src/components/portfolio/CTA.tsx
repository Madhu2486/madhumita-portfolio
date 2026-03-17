import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-2">
              <Sparkles className="w-4 h-4" />
              Open for Opportunities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Let's Work <span className="text-gradient">Together!</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm actively looking for internships and collaboration opportunities. Let's build something great.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
