import PageContainer from "@/components/PageContainer";
import { Metadata } from "next";
import PageNavbar from "@/components/PageNavbar";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/app/sections/Footer";
import PageHeading from "@/components/PageHeading";
import Divider from "@/components/Divider";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse projects built by Pritha Karki, including a fitness business platform, a URL shortener, a real-time weather dashboard, and a career development platform built with React, Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB.",

  keywords: [
    "Pritha Karki",
    "Projects",
    "Portfolio",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Developer Portfolio",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects | Pritha Karki",
    description:
      "Explore my collection of frontend and full-stack web applications.",
    url: `${SITE_URL}/projects`,
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Pritha Karki",
    description:
      "Explore my collection of frontend and full-stack web applications.",
  },
};

export default function Page() {
  return (
    <>
      <PageContainer>
        <PageNavbar title="Home" backHref="/" />
        <PageHeading
          title="Projects"
          className="text-4xl"
          subtitle="A collection of projects which i've built!"
        />
        <div className="relative">
          <ProjectGrid projects={projects} />
        </div>
        <Divider />
        <Footer />
      </PageContainer>
    </>
  );
}
