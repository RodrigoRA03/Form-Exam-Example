import { Checkbox , FormControlLabel } from "@mui/material";
import { ErrorMessage , useField } from "formik";

export const MyCheckbox = (props) =>{
    const [field] =  useField({...props , type:"checkbox"});
    return(
        <>
        <FormControlLabel
           control={
             <Checkbox
                {...field}
                {...props}
                inputProps={{ 'aria-label': 'controlled' }}
              />
           } 
           label={props.label}
        /> 
        <ErrorMessage name={props.name} component="span"/>
        </>
    )
}