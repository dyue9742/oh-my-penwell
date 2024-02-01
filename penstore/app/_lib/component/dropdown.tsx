import { clickOutside } from "@/app/_lib/util/click-outside";
import { CurrentUser } from "./userpack";
import { RouterBar } from "./router_bar";

interface IUprightProps {
  router: any;
  closeMenu: () => void;
}

export const Upright: React.FC<IUprightProps> = ({ router, closeMenu }) => {
  const ref = clickOutside(closeMenu);

  return (
    <div
      ref={ref}
      style={{
        backdropFilter: "blur(16px)",
        border: "1px solid #393e46",
        borderRadius: "4px",
        color: "#cecece",
        top: "128px",
        width: "256px",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        fontFamily: "Josefin Sans",
        justifyContent: "space-between",
      }}
    >
      <p>This is a vertical page, click and appear.</p>
      <CurrentUser />
      <RouterBar router={router} closeMenu={closeMenu} />
    </div>
  );
};
