"use client";

import { createContext, useMemo, useReducer } from "react";

type Auth = {
  id: number;
  tok: string;
  ref: string;
};

type ShadowUser = {
  email: string;
  fullname: string;
  username: string;
  password: string;
};

type RobustUser = ShadowUser & Auth;

type User = ShadowUser | RobustUser;

const guest: RobustUser = {
  id: 0,
  tok: "tok-demo",
  ref: "ref-demo",
  email: "guest@demo.com",
  fullname: "guest, demo",
  username: "guest",
  password: "guest",
};

function isRobust(user: User): user is RobustUser {
  return (user as RobustUser).id !== undefined;
}

type LoginStateType = {
  user: User | undefined;
  auth: boolean;
};

const initLoginState: LoginStateType = {
  user: undefined,
  auth: false,
};

enum USER_REDUCER_ACTION_TYPE {
  LOGIN,
  LOGOUT,
  REGISTER,
}

type ReducerAction = {
  type: USER_REDUCER_ACTION_TYPE;
  payload?: User;
};

const reducer = (
  state: LoginStateType,
  action: ReducerAction,
): LoginStateType => {
  if (!action.payload) {
    return initLoginState;
  }

  var newState: LoginStateType = { user: guest, auth: true };

  switch (action.type) {
    case USER_REDUCER_ACTION_TYPE.LOGIN: {
      console.log("Login with...", state.user);
      isRobust(action.payload) ? newState : initLoginState;
    }
    case USER_REDUCER_ACTION_TYPE.LOGOUT: {
      console.log("Logout with...", state.user);
      isRobust(action.payload) ? newState : initLoginState;
    }
    case USER_REDUCER_ACTION_TYPE.REGISTER: {
      console.log("Register with...", state.user);
      isRobust(action.payload) ? newState : initLoginState;
    }
    default:
      return initLoginState;
  }
};

const useLoginContext = (initState: LoginStateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const REDUCER_ACTIONS = useMemo(() => {
    return USER_REDUCER_ACTION_TYPE;
  }, []);

  const user = state.user;

  const auth = state.auth;

  return { dispatch, REDUCER_ACTIONS, user, auth };
};

export type UseLoginContextType = ReturnType<typeof useLoginContext>;

export const initLoginContextState: UseLoginContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: USER_REDUCER_ACTION_TYPE,
  user: undefined,
  auth: false,
};

export const LoginContext = createContext<UseLoginContextType>(
  initLoginContextState,
);
