import * as React from "react";
import { DocIco, RemoveIco } from "../util/svg-colc";

interface ItemCardProp {
  file: File;
  onClick: () => void;
}

const ItemRemove: React.FC<ItemCardProp> = ({ file, onClick }) => {
  return (
    <button
      name={file.name}
      onClick={onClick}
      style={{
        border: "none",
        background: "none",
      }}
    >
      <RemoveIco />
    </button>
  );
};

export const ItemCard: React.FC<ItemCardProp> = ({ file, onClick }) => {
  return (
    <div
      style={{
        height: "64px",
        display: "flex",
        fontSize: "14px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ItemRemove file={file} onClick={onClick} />
      <div
        style={{
          width: "60%",
          height: "64px",
          display: "inline-block",
        }}
      >
        <p>{file.name}</p>
        <p>Size: {file.size}</p>
      </div>
      <DocIco />
    </div>
  );
};
