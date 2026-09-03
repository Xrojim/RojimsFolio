import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface SocialLink {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export const EMAIL = "prithakarkii@gmail.com";

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/prithaxdev",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/getpritha/",
    icon: <FaLinkedin />,
  },
  {
    title: "Twitter",
    url: "https://x.com/pritha_karki",
    icon: <FaXTwitter />,
  },
  {
    title: "Email",
    url: `mailto:${EMAIL}`,
    icon: <FaEnvelope />,
  },
];
