import { useField, ErrorMessage } from 'formik';
import { FormLabel, Select } from "@mui/material"

export const MySelect = (props) =>{

    const [field] = useField(props)
    return(
        <>
        <FormLabel>{props.label}</FormLabel>
          <Select 
            fullWidth
            {...props} 
            {...field}
            placeholder="selecciona una opción"
           />
          <ErrorMessage name={props.name} component="span"/>
        </>
    )
}