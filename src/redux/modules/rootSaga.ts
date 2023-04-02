import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

export default function* footSaga() {
  yield all([authSaga()]);
}
