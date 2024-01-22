import * as React from "react";
import { Zoom } from "@/app/_lib/components/svg";

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = () => {
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
            border: "3px solid #0087af",
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
