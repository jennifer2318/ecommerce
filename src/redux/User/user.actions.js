import "./user.types";
import userTypes from "./user.types";

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});
