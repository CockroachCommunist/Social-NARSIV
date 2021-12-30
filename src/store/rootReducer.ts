import { combineReducers } from "redux";
import { userGet, userLogin, userRegister } from "./user";

export default combineReducers({
  user: combineReducers({
    get: userGet,
    login: userLogin,
    register: userRegister,
  }),
});

