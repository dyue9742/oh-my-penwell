import Horizon from "@/app/_lib/components/navigate";
import Image from "next/image";

export default function SignedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        minWidth: "1366px",
        minHeight: "2048px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Horizon />
        <div
          style={{
            filter: "grayscale(60%)",
            zIndex: "-1",
            opacity: "0.8",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
          }}
        >
          <Image
            src="/7657406.jpg"
            alt="pexels-7657406"
            width={1366}
            height={2048}
            priority={true}
          />
        </div>
        <div
          style={{
            height: "60%",
          }}
        >
          {children}
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#005f87",
          color: "#ececec",
          fontSize: "32px",
          fontFamily: "Josefin Sans",
          userSelect: "none",
          minHeight: "256px",
          position: "fixed",
          padding: "32px",
          bottom: 0,
          right: 0,
        }}
      >
        <p>PenWell,WriteWell</p>
        <p>© 2023-2024</p>
      </footer>
    </main>
  );
}
