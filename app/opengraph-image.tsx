import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "Rojim Maharjan — QA & Software Testing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required by output: "export" — render the OG image once at build time.
export const dynamic = "force-static";

export default async function Image() {
  const avatar = await readFile(
    path.join(process.cwd(), "public/og-avatar.png"),
  );
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 90px",
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <img
          src={avatarSrc}
          alt=""
          width={300}
          height={300}
          style={{
            borderRadius: 32,
            objectFit: "cover",
            border: "1px solid rgba(250,250,250,0.14)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            Rojim Maharjan
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(250,250,250,0.62)",
              marginTop: 12,
            }}
          >
            Aspiring QA Engineer
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(250,250,250,0.40)",
              marginTop: 32,
            }}
          >
            Manual Testing · API Testing · Playwright · SDLC/STLC
          </div>
          <div style={{ fontSize: 24, color: "#a1a1aa", marginTop: 40 }}>
            rojemmaharjan@gmail.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
