import ContactBtn from "@/components/ContactBtn";
import Icon from "@/components/icons/Icon";
import { socialLinks } from "@/lib/socials";

export default function Contact() {
  return (
    <div className="relative w-full px-4 md:px-8">
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="grid w-full grid-cols-4">
        {socialLinks.map((contact, index) => (
          <ContactBtn
            key={contact.title}
            icon={<Icon icon={contact.icon} />}
            text={contact.title}
            url={contact.url}
            className={
              index !== socialLinks.length - 1
                ? "border-border border-r"
                : "border-border"
            }
          />
        ))}
      </div>
    </div>
  );
}
