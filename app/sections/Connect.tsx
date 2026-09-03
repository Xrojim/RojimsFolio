import ConnectBtn from "@/components/ConnectBtn";
import Heading from "@/components/Heading";
import { socialLinks } from "@/lib/socials";

export default function Connect() {
  return (
    <>
      <Heading title="Work With Me" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-4 text-center md:p-8">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            Open to freelance projects and full-time opportunities — reach out
            through any of these platforms.
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:gap-3">
            {socialLinks.map((handle) => (
              <ConnectBtn
                key={handle.title}
                title={handle.title}
                icon={handle.icon}
                href={handle.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
