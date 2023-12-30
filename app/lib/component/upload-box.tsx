import * as React from "react";
import { ReadyUpload } from "@/app/lib/component/upload-container";
import { outsideClick } from "@/app/lib/util/click-outsider";

interface UploadMenuProps {
  x: number;
  y: number;
  closeMenu: () => void;
}

export const UploadMenu: React.FC<UploadMenuProps> = ({ x, y, closeMenu }) => {
  const ref = outsideClick(closeMenu);
  return (
    <div
      ref={ref}
      style={{
        boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
        top: `${y + 48}px`,
        left: `${x - 128}px`,
        zIndex: "80",
        position: "absolute",
        transform: "translate(-25%, 3%)",
      }}
    >
      <ReadyUpload
        submit={() => {
          console.log("Submit!");
        }}
        cancel={closeMenu}
      />
    </div>
  );
};
