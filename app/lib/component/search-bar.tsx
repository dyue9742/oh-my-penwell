import * as React from "react";
import { Zoom } from "@/app/lib/util/svg-colc";

interface SearchBarProps { }

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div
      style={{
        alignItems: "center",
        marginRight: "32px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          position: "relative",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          placeholder="Search..."
          style={{
            boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
            border: "4px solid #005f87",
            color: "#005f87",
            height: "32px",
            margin: "0 8px",
            padding: "0 32px",
            fontSize: "16px",
            position: "relative",
            borderRadius: "32px",
            backgroundColor: "#ececec",
          }}
        ></input>
        <div
          style={{
            right: 0,
            position: "absolute",
            paddingRight: "32px",
          }}
        >
          <Zoom />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
