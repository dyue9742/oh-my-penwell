"use client";

import React, { useState } from "react";
import SearchBar from "@/app/_lib/components/search_bar";
import { Upright } from "@/app/_lib/components/dropdown";
import { UploadMenu } from "@/app/_lib/components/upload_box";
import { PaperButtonStyle } from "@/app/_lib/utils/paper_color_style";
import { useRouter } from "next/navigation";

const initialUpload = {
  show: false,
  x: 0,
  y: 0,
};

export default function Horizon() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const [uploadIsOpen, setUploadIsOpen] = useState(initialUpload);
  const closeMenu = () => setUploadIsOpen(initialUpload);

  function handleUpload(event: React.MouseEvent) {
    const _x = event.pageX;
    const _y = event.pageY;
    setUploadIsOpen({ show: !uploadIsOpen.show, x: _x, y: _y });
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
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          border: "5px solid #0087af",
          color: "#0087af",
          width: "128px",
          height: "128px",
          cursor: "context-menu",
          position: "absolute",
          fontSize: "128px",
          fontFamily: "Josefin Sans",
          backgroundColor: "#ececec",
        }}
        onClick={handleMenu}
      >
        p
      </button>
      <div
        style={{
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          color: "#ececec",
          height: "64px",
          padding: "16px 64px 16px 256px",
          display: "inline-flex",
          flexGrow: 1,
          alignItems: "center",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          backgroundColor: "#00578f",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row-reverse",
          }}
        >
          <p
            style={{
              margin: "0 16px",
              fontSize: "48px",
              fontFamily: "Josefin Sans",
            }}
          >
            <u>PenWell,WriteWell</u>
          </p>
          <button
            style={PaperButtonStyle}
            onClick={() => {
              router.push("/overview");
            }}
          >
            Overview
          </button>
          <button style={PaperButtonStyle} onClick={handleUpload}>
            Upload
          </button>
        </div>
        <div
          style={{
            alignItems: "center",
            marginRight: "32px",
          }}
        >
          <SearchBar />
        </div>
      </div>
    </>
  );
}
