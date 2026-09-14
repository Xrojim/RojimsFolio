"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/use-theme";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Repeat } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import useSound from "use-sound";
import { useMounted } from "@/lib/use-mounted";

const words = [
  "Aspiring QA Engineer",
  "Manual & API Tester",
  "Software Test Specialist",
];

export default function Hero() {
  const [isAnime, setIsAnime] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [dateTime, setDateTime] = useState("");
  const [toggle] = useSound("/sounds/toggle.mp3");
  const [avatar] = useSound("/sounds/photo-change.mp3");
  const mounted = useMounted();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDateTime(
        now.toLocaleDateString("en-GB", {
          timeZone: "Asia/Kathmandu",
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) +
          "  ·  " +
          now.toLocaleTimeString("en-GB", {
            timeZone: "Asia/Kathmandu",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex flex-col-reverse items-center gap-6 px-8 py-6 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8 md:px-13">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <div className="relative z-10 flex w-full flex-col justify-between gap-1 py-2 md:text-left">
          <div>
            <h1 className="font-heading text-3xl">Rojim Maharjan</h1>
            <div className="text-muted-foreground pb-3 text-sm">
              <FlipWords
                className="text-muted-foreground dark:text-muted-foreground px-0"
                words={words}
              />
            </div>
          </div>
          <div className="text-muted-foreground flex flex-col gap-3 text-pretty">
            <p className="text-sm">
              Hi, I&apos;m Rojim — an aspiring QA professional with a strong foundation in software development and testing fundamentals, including SDLC, STLC, and bug tracking workflows.
            </p>
            <p className="text-sm">
              I enjoy learning modern testing practices, identifying defects, creating test cases, and improving the quality of software products through thoughtful analysis and documentation.
            </p>
            <p className="text-sm">
              I&apos;m actively building hands-on experience in manual testing, API testing, Playwright basics, test planning, regression testing, and bug reporting while contributing to real software projects.
            </p>
          </div>
        </div>

        <div className="relative mx-auto shrink-0 md:mx-0 md:mr-3">
          <div className="absolute -top-1 -right-5 z-50 md:top-3 md:-right-5">
            {mounted && (
              <AnimatedThemeToggler
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onThemeChange={(newTheme) => setTheme(newTheme)}
                onClick={() => toggle()}
                variant="square"
                className="bg-card hover:bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors [&>svg]:h-4 [&>svg]:w-4"
              />
            )}
          </div>
          <div className="group bg-card relative mt-4 rounded-2xl border p-3 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] md:mt-8">
            <p className="text-muted-foreground mx-auto mt-2 w-full text-center text-[11px] font-medium tracking-tight">
              {dateTime ? (
                <>
                  <span>Nepal</span>
                  <span> · </span>
                  <span>{dateTime}</span>
                </>
              ) : (
                "—"
              )}
            </p>
            <button
              onClick={() => {
                setIsAnime(!isAnime);
                avatar();
              }}
              className="bg-card hover:bg-background absolute right-4 bottom-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm transition-colors md:right-4 md:bottom-10"
              title="Toggle visual style"
            >
              <Repeat size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
