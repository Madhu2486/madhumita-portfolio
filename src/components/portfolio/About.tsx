import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User } from "lucide-react";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Get to know who I am and what drives me.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick intro */}
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I am a motivated B.Sc. IT student at KPR College of Arts, Science and Research, passionate about Full Stack Development and building user-focused digital solutions. I am learning Java, HTML, and CSS, and have gained hands-on experience through projects like a Daily Journal App website. I aim to become a skilled Full Stack Developer, contribute to impactful projects, and continuously improve my coding skills while learning from industry professionals.
            </p>
          </div>

          {/* Detailed */}
          <div className="glass-card p-8 hover-lift space-y-4">
            <h3 className="font-display text-xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I am a motivated and curious B.Sc. Information Technology student at KPR College of Arts, Science and Research, with a strong interest in building practical and user-focused digital solutions. I am currently developing my technical foundation by learning Java, HTML and CSS and I am actively exploring the path of Full Stack Development.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              As part of my learning journey, I have worked on projects such as a Daily Journal App website, which helped me understand real-world application development, front-end design, and logical problem-solving. I believe in consistent growth, practical learning, and taking responsibility for my own progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
