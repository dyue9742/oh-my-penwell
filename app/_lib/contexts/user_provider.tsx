"use client";

import { useMemo, useReducer } from "react";

// Sign up
type ShadowUser = {
  email: string;
  password: string;
};

// Sign in
type RobustUser = {
  id: number;
  email: string;
  username: string;
  lastname: string;
  firstname: string;
};

function isRobust(user: RobustUser | ShadowUser): user is RobustUser {
  return (user as RobustUser).id !== undefined;
}

type Auth = {
  token: string;
  refresh: string;
};

type User = ShadowUser | (RobustUser & Auth);

type LoginStateType = {
  user: User | undefined;
  authenticated: boolean;
};

const initLoginState: LoginStateType = {
  user: undefined,
  authenticated: false,
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
  switch (action.type) {
    case USER_REDUCER_ACTION_TYPE.LOGIN: {
      if (isRobust(action.payload)) {
        const { id, email, username, lastname, firstname, token, refresh } =
          action.payload;
        console.log(id, email, username, lastname, firstname, token, refresh);
      }
      return initLoginState;
    }
    case USER_REDUCER_ACTION_TYPE.LOGOUT: {
      if (isRobust(action.payload)) {
        const { id, email, username, lastname, firstname, token, refresh } =
          action.payload;
        console.log(id, email, username, lastname, firstname, token, refresh);
      }
      return initLoginState;
    }
    case USER_REDUCER_ACTION_TYPE.REGISTER: {
      if (!isRobust(action.payload)) {
        const { email, password } = action.payload;
        console.log(email, password, state.authenticated);
      }
      return initLoginState;
    }
    default:
      return initLoginState;
  }
};

const useLoginContext = (initLoginState: LoginStateType) => {
  const [state, dispatch] = useReducer(reducer, initLoginState);

  const REDUCER_ACTIONS = useMemo(() => {
    return USER_REDUCER_ACTION_TYPE;
  }, []);

  const user = state.user;

  const authenticated = state.authenticated;

  return { dispatch, REDUCER_ACTIONS, user, authenticated };
};

export type UseLoginContextType = ReturnType<typeof useLoginContext>;

export const initLoginContextState: UseLoginContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: USER_REDUCER_ACTION_TYPE,
  user: undefined,
  authenticated: false,
};
