import { types } from "../../types/types";

export const FormReducer = (state , action) =>{
    switch (action.type) {
        case types.addQuestionsReactFeatures:
            return{
                ...state,
                questionsReactFeatures:action.payload
            }

        case types.addGeneralAnswers:
            return{
                ...state,
                generalQuestions:action.payload
            }

        case types.addLifecycleMethods:
            return{
                ...state,
                lifeCycleMethodsQuations:action.payload
            }
        case types.addCheckboxOptions:
            return{
                ...state,
                checkboxsQuestions:action.payload
            }
        case types.resetForm:
            return{
                ...state,
                questionsReactFeatures:{},
                generalQuestions:{},
                lifeCycleMethodsQuations:{},
                checkboxsQuestions:{}
            }
        default:
            return state;
    }
}