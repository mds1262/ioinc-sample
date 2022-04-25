import { RootState } from "@/store";
import { Module } from "vuex";
import { 
  UserCredential,
} from '@firebase/auth'
// interface LoginResultState {
//   isSuccess: boolean;
//   message: string;
//   userInfo: userInfoType;
// }
interface userInfoType {
  email?: string;
  accessToken?: string;
}
export interface LoginState {
  // isRecoveredPassword: boolean
  // isRecoveringPassword: boolean
  isLoggedIn: boolean;
  // isLoggingIn: boolean
  error?: any;
  user: userInfoType;
  newProperty?: any;
}

export const moduleLogin: Module<LoginState, RootState> = {
  namespaced: true,
  state: () => ({
    // isRecoveredPassword: false,
    isLoggedIn: false,
    user: {
      email: "",
      accessToken:"",
    },
  }),
  mutations: {
    // updateRecoveredPassword(state, value){
    //     state.isRecoveredPassword = value;
    // },

    updateLoginResult(state, value) {
      if (!value) {
        state.isLoggedIn = false;
        state.user = {
          email: '',
          accessToken: '',
        }
      }else{
        state.user = {
          email: value.user.email,
          accessToken:value.user.accessToken
        }
        state.isLoggedIn = true;
      }
      
      const loginUserInfo = {
        isLoggedIn: state.isLoggedIn,
        email: state.user.email,
        accessToken: state.user.accessToken
      }
      
      localStorage.setItem('loginUserInfo', JSON.stringify(loginUserInfo))
    },
  },
  getters: {
    userLoginStatus(state, getters, rootStat): boolean {
      return state.isLoggedIn;
    },
    loginUserInfo(state, getters, rootStat): userInfoType {
      return state.user;
    },    
  },
  actions: {
    // userLoginAction({ state, commit, rootState }, payload) {
    //   commit("updateRecoveredPassword", payload);
    // },

    loginInAction({ state, commit, rootState }, payload: UserCredential | undefined) {
        commit("moduleLogin/updateLoginResult", payload, {root : true} );
    },
  },
};
