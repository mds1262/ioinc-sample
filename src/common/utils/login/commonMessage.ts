import { ToastOptions } from '@/common/utils/common/toast' 
type LoginStep = "login" | "register" | "forgot"


// const loginToast: loginToastType = {
//   position: '',
//   message: '',
//   color: '',
//   duration: 0
// }

const loginToastOptions = (step:LoginStep, isSuccess?:boolean):ToastOptions => {
  switch (step) {
    case "forgot":
      if (!isSuccess) {
        return {
          position: "bottom",
          message: "Insert Your Email",
          color: "danger",
          duration: 3000,
        };
      }
      return {
        position: "bottom",
        message: "Send Email for Your Reset Password",
        color: "primary",
        duration: 3000,
      };
    case "register":
      return {
        position: "bottom",
        message: "move register",
        color: "danger",
        duration: 3000,
      };

    default:
      if (isSuccess) {
        return {
          position: "bottom",
          message: "Successed Login",
          color: "primary",
          duration: 2000,
        };
      }
      return {
        position: "bottom",
        message: "Failed Login",
        color: "primary",
        duration: 2000,
      };
  }
};

export { loginToastOptions };
