import { useEffect, useState } from "react";
import { MapPin, Briefcase } from "lucide-react";

const ROLES = ["Developer"];
const TYPING_SPEED = 120;
const DELETE_SPEED = 80;
const PAUSE = 2000;

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === role) {
      timeout = setTimeout(() => setDeleting(true), PAUSE);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting ? role.slice(0, text.length - 1) : role.slice(0, text.length + 1)
          ),
        deleting ? DELETE_SPEED : TYPING_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Full Stack Development
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">MADHUMITA C</span>
          </h1>
          <div className="text-2xl sm:text-3xl font-display font-semibold text-foreground/80">
            <span>{text}</span>
            <span className="border-r-2 border-primary ml-0.5 animate-[typing-cursor_0.8s_infinite]">
              &nbsp;
            </span>
          </div>
          <p className="text-lg text-muted-foreground italic">
            "Passion in Every Project"
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" /> Coimbatore
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="w-4 h-4 text-primary" /> Fresher
            </span>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right — Profile picture */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img
                src="https://image2url.com/r2/default/images/1773708166183-e8ba63b0-cc39-4afc-a8db-3dd2ec93508a.jpeg"
                alt="Madhumita C"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
