"use client";

import { ReactNode } from "react";
import { Horizon } from "@/app/_lib/component/navigate";

interface ISignedProps {
  children: ReactNode;
}

const SignedLayout: React.FC<ISignedProps> = ({ children }) => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Horizon />
        <div style={{ minHeight: "1024px" }}>{children}</div>
        <div
          style={{
            backgroundColor: "#191919",
            userSelect: "none",
            height: "256px",
            color: "#dedede",
            display: "flex",
            fontSize: "32px",
            fontFamily: "Josefin Sans",
          }}
        >
          <p style={{ padding: "32px" }}>PenWell,WriteWell © 2023 - 2024</p>
        </div>
      </div>
    </main>
  );
};

export default SignedLayout;
