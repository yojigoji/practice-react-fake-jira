import React, { ReactNode } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
import { useMount } from "utils";
import { useAsync } from "utils/use-async";
import { FullPageErrorFallback, FullPageLoading } from "components/lib";
import * as authStore from "store/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { bootstrap, selectUser } from "store/auth.slice";
import { useAppDispatch } from "store";

export interface AuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  console.log("it is authprovider");
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
  } = useAsync<User | null>();
  const dispatch: (...args: unknown[]) => Promise<User> = useAppDispatch();

  useMount(() => {
    run(dispatch(bootstrap()));
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error}></FullPageErrorFallback>;
  }

  return <div>{children}</div>;
};

export const useAuth = () => {
  const dispatch: (...args: unknown[]) => Promise<User> = useAppDispatch();
  const user = useSelector(selectUser);
  const login = (form: AuthForm) => dispatch(authStore.login(form));
  const register = (form: AuthForm) => dispatch(authStore.register(form));
  const logout = () => dispatch(authStore.logout());

  return {
    user,
    login,
    register,
    logout,
  };

  // const context = React.useContext(AuthContext);
  // if (!context) {
  //   throw new Error("useAuth必须在AuthProvider中使用");
  // }
  // return context;
};
