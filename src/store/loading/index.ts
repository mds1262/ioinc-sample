import { Module, ActionContext } from "vuex";
import { RootState } from "@/store";

export interface LoadingState {
  isShow: boolean;
}

export const moduleLoading: Module<LoadingState, RootState> = {
  namespaced: true,
  state: () => ({
    isShow: false
  }),
  mutations: {
    updateLoadingState(state, value){
        state.isShow = value;
    }
  },
  getters: {
    getLoadingState(state, getters, rootState) {
      return state.isShow;
    }
  },
  actions: {
    updateLoadingAction({ state, commit, rootState }, payload){
        commit('updateLoadingState', payload);
    }
  }
};
