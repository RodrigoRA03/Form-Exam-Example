import { useContext, useRef } from "react";
import { Box, Button, Container, FormLabel, Grid } from "@mui/material"
import { Form, Formik } from "formik"
import { MyTextInput } from "./ui/MyTextInput"
import * as Yup from "yup";
import FormContext from "../context/formsContext/formContext";
import UiContext from "../context/uiContext/uiContext";

export const FormLifycycleMethods = () =>{
    const InputSubmitRef = useRef();

    const { lifeCycleMethodsQuations , addLifeCycleMethodsQuations } = useContext(FormContext);
    const { handleNextStep , handleBackStep } = useContext(UiContext);

    const handleClickButtonNext = () =>{
        InputSubmitRef.current.click();
    }
    return(
        <Container sx={{marginTop:'50px'}}>
                <Formik
                   initialValues={{
                    getInitialProps: lifeCycleMethodsQuations?.getInitialProps || '',
                    componentDidMount: lifeCycleMethodsQuations?.componentDidMount || '',
                    shouldComponetUpdate: lifeCycleMethodsQuations?.shouldComponetUpdate || '',
                    componentDidUpdate: lifeCycleMethodsQuations?.componentDidUpdate|| '',
                    componentWillUnmount: lifeCycleMethodsQuations?.componentWillUnmount || ''
                   }}
                   validationSchema={
                       Yup.object({
                         getInitialProps:Yup.string().required('La pregunta 9 es un campo requerido'),
                         componentDidMount:Yup.string().required('La pregunta 10 es un campo requerido'),
                         shouldComponetUpdate:Yup.string().required('La pregunta 11 es un campo requerido'),
                         componentDidUpdate:Yup.string().required('La pregunta 12 es un campo requerido'),
                         componentWillUnmount:Yup.string().required('La pregunta 13 es un campo requerido'),
                       })
                   }
                   onSubmit={(data)=>{
                    addLifeCycleMethodsQuations(data);
                    handleNextStep();
                   }}

                >
                    {formik => (
                    <Form style={{width:'100%'}}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <FormLabel>Explica el ciclo de vida de los componentes:</FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="getInitialProps"
                        label="Explica getInitialProps"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="componentDidMount"
                        label="Explica componentDidMount"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="shouldComponetUpdate"
                        label="Explica shouldComponetUpdate "
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="componentDidUpdate"
                        label="Explica componentDidUpdate"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="componentWillUnmount"
                        label="Explica componentWillUnmount"
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