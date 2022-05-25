import { useContext, useState } from "react"
import { Box, Step, StepButton, Stepper } from "@mui/material"

import { stepsDescription } from "../staticData/formStep";
import { Container } from "@mui/system";
import { FormReactFeatures } from "../components/formReactFeatures";
import { FormCheckboxOptions } from "../components/formCheckboxOptions";
import { FormGeneralAnswers } from "../components/formGeneralAnswers";
import { FormData } from "../components/formData";
import { FormLifycycleMethods } from "../components/formLifycycleMethods";
import UiContext from "../context/uiContext/uiContext";
import { AdminTemplate } from "../templates/adminTemplate";

export const StepScreen = () =>{
    const { activeStep } = useContext(UiContext);

    // const [activeStep , setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});


    
    const totalSteps = () => {
      return stepsDescription.length;
    };
    
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
    
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };



    return(
      <AdminTemplate>
        <Container sx={{marginTop:'70px'}}>
        <Box sx={{width:'100%'}}>
            <Stepper activeStep={activeStep}>
               {stepsDescription.map((label , index)=>(
                   <Step key={label} completed={completed[index]}>
                   <StepButton color="inherit">
                     {label}
                   </StepButton>
                 </Step>
               ))
               }
            </Stepper>
            <div>
                {
                    activeStep === 0 ? 
                    <FormReactFeatures
    
                    />
                    :
                    activeStep === 1 ?
                     <FormGeneralAnswers
                      
                     />
                    :
                    activeStep === 2 ? 
                      <FormLifycycleMethods
                      />
                    :
                    activeStep === 3 ? 
                        <FormCheckboxOptions/>
                    :
                    activeStep > 3 ?
                      <FormData/>
                    :
                    null

                    
                }
            </div>
        </Box>
        </Container>
        </AdminTemplate>
    )
}