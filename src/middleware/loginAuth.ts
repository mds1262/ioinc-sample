import store from "@/store";

const excludePath = ["/login", "/loading"];

const loginValidate = (to, _, next) => {
  const validPaths = excludePath.filter((path) => to.path === path);
  const isLogin = store.getters["moduleLogin/userLoginStatus"];

  if (validPaths.length > 0) {
    next();
    return;
  }

  console.log(isLogin)
  if (isLogin) {
    next();
    return;
  }

  next("/login");
};

export { loginValidate };
