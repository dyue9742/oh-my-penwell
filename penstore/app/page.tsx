"use client";

import General from "@/app/(dashboard)/general/page";
import Register from "@/app/(auth)/register/page";
import { loadUser } from "@/app/_lib/hook/load_user";
import { LoginContext } from "@/app/_lib/context/user_provider";

const HomePage: React.FC = () => {
  const { dispatch, REDUCER_ACTIONS, user, auth } = loadUser();

  return (
    <LoginContext.Provider value={{ dispatch, REDUCER_ACTIONS, user, auth }}>
      {auth ? <General /> : <Register />}
    </LoginContext.Provider>
  );
};

export default HomePage;
