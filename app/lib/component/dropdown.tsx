import { outsideClick } from "@/app/lib/util/click-outsider";
import * as React from "react";
import CurrentUser from "./userpack";
import RouterBar from "./router-bar";

interface UprightProps {
  router: any;
  closeMenu: () => void;
}

export const Upright: React.FC<UprightProps> = ({ router, closeMenu }) => {
  const ref = outsideClick(closeMenu);
  return (
    <div
      ref={ref}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        backgroundColor: "rgba(236, 236, 236, 0.3)",
        backdropFilter: "blur(16px)",
        borderRadius: "0 16px 0 16px",
        border: "4px solid #005f87",
        minHeight: "256px",
        minWidth: "256px",
        width: "25%",
        height: "60%",
        zIndex: "100",
        display: "flex",
        flexGrow: 1,
        position: "absolute",
        fontSize: "16px",
        marginTop: "128px",
        marginLeft: "16px",
        padding: "8px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p>This is a vertical page, click and appear</p>
      <CurrentUser />
      <RouterBar router={router} />
    </div>
  );
};
