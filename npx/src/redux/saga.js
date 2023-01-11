import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  getProductsSuccess,
  getProductsFail,
  loginSuccess,
  loginFail,
} from "./action";
import { LOGIN, GET_PRODUCT } from "./types";

function* fetchProductSaga(data) {
  try {
    // we can pass token in api if we need here
    const response = yield call(
      axios.get,
      `https://dummyjson.com/products?limit=${data.limit}&skip=${data.page}&title=${data.filter}`
    );
    yield put(getProductsSuccess(response.data));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}

function* login(data) {
  try {
    const headers = { "Content-Type": "application/json" };
    const response = yield call(
      axios.post,
      "https://dummyjson.com/auth/login",
      { username: data.credentials.email, password: data.credentials.password },
      { headers: headers }
    );
    yield put(loginSuccess(response.data.token));
    localStorage.setItem("token", response.data.token);
    data.history.push("/home");
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(GET_PRODUCT, fetchProductSaga);
}
