import { ThreeCanvas } from "@/app/_lib/components/penwell";
import { Decoration } from "@/app/_lib/components/decoration";
import EveryMinute from "@/app/_lib/components/every_minute";

export default function UnsignedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <ThreeCanvas />
      <div
        style={{
          boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
          border: "4px solid #005f87",
          background: "#ececec",
          position: "fixed",
          padding: "32px",
          zIndex: "50",
          top: "16%",
          left: "50%",
          width: "512px",
          height: "256px",
          display: "grid",
        }}
      >
        {children}
        <div
          style={{
            color: "#005f87",
            display: "flex",
            fontSize: "24px",
            marginTop: "32px",
            fontFamily: "Monofett",
          }}
        >
          <EveryMinute />
        </div>
        <Decoration />
      </div>
    </main>
  );
}
