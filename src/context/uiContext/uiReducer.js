import { types } from "../../types/types";

export const UiReducer = (state , action) =>{
    switch (action.type) {
        case types.nextStepIncrement:
            return{
                ...state,
                activeStep:action.payload
            }
        case types.backStepIncrease:
            return{
                ...state,
                activeStep:action.payload
            }
        case types.resetStep:
            return{
                ...state,
                activeStep:0
            }
        default:
            return state;
    }
}