import { useContext, useRef } from "react";
import { Form, Formik } from "formik"
import { Box } from "@mui/system";
import { Button, Checkbox, Container, FormControlLabel, FormLabel, Grid, MenuItem, Radio } from "@mui/material"
import * as Yup from "yup";
import FormContext from "../context/formsContext/formContext";
import UiContext from "../context/uiContext/uiContext";
import { MySelect } from "./ui/MySelect";
import { MyRadioGroup } from "./ui/MyRadioGroup";

export const FormCheckboxOptions = () =>{
  const InputSubmitRef = useRef();
    const { checkboxsQuestions , addCheckboxsQuestions  } = useContext(FormContext);
    const { handleNextStep , handleBackStep } = useContext(UiContext);
    
    const handleClickButtonNext = () =>{
      InputSubmitRef.current.click();
  }

    return (
        <Container sx={{marginTop:'50px'}}>
                <Formik
                   initialValues={{
                     answer2: checkboxsQuestions?.answer2 ||'',
                     answer3: checkboxsQuestions?.answer3 ||'',
                     answer4: checkboxsQuestions?.answer4 ||'',
                     component_image_1: checkboxsQuestions?.component_image_1 ||'',
                     component_image_2: checkboxsQuestions?.component_image_2 ||''
                   }}
                   validationSchema={
                       Yup.object({
                         answer2:Yup.string().required('Este campo es requerido'),
                         answer3:Yup.string().required('Este campo es requerido'),
                         answer4:Yup.string().required('Este campo es requerido'),
                         component_image_1:Yup.string().required('Este campo es requerido'),
                         component_image_2:Yup.string().required('Este campo es requerido')
                       })
                   }
                   onSubmit={(data)=>{
                    addCheckboxsQuestions(data);
                    handleNextStep();
                   }}

                >
                    {formik => (
                    <Form style={{width:'100%'}}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <FormLabel>Verdad o Falso</FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <MyRadioGroup 
                          name="answer2"
                          label="¿Los Navegadores modernos pueden leer JSX directamente?"
                        >
                        <FormControlLabel value="verdadero" control={<Radio />} label="Verdadero" />
                        <FormControlLabel value="falso" control={<Radio />} label="Falso" />
                        </MyRadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                         <MyRadioGroup 
                          name="answer3"
                          label="¿En un navegador web un archivo JSX necesita ser transformado a un objeto regular de Js?"
                        >
                        <FormControlLabel value="verdadero" control={<Radio />} label="Verdadero" />
                        <FormControlLabel value="falso" control={<Radio />} label="Falso" />
                        </MyRadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                       <FormLabel>¿El DOM se encuentra por documento en un solo modulo?</FormLabel>
                       <MyRadioGroup 
                          name="answer4"
                          label="¿El DOM se encuentra por documento en un solo modulo?"
                        >
                        <FormControlLabel value="verdadero" control={<Radio />} label="Verdadero" />
                        <FormControlLabel value="falso" control={<Radio />} label="Falso" />
                        </MyRadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <MySelect 
                        name="component_image_1"
                        placeholder="Selecciona una opción"
                        label="¿El siguiente componente pertenece al estandar de ES6?"
                       >
                        <MenuItem value="verdadero">Verdadero</MenuItem>
                        <MenuItem value="falso">False</MenuItem>
                      </MySelect>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <MySelect 
                         name="component_image_2" 
                         placeholder="Selecciona una opción"
                         label="¿El siguiente componente pertenece al estandar de ES6?"
                      >
                        <MenuItem value="verdadero">Verdadero</MenuItem>
                        <MenuItem value="falso">Falso</MenuItem>
                      </MySelect>
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