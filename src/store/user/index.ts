import userGet, {
  start as userGetStart,
  stop as userGetStop,
  success as userGetSuccess,
  error as userGetError,
} from "./slices/get";
import userLogin, {
  start as userLoginStart,
  stop as userLoginStop,
  success as userLoginSuccess,
  error as userLoginError,
} from "./slices/login";
import userRegister, {
  start as userRegisterStart,
  stop as userRegisterStop,
  error as userRegisterError,
  success as userRegisterSuccess,
} from "./slices/register";

import getUserSaga from "./sagas/getUserSaga";

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
  getUserSaga,
};
