// import store from "@/store";

const excludePath = ["/login", "/loading", "/"];

const loginValidate = (to, _, next) => {
  const strLoginUserInfo = localStorage.getItem("loginUserInfo");
  let LoginUserInfo;

  if (strLoginUserInfo) {
    LoginUserInfo = JSON.parse(strLoginUserInfo);
  }

  // const LoginUserInfo = JSON.parse(strLoginUserInfo)

  const validPaths = excludePath.filter((path) => to.path === path);

  if (validPaths.length > 0) {
    if (to.path === "/login") {
      if (LoginUserInfo.isLoggedIn) {
        next("/home");
        return;
      }
    }

    next();
    return;
  }

  if (!LoginUserInfo) {
    next("/login");
  }

  if(!LoginUserInfo.isLoggedIn){
    next("/login");
  }

  next();
};

export { loginValidate };
