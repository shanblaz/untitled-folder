import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_PRODUCT_SUCESS,
  GET_PRODUCT_FAIL,
  CLEAR_ERROR,
} from "./types";

const initialState = {
  token: "",
  data: {
    limit: 10,
    products: [],
    skip: 0,
    total: 0,
  },
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case GET_PRODUCT_SUCESS:
      return { ...state, data: action.payload };
    case GET_PRODUCT_FAIL:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
