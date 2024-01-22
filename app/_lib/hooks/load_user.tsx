import { useContext } from "react";
import LoginContext, { UseLoginContextType } from "@/app/context/UserProvider";

const loadUser = (): UseLoginContextType => {
  return useContext(LoginContext);
};

export default loadUser;
