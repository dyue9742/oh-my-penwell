import * as React from "react";
import { ReadyUpload } from "@/app/_lib/components/upload_container";
import { outsideClick } from "@/app/_lib/utils/click_outer";

interface IUploadMenuProps {
  x: number;
  y: number;
  closeMenu: () => void;
}

export const UploadMenu: React.FC<IUploadMenuProps> = ({ x, y, closeMenu }) => {
  const ref = outsideClick(closeMenu);
  return (
    <div
      ref={ref}
      style={{
        borderRadius: "0 16px 0 16px",
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
