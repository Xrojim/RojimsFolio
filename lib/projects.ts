import type { ProjectCardProps } from "@/components/ProjectCard";

export interface Project extends ProjectCardProps {
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Resume Ranker",
    description:
      "A Django and PostgreSQL web app where users can upload resumes and receive a ranked list using a KNN-based ranking algorithm.",
    image: "/rr.png",
    tags: ["HTML", "CSS", "Python", "Django", "PostgreSQL"],
    githubLink: "https://github.com/Xrojim/ResumeRanker",
    featured: true,
  },
  {
    title: "Online Dairy Products",
    description:
      "A multi-vendor e-commerce website for dairy products featuring product listing, login, cart, and checkout flow scenarios.",
    image: "/od.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
    githubLink: "https://github.com/Xrojim/OnlineDairyProduct",
    featured: true,
  },
  {
    title: "Movie Mind",
    description:
      "A content-based movie recommendation system built with Django, Python, machine learning, TF-IDF, and cosine similarity.",
    image: "/bsks.png",
    tags: ["Python", "Django", "Machine Learning", "TF-IDF", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Xrojim/MovieMind-/",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
