import "@/app/global.css";
import { NextRouter } from "next/router";
import { ArticleIcon, PatternIcon, ProfileIcon, SettingIcon } from "./svg";

const PUSH = {
  Profile: ["/profile", <ProfileIcon />],
  Article: ["/article", <ArticleIcon />],
  Pattern: ["/pattern", <PatternIcon />],
  Setting: ["/setting", <SettingIcon />],
};

interface IRouterProps {
  router: NextRouter;
  closeMenu: () => void;
}

export const RouterBar: React.FC<IRouterProps> = ({ router, closeMenu }) => {
  return (
    <div>
      {Object.entries(PUSH).map(([key, value]) => {
        return (
          <button
            className="btn-basic"
            key={key}
            style={{ margin: "4px", backgroundColor: "#393e46" }}
            onClick={() => {
              router.push(`${value[0]}`);
              closeMenu();
            }}
          >
            {value[1]}
          </button>
        );
      })}
    </div>
  );
};
