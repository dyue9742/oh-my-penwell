"use client";

import "@/app/global.css";
import { Upright } from "./dropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadMenu } from "./upload_box";

const initUpload = {
  show: false,
  x: 0,
  y: 0,
};

export const Horizon = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const [uploadIsOpen, setUploadIsOpen] = useState(initUpload);
  const closeMenu = () => setUploadIsOpen(initUpload);

  function handleUpload(event: MouseEvent) {
    const _x = event.pageX;
    const _y = event.pageY;
    setUploadIsOpen({ show: !uploadIsOpen, x: _x, y: _y });
  }

  return (
    <>
      {uploadIsOpen.show && (
        <UploadMenu
          x={uploadIsOpen.x}
          y={uploadIsOpen.y}
          closeMenu={closeMenu}
        />
      )}

      {showMenu && <Upright router={router} closeMenu={handleMenu} />}

      <button
        style={{
          fontFamily: "Josefin Sans",
          color: "#ececec",
          width: "128px",
          height: "128px",
          position: "absolute",
          fontSize: "128px",
          userSelect: "none",
          border: "2px solid #ececec",
          backgroundColor: "#2a2a2a",
        }}
        onClick={() => {
          handleMenu;
        }}
      >
        p
      </button>
      <div
        style={{
          backgroundColor: "#191919",
          fontFamily: "Josefin Sans",
          height: "64px",
          display: "flex",
          userSelect: "none",
          alignItems: "center",
          paddingLeft: "256px",
          flexDirection: "row-reverse",
        }}
      >
        <p
          style={{
            color: "#cecece",
            height: "32px",
            fontSize: "32px",
            marginRight: "32px",
          }}
        >
          <u>PenWell,WriteWell</u>
        </p>
        <button
          className="btn-basic"
          style={{
            backgroundColor: "#393e46",
            color: "#cecece",
            height: "32px",
            minWidth: "128px",
            marginRight: "16px",
            borderRadius: "4px",
          }}
          onClick={() => router.push("/")}
        >
          General
        </button>
        <button
          className="btn-basic"
          style={{
            backgroundColor: "#393e46",
            color: "#cecece",
            height: "32px",
            minWidth: "128px",
            marginRight: "16px",
            borderRadius: "4px",
          }}
          onClick={() => {
            handleUpload;
          }}
        >
          Upload
        </button>
      </div>
    </>
  );
};
