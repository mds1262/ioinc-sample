import { Module, ActionContext } from "vuex";
import { RootState } from "@/store";

export interface MapState {
    currentMapInfo:CurrentMapState
    mapMarkers:Array<MapMarkerState>
}

interface MapMarkerState {
    title: string, 
    lat: number, 
    lng: number 
}

interface CurrentMapState {
    accuracy: number,
    latitude: number,
    longitude: number
}

export const moduleMap: Module<MapState, RootState> = {
  namespaced: true,
  state: () => ({
    mapMarkers: [],

    currentMapInfo:{
        accuracy:0,
        latitude:0,
        longitude:0
    }
  }),
  mutations: {
    addMarker(state, value){
        // state.markers.push(value);
        // state.currentMapInfo = value;
    },

    updateCurrentPosition(state, value) {
        state.currentMapInfo = value;
    }
  },
  getters: {
    // getMarkers(state, getters, rootState) {
    //   return state.currentMapInfo;
    // },

    getCurrentPosition(state, getters, rootState) {
        return state.currentMapInfo;
    }
  },
  actions: {
    // addMarkerAction({ state, commit, rootState }, payload){
    //     // commit('addMarkerAction', payload);
    // }
    updateCurrentPositionAction({ state, commit, rootState }, payload) {
        commit('updateCurrentPosition', payload);
    }
  }
};
