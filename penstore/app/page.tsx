"use client";

import Register from "./(auth)/register/page";
import General from "./(dashboard)/general/page";
import { LoginContext } from "./_lib/context/user_provider";
import { loadUser } from "./_lib/hook/load_user";

const HomePage: React.FC = () => {
  const { dispatch, REDUCER_ACTIONS, user, auth } = loadUser();

  return (
    <LoginContext.Provider value={{ dispatch, REDUCER_ACTIONS, user, auth }}>
      {!auth ? <General /> : <Register />}
    </LoginContext.Provider>
  );
};

export default HomePage;
