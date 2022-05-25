import { Box, Button, Container, FormLabel, Grid } from "@mui/material"
import { Form, Formik } from "formik"
import { MyTextInput } from "./ui/MyTextInput"
import * as Yup from "yup";
import { useContext, useRef } from "react";
import FormContext from "../context/formsContext/formContext";
import UiContext from "../context/uiContext/uiContext";

export const FormReactFeatures = () =>{
    const InputSubmitRef = useRef();

    const { questionsReactFeatures , addQuestionsReactFeatures } = useContext(FormContext);
    const { handleNextStep } = useContext(UiContext);

    const handleClickButtonNext = () =>{
        InputSubmitRef.current.click();
    }


    return (
        <Container sx={{marginTop:'50px'}}>
                <Formik
                   initialValues={{
                     jsx_description: questionsReactFeatures?.jsx_description ||'',
                     components_description:questionsReactFeatures?.components_description ||'',
                     virtual_dom_description:questionsReactFeatures?.virtual_dom_description ||'',
                     one_way_description:questionsReactFeatures?.one_way_description ||'',
                     performance_description:questionsReactFeatures?.performance_description ||''
                   }}
                   validationSchema={
                       Yup.object({
                         jsx_description:Yup.string().required('El campo JSX descripción es requerido'),
                         components_description:Yup.string().required('El campo components descripción es requerido'),
                         virtual_dom_description:Yup.string().required('El campo virtual DOM descripción es requerido'),
                         one_way_description:Yup.string().required('El campo one way descripción es requerido'),
                         performance_description:Yup.string().required('El campo performance descripción es requerido')
                       })
                   }
                   onSubmit={(data)=>{
                    addQuestionsReactFeatures(data);
                    handleNextStep();
                   }}

                >
                    {formik => (
                    <Form style={{width:'100%'}}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <FormLabel>1.-Describe React Features:</FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="jsx_description"
                        label="¿Qué es JSX?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="components_description"
                        label="¿Qué es un componente?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="virtual_dom_description"
                        label="¿Qué es virtual DOM?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="one_way_description"
                        label="¿Qué es one-wey data-bindings?"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <MyTextInput
                        name="performance_description"
                        label="¿Qué es performance?"
                        />
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                     <Box sx={{ display:'flex', justifyContent:'flex-end'}}>
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