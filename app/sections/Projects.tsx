import Heading from "@/components/Heading";
import ProjectGrid from "@/components/ProjectGrid";
import HeadingButton from "@/components/HeadingButton";
import { featuredProjects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="relative">
      <Heading title="Projects" />
      <ProjectGrid projects={featuredProjects} />
      <HeadingButton title={"View All Projects"} href={"/projects"} />
    </div>
  );
}
