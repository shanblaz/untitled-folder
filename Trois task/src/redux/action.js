import {
  LOGIN_SUCCESS,
  LOGIN,
  GET_PRODUCT,
  LOGIN_FAILURE,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCESS,
  CLEAR_ERROR,
} from "./types";

export const login = (credentials, history) => ({
  type: LOGIN,
  credentials,
  history,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const getProducts = (limit, page, filter) => ({
  type: GET_PRODUCT,
  limit,
  page,
  filter,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCT_SUCESS,
  payload,
});

export const getProductsFail = (payload) => ({
  type: GET_PRODUCT_FAIL,
  payload,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
