import { FormLabel, RadioGroup } from "@mui/material"
import { ErrorMessage, useField } from "formik";

export const MyRadioGroup = (props) =>{
    const [field] = useField(props);

    return(
        <>
        <FormLabel>{props.label}</FormLabel>
        <RadioGroup 
           {...props} 
           {...field}
           aria-labelledby="demo-radio-buttons-group-label" 
           row
        />
        <ErrorMessage name={props.name} component="span"/>
        </>
    )
}