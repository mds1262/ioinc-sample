import { RootState } from "@/store";
import { Module } from "vuex";
import { userInfoType } from "@/common/utils/login/loginAuth";

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
      name: "",
      address: "",
    },
  }),
  mutations: {
    // updateRecoveredPassword(state, value){
    //     state.isRecoveredPassword = value;
    // },

    updateLoggedIn(state, value) {
      if (!value) {
        state.isLoggedIn = false;
        return;
      }

      state.user = value;
      state.isLoggedIn = true;
    },
  },
  getters: {},
  actions: {
    //   recoverPasswordAction({ state, commit, rootState }, payload){
    //       commit('updateRecoveredPassword', payload);
    //   },

    loginInAction({ state, commit, rootState }, payload) {
      commit("updateLoggedIn", payload);
    },
  },
};
