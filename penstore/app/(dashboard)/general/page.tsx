"use client";

import SignedLayout from "@/app/(dashboard)/layout";
import { lorem } from "@/app/_lib/util/lorem-example";
import { Suspense, useEffect } from "react";

const General = () => {
  var generatedPara: string = "";

  useEffect(() => {
    lorem.generateParagraphs(5);
  }, [generatedPara]);

  return (
    <SignedLayout>
      <div
        style={{
          border: "1px solid #393e46",
          borderRadius: "4px",
          color: "#d2d2d2",
          top: "128px",
          left: "256px",
          width: "60%",
          height: "60%",
          margin: "32px",
          padding: "32px",
          display: "block",
          position: "absolute",
          fontFamily: "Josefin Sans",
        }}
      >
        <p>General... todo!()</p>
        <Suspense>{lorem.generateParagraphs(8)}</Suspense>
      </div>
    </SignedLayout>
  );
};

export default General;
