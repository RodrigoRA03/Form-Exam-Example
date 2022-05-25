import { useReducer } from "react";
import FormContext from "./formContext";
import { FormReducer } from "./formReducer";
import {types} from "../../types/types";

const FormState = ({children}) =>{

    const initialState = {
        questionsReactFeatures:{},
        generalQuestions:{},
        lifeCycleMethodsQuations:{},
        checkboxsQuestions:{}
    }
  
    const [ state , dispatch ] = useReducer(FormReducer , initialState);


    //functions
    const addQuestionsReactFeatures = (questions) =>{
          dispatch({
              type: types.addQuestionsReactFeatures,
              payload:questions
          });
    }

    const addGeneralQuestions = (questions) =>{
        dispatch({
            type: types.addGeneralAnswers,
            payload:questions
        });
    }

    const addLifeCycleMethodsQuations = (questions) =>{
        dispatch({
            type: types.addLifecycleMethods,
            payload:questions
        });
    }

    const addCheckboxsQuestions = (questions) =>{
        dispatch({
            type: types.addCheckboxOptions,
            payload:questions
        });
    }

    const handleResetForm = () =>{
        dispatch({
            type:types.resetForm
        })
    }

   return(
       <FormContext.Provider
         value={{
            questionsReactFeatures:state.questionsReactFeatures,
            generalQuestions:state.generalQuestions,
            lifeCycleMethodsQuations:state.lifeCycleMethodsQuations,
            checkboxsQuestions:state.checkboxsQuestions,
            addQuestionsReactFeatures,
            addGeneralQuestions,
            addLifeCycleMethodsQuations,
            addCheckboxsQuestions,
            handleResetForm
         }}
       >
          {children}
       </FormContext.Provider>
   )
}

export default FormState;