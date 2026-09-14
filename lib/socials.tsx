import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export interface SocialLink {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export const EMAIL = "rojemmaharjan@gmail.com";

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/Xrojim",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/rojim-maharjan-039807272/",
    icon: <FaLinkedin />,
  },
  {
    title: "Email",
    url: `mailto:${EMAIL}`,
    icon: <FaEnvelope />,
  },
];
