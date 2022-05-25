import { useReducer } from "react";
import { UiReducer } from "./uiReducer";
import {types} from "../../types/types";
import UiContext from "./uiContext";

const UiState = ({children}) =>{

    const initialState = {
        activeStep:0
    }
  
    const [ state , dispatch ] = useReducer(UiReducer , initialState);

    const handleNextStep = () =>{
        dispatch({
            type:types.nextStepIncrement,
            payload:state.activeStep + 1
        })
    }

    const handleBackStep = () =>{
        dispatch({
            type:types.backStepIncrease,
            payload: state.activeStep - 1
        })
    }
    const handleResetStep = () =>{
        dispatch({
            type:types.resetStep
        })
    }
    
    return(
       <UiContext.Provider
         value={{
            activeStep:state.activeStep,
            handleNextStep,
            handleBackStep,
            handleResetStep
         }}
       >
          {children}
       </UiContext.Provider>
   )
}

export default UiState;