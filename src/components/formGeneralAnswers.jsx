import { useContext, useRef } from "react";
import { Box, Button, Container, Grid } from "@mui/material"
import { Form, Formik } from "formik"
import { MyTextInput } from "./ui/MyTextInput"
import * as Yup from "yup";
import FormContext from "../context/formsContext/formContext";
import UiContext from "../context/uiContext/uiContext";

export const FormGeneralAnswers = () =>{
    const InputSubmitRef = useRef();

    const { generalQuestions ,addGeneralQuestions } = useContext(FormContext);
    const { handleNextStep , handleBackStep } = useContext(UiContext);

    const handleClickButtonNext = () =>{
        InputSubmitRef.current.click();
    }
    return (
        <Container sx={{marginTop:'50px'}}>
                <Formik
                   initialValues={{
                     answer9: generalQuestions?.answer9 || '',
                     answer10: generalQuestions?.answer10 || '',
                     answer11: generalQuestions?.answer11 || '',
                     answer12: generalQuestions?.answer12 || '',
                     answer13: generalQuestions?.answer13 || '',
                     answer14: generalQuestions?.answer14 || '',
                     answer15: generalQuestions?.answer15 || '',
                     answer16: generalQuestions?.answer16 || '',
                     answer17: generalQuestions?.answer17 || '',
                     answer18: generalQuestions?.answer18 || ''
                   }}
                   validationSchema={
                       Yup.object({
                         answer9:Yup.string().required('La pregunta 9 es un campo requerido'),
                         answer10:Yup.string().required('La pregunta 10 es un campo requerido'),
                         answer11:Yup.string().required('La pregunta 11 es un campo requerido'),
                         answer12:Yup.string().required('La pregunta 12 es un campo requerido'),
                         answer13:Yup.string().required('La pregunta 13 es un campo requerido'),
                         answer14:Yup.string().required('La pregunta 14 es un campo requerido'),
                         answer15:Yup.string().required('La pregunta 15 es un campo requerido'),
                         answer16:Yup.string().required('La pregunta 16 es un campo requerido'),
                         answer17:Yup.string().required('La pregunta 17 es un campo requerido'),
                         answer18:Yup.string().required('La pregunta 18 es un campo requerido'),
                       })
                   }
                   onSubmit={(data)=>{
                    addGeneralQuestions(data);
                    handleNextStep();
                   }}

                >
                    {formik => (
                    <Form style={{width:'100%'}}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer9"
                        label="9.- Describe los pasos para crear un proyecto nuevo en React"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer10"
                        label="10.- Explica como trabajan las listas en React"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer11"
                        label="11.- Escribe un ejemplo de un simple formulario en React"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer12"
                        label="12.- ¿Escribe un ejemplo de un arrow function?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer13"
                        label="13.- ¿Qué es el estado en React?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer14"
                        label="14.- ¿Cuál es el uso del metodo render() en react?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer15"
                        label="15.- ¿Cómo actualizas el estado de un componente?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer16"
                        label="16.- ¿Qué son las props en React?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer17"
                        label="17.- ¿Cómo pasas props entre componentes? Escribe un Ejemplo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="answer18"
                        label="18.- ¿Cómo puedes embeber 2 o más componentes en uno?"
                        />
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                     <Box sx={{ display:'flex', justifyContent:'space-between'}}>
                        <Button onClick={handleBackStep}>
                         Anterior
                        </Button>
                        <Button onClick={handleClickButtonNext}>
                         Siguiente
                        </Button>
                    </Box>
                    </Grid>
                    <button type="submit" ref={InputSubmitRef} hidden></button>
                </Form>
                )}
                
                </Formik>
        </Container>
    )
}