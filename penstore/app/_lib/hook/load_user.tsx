"use client";

import { useContext } from "react";
import {
  LoginContext,
  UseLoginContextType,
} from "@/app/_lib/context/user_provider";

export const loadUser = (): UseLoginContextType => {
  return useContext(LoginContext);
};
