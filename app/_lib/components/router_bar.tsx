import * as React from "react";
import {
  Home,
  Profile,
  Pattern,
  Setting,
  Article,
} from "@/app/_lib/components/svg";
import { TinyPaperButtonStyleWithBorder } from "@/app/_lib/utils/paper_color_style";
import { NextRouter } from "next/router";

const PUSH = {
  Home: ["/", <Home />],
  Profile: ["/profile", <Profile />],
  Article: ["/article", <Article />],
  Pattern: ["/pattern", <Pattern />],
  Setting: ["/setting", <Setting />],
};

interface IRouterProps {
  router: NextRouter;
}

const RouterBar: React.FC<IRouterProps> = ({ router }) => {
  return (
    <div>
      {Object.entries(PUSH).map(([key, value]) => {
        return (
          <button
            key={key}
            style={TinyPaperButtonStyleWithBorder}
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

export default RouterBar;
