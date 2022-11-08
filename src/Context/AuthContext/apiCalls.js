import axios from "axios";
import { loginFaliure, loginStart, loginSuccess } from "./Authactions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFaliure());
  }
};
