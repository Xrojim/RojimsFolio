"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import StackBtn from "@/components/StackBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaBug,
  FaCheckCircle,
  FaFileExcel,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";

interface StackItem {
  title: string;
  icon: React.ReactNode;
  url: string;
  type: "language" | "frontend" | "backend" | "design" | "tool";
}

const stackItems: StackItem[] = [
  {
    title: "Python",
    icon: <FaPython />,
    url: "https://www.python.org/",
    type: "language",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    type: "frontend",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "frontend",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "language",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
    type: "language",
  },
  {
    title: "Manual Testing",
    icon: <FaCheckCircle />,
    url: "https://en.wikipedia.org/wiki/Manual_testing",
    type: "tool",
  },
  {
    title: "API Testing",
    icon: <FaBug />,
    url: "https://www.postman.com/",
    type: "tool",
  },
  {
    title: "Playwright",
    icon: <FaRocket />,
    url: "https://playwright.dev/",
    type: "tool",
  },
  {
    title: "Functional Testing",
    icon: <FaCheckCircle />,
    url: "https://en.wikipedia.org/wiki/Functional_testing",
    type: "tool",
  },
  {
    title: "Regression Testing",
    icon: <FaBug />,
    url: "https://en.wikipedia.org/wiki/Regression_testing",
    type: "tool",
  },
  {
    title: "Test Case Design",
    icon: <FaCheckCircle />,
    url: "https://en.wikipedia.org/wiki/Test_case",
    type: "tool",
  },
  {
    title: "Bug Reporting",
    icon: <FaBug />,
    url: "https://en.wikipedia.org/wiki/Bug_tracking_system",
    type: "tool",
  },
  {
    title: "SDLC & STLC",
    icon: <FaGitAlt />,
    url: "https://en.wikipedia.org/wiki/Software_development_life_cycle",
    type: "tool",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/",
    type: "tool",
  },
  {
    title: "MySQL",
    icon: <FaDatabase />,
    url: "https://www.mysql.com/",
    type: "backend",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
    type: "backend",
  },
  {
    title: "Django",
    icon: <SiDjango />,
    url: "https://www.djangoproject.com/",
    type: "backend",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    url: "https://git-scm.com/",
    type: "tool",
  },
  {
    title: "Microsoft Excel",
    icon: <FaFileExcel />,
    url: "https://www.microsoft.com/en-us/microsoft-365/excel",
    type: "tool",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Languages", value: "language" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tool" },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? stackItems
      : stackItems.filter((item) => item.type === activeFilter);

  return (
    <>
      <Heading title="Tech Stack">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="mr-3 flex h-7 items-center gap-1.5 px-2.5 py-1 text-xs font-semibold"
          >
            <span>{filters.find((f) => f.value === activeFilter)?.label}</span>
            <span className="text-[10px]">
              <RiArrowDropDownLine />
            </span>
          </Button>
          {dropdownOpen && (
            <div className="bg-popover text-popover-foreground absolute right-0 z-50 mt-1 w-40 overflow-hidden rounded-md border font-mono text-xs shadow-md">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "hover:bg-muted block w-full cursor-pointer px-3 py-2 text-left font-semibold transition-colors",
                    activeFilter === filter.value &&
                      "bg-muted/80 text-foreground",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Heading>
      <div className="relative flex flex-wrap gap-1 px-8 py-5 md:px-12">
        {filteredItems.map((item, index) => (
          <StackBtn
            key={index}
            icon={item.icon}
            text={item.title}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}
