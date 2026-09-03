import type { ProjectCardProps } from "@/components/ProjectCard";

export interface Project extends ProjectCardProps {
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "CodePulse",
    description:
      "A learning retention platform for developers. Save code snippets as you learn, get reminded before you forget, and watch your knowledge auto-organize into topics.",
    image: "/Codepulse.jpg",
    tags: ["Next.JS", "TypeScript", "Python", "FastAPI", "Supabase"],
    liveLink: "https://web-two-beta-49.vercel.app/",
    isLive: true,
    featured: true,
  },
  {
    title: "FitApp.io",
    description:
      "A smart fitness platform that helps fitness businesses manage clients, automate tasks, and grow their services online.",
    image: "/Fitapp.jpg",
    tags: ["React.JS", "TypeScript", "Tailwind CSS", "Node.JS"],
    liveLink: "https://fitapp.io/",
    isLive: true,
    featured: true,
  },
  {
    title: "CloudCast",
    description:
      "Real-time weather dashboard with hourly and 7-day forecasts, interactive charts, and location maps.",
    image: "/Cloudcast.jpg",
    tags: ["React.JS", "TypeScript", "Tailwind CSS", "TanStack"],
    liveLink: "https://cloudcast-app.vercel.app/",
    isLive: true,
    featured: true,
  },
  {
    title: "Sensai",
    description:
      "A career development platform with a resume builder, interview prep, and job application tracking, plus personalised onboarding and dashboards.",
    image: "/sensai.webp",
    tags: ["Next.JS", "TypeScript", "Tailwind CSS", "Node.JS"],
    githubLink: "https://github.com/getparas/sensai",
    featured: true,
  },
  {
    title: "Barbershop Booking",
    description:
      "An online booking system for barbershops where users can schedule haircuts and grooming services with real-time availability.",
    image: "/barbershop.webp",
    tags: ["React.JS", "Node.JS", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/getparas/barbershopBookingApplication",
  },
  {
    title: "All Projects",
    description:
      "A collection of all my personal and collaborative projects, including web apps, tools, and experiments.",
    image: "/all-projects.webp",
    tags: ["React.JS", "Next.JS", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/prithaxdev",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
