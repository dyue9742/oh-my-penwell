import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadMenu } from "./upload_box";
import { Upright } from "./dropdown";

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
      {uploadIsOpen && (
        <UploadMenu
          x={uploadIsOpen.x}
          y={uploadIsOpen.y}
          closeMenu={closeMenu}
        />
      )}

      {showMenu && <Upright router={router} closeMenu={handleMenu} />}

      <button style={{ position: "absolute" }}>p</button>

      <div
        style={{
          display: "inline-flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "inline-flex", flexDirection: "row-reverse" }}>
          <p style={{ fontFamily: "Josefin Sans" }}>
            <u>PenWell,WriteWell</u>
          </p>
          <button onClick={() => router.push("/")}>General</button>
          <button onClick={() => handleUpload}>Upload</button>
        </div>
      </div>
    </>
  );
};
