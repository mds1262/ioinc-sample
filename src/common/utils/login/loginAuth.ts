import { loginSign } from "./firebase";

export interface LoginInfo {
  loginEmail: string;
  loginPw: string;
}

interface LoginResultState {
  isSuccess: boolean;
  message: string;
  userInfo: userInfoType;
}

export interface userInfoType {
  name: string;
  address: string;
}
const loginCheck = async (loginInfo: LoginInfo): Promise<LoginResultState> => {
  const fakeUserInfo = {
    name: "NAMB",
    address: "America",
  };

  const loginResult = {
    isSuccess: false,
    message: "Login Failed",
    userInfo: {
      name: "",
      address: "",
    },
  };

  const userCredentinal = await loginSign(loginInfo).catch((err) => {
    loginResult.message = err.message;
    return loginResult;
  });

  console.log(userCredentinal);

  loginResult.isSuccess = true;
  loginResult.message = "Success Login";
  loginResult.userInfo = fakeUserInfo;

  return loginResult;
};

export { loginCheck };
