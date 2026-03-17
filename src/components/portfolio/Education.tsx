import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Education</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          My academic background.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  B.Sc. Information Technology
                </h3>
                <p className="text-primary text-sm font-medium">
                  KPR College of Arts, Science and Research
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Coimbatore · Expected 2027
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Pursuing a Bachelor of Science in Information Technology with a focus on programming, web development, and database concepts. Currently learning Problem Solving while building practical projects to strengthen my skills in software and web application development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
