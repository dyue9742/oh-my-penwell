"use client";

import * as React from "react";
import Register from "./(auth)/register/page";
import {
  UseLoginContextType,
  initLoginContextState,
} from "@/app/_lib/contexts/user_provider";
import General from "@/app/(dashboard)/_general/page";

const LoginContext = React.createContext<UseLoginContextType>(
  initLoginContextState,
);

const HomePage = () => {
  const { dispatch, REDUCER_ACTIONS, user, authenticated } =
    React.useContext(LoginContext);

  return (
    <LoginContext.Provider
      value={{ dispatch, REDUCER_ACTIONS, user, authenticated }}
    >
      {authenticated ? <General /> : <Register />}
    </LoginContext.Provider>
  );
};

export default HomePage;
