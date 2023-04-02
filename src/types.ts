import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export type LoginReqtype = {
  email: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
