import { Button, Container, Grid } from "@mui/material"
import { useContext } from "react"
import FormContext from "../context/formsContext/formContext"
import UiContext from "../context/uiContext/uiContext";

export const FormData = () =>{
    const { questionsReactFeatures, 
            generalQuestions, 
            lifeCycleMethodsQuations, 
            checkboxsQuestions,
            handleResetForm } = useContext(FormContext);
    const {handleResetStep} = useContext(UiContext);

    const handleClickButton = () =>{
        handleResetStep();
        handleResetForm();
    }

    return(
        <Container>
            <Grid container>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <pre>
                      <code>
                          {JSON.stringify(questionsReactFeatures , null , 2)}
                      </code>
                  </pre>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <pre>
                      <code>
                          {JSON.stringify(generalQuestions , null , 2)}
                      </code>
                  </pre>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <pre>
                      <code>
                          {JSON.stringify(lifeCycleMethodsQuations , null , 2)}
                      </code>
                  </pre>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <pre>
                      <code>
                          {JSON.stringify(checkboxsQuestions , null , 2)}
                      </code>
                  </pre>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Button variant="contained" onClick={handleClickButton}>
                     Finalizar
                  </Button>
               </Grid>
            </Grid>
            
        </Container>
    )
}