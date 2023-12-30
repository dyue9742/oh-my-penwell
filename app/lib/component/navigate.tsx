"use client";

import React, { useState } from "react";
import SearchBar from "@/app/lib/component/search-bar";
import { Upright } from "@/app/lib/component/dropdown";
import { UploadMenu } from "@/app/lib/component/upload-box";
import { PaperButtonStyle } from "@/app/lib/util/paper-color";
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
          backgroundColor: "#ececec",
          border: "6px solid #005f87",
          color: "#005f87",
          width: "128px",
          height: "128px",
          cursor: "context-menu",
          position: "absolute",
          fontSize: "128px",
          fontFamily: "Josefin Sans",
        }}
        onClick={handleMenu}
      >
        p
      </button>
      <div
        style={{
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          backgroundColor: "#0087af",
          alignItems: "center",
          color: "#eeeeee",
          height: "64px",
          padding: "16px 64px 16px 256px",
          display: "inline-flex",
          flexGrow: 1,
          flexDirection: "row-reverse",
          justifyContent: "space-between",
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
              fontSize: "64px",
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
