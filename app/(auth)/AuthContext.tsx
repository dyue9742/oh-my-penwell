import { createContext, useContext } from "react";

interface AuthContextProps {}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function ohMyContext() {
  const user = useContext(AuthContext);

  if (user === undefined) {
    return undefined;
  }

  return user;
}
