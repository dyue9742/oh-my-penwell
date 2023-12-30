import * as React from "react";
import {
  Document,
  Home,
  LogOut,
  Me,
  PanChart,
  Settings,
} from "../util/svg-colc";
import { TinyPaperButtonStyle } from "../util/paper-color";
import { NextRouter } from "next/router";

const PUSH = {
  Home: ["/overview", <Home />],
  Me: ["/me", <Me />],
  Document: ["/document", <Document />],
  PanChart: ["/panchart", <PanChart />],
  Settings: ["/settings", <Settings />],
  LogOut: ["/logout", <LogOut />],
};

interface RouterProps {
  router: NextRouter;
}

const RouterBar: React.FC<RouterProps> = ({ router }) => {
  return (
    <div>
      {Object.entries(PUSH).map(([key, value]) => {
        return (
          <button
            key={key}
            style={TinyPaperButtonStyle}
            onClick={() => {
              console.log(value[0]);
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
