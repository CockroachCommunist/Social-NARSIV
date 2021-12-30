import userGet, {
  start as userGetStart,
  stop as userGetStop,
  success as userGetSuccess,
  error as userGetError,
} from "./get";
import userLogin, {
  start as userLoginStart,
  stop as userLoginStop,
  success as userLoginSuccess,
  error as userLoginError,
} from "./login";
import userRegister, {
  start as userRegisterStart,
  stop as userRegisterStop,
  error as userRegisterError,
  success as userRegisterSuccess,
} from "./register";

export {
  userGet,
  userGetStart,
  userGetStop,
  userGetError,
  userGetSuccess,
  userLogin,
  userLoginStart,
  userLoginStop,
  userLoginError,
  userLoginSuccess,
  userRegister,
  userRegisterStart,
  userRegisterStop,
  userRegisterError,
  userRegisterSuccess,
};
