import { createStore } from "vuex";
import { moduleLoading, LoadingState } from './loading';
import { LoginState, moduleLogin } from './login';


export interface RootState{
    ModuleLoading:LoadingState,
    ModuleLogin:LoginState
}

export default createStore({
    modules: { 
        moduleLoading,
        moduleLogin 
    }
});