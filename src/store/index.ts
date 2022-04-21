import { createStore } from "vuex";
import { moduleLoading, LoadingState } from './loading';
import { LoginState, moduleLogin } from './login';
import { moduleMap, MapState } from './map';


export interface RootState{
    ModuleLoading:LoadingState,
    ModuleLogin:LoginState,
    ModuleMap:MapState, 
    
}

export default createStore({
    modules: { 
        moduleLoading,
        moduleLogin,
        moduleMap 
    }
});