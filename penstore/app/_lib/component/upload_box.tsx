import { ReadyUpload } from "./upload_container";

interface IUploadMenuProps {
  x: number;
  y: number;
  closeMenu: () => void;
}

export const UploadMenu: React.FC<IUploadMenuProps> = ({ x, y, closeMenu }) => {
  const ref = closeMenu;

  return (
    <div
      ref={ref}
      style={{
        top: x,
        left: y,
        zIndex: "80",
        position: "absolute",
        transform: "translate(-25%, 3%)",
      }}
    >
      <ReadyUpload
        submit={() => {
          console.log("submit");
        }}
        cancel={closeMenu}
      />
    </div>
  );
};
