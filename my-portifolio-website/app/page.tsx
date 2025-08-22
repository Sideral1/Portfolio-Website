"use client";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Pedro Costa. Built with React, TypeScript, and Tailwind
              CSS.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Designed and developed with passion for clean code and beautiful
              user experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
