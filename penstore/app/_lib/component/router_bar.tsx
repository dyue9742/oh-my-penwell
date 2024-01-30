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
}

export const RouterBar: React.FC<IRouterProps> = ({ router }) => {
  return (
    <div>
      {Object.entries(PUSH).map(([key, value]) => {
        return (
          <button
            key={key}
            onClick={() => {
              router.push(`${value[0]}`);
            }}
          >
            {value[1]}
          </button>
        );
      })}
    </div>
  );
};
