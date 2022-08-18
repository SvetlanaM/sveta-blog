
import { createContext } from "react";
import { AuthState, Dispatch } from "./AuthReducer";

export const AuthContext = createContext<AuthState>({
  authenticated: false,
  user: null,
  loading: true,
  token: null,
})

export const AuthDispatchContext = createContext<Dispatch>(null);