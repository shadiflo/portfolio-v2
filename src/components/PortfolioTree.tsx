import { useEffect, useState } from "react";
import { FileTree, FileTreeFile, FileTreeFolder } from "@/components/motion/file-tree";
import { projects } from "@/data/projects";

function navigateToSection(value: string, setValue: (value: string) => void) {
  const target = document.getElementById(value);
  if (!target) return;

  setValue(value);
  window.history.pushState(null, "", `#${value}`);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

export default function PortfolioTree() {
  const [value, setValue] = useState("about");

  useEffect(() => {
    const initialValue = window.location.hash.slice(1);
    if (initialValue && document.getElementById(initialValue)) setValue(initialValue);
  }, []);

  return (
    <div className="portfolio-file-tree">
      <FileTree
        value={value}
        defaultExpandedIds={["projects"]}
        ariaLabel="Portfolio navigation"
        onValueChange={(nextValue) => navigateToSection(nextValue, setValue)}
      >
        <FileTreeFile value="about" name="about.md" />
        <FileTreeFile value="skills" name="skills.ts" />
        <FileTreeFile value="experience" name="experience.md" />
        <FileTreeFolder value="projects" name="projects">
          {projects.map((project) => (
            <FileTreeFile
              key={project.id}
              value={`project-${project.id}`}
              name={project.title}
            />
          ))}
        </FileTreeFolder>
        <FileTreeFile value="contact" name="contact.md" />
      </FileTree>
    </div>
  );
}
