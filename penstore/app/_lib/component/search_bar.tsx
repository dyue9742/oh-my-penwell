import { ZoomIcon } from "./svg";

interface ISearchBarProps {}

export const SearchBar: React.FC<ISearchBarProps> = () => {
  return (
    <div
      style={{
        alignItems: "center",
        position: "relative",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <input placeholder="Search..." />
        <div style={{ right: 0, position: "absolute", paddingRight: "32px" }}>
          <ZoomIcon />
        </div>
      </div>
    </div>
  );
};
