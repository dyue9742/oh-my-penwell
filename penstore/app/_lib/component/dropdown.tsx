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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p>This is a vertical page, click and appear.</p>
      <CurrentUser />
      <RouterBar router={router} />
    </div>
  );
};
