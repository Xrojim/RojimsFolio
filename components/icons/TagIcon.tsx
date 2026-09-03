import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiSocketdotio,
  SiReact,
  SiNodedotjs,
  SiTurborepo,
  SiTanstack,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const getTagIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "react.js":
      return <SiReact size={14} />;
    case "typescript":
      return <SiTypescript size={14} />;
    case "express.js":
      return <SiExpress size={14} />;
    case "node.js":
      return <SiNodedotjs size={14} />;
    case "mongodb":
      return <SiMongodb size={14} />;
    case "next.js":
      return <SiNextdotjs size={14} />;
    case "websockets":
      return <SiSocketdotio size={14} />;
    case "turborepo":
      return <SiTurborepo size={14} />;
    case "groq api":
      return <TbApi size={14} />;
    case "vercel":
      return <SiVercel size={14} />;
    case "tailwind css":
      return <SiTailwindcss size={14} />;
    case "tanstack":
      return <SiTanstack size={14} />;
    case "python":
      return <SiPython size={14} />;
    case "fastapi":
      return <SiFastapi size={14} />;
    case "supabase":
      return <SiSupabase size={14} />;
    case "postgresql":
      return <SiPostgresql size={14} />;
    default:
      return (
        <span className="font-mono text-[10px] font-bold">
          {tag.substring(0, 2)}
        </span>
      );
  }
};

export default function TagIcon({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div
      title={title}
      className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 cursor-default items-center justify-center rounded-md border transition-colors"
    >
      {getTagIcon(tag)}
    </div>
  );
}
