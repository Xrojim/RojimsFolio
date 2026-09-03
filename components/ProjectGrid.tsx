import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const total = projects.length;
  const lastRow = Math.floor((total - 1) / 2);

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className={cn(
            "px-8 py-6 md:px-16 md:py-8",
            idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
            idx === total - 1 ? "border-b-0" : "border-b",
            Math.floor(idx / 2) === lastRow ? "md:border-b-0" : "md:border-b",
            idx % 2 === 0 && idx + 1 < total ? "md:border-r" : "md:border-r-0",
          )}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}
