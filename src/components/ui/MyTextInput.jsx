import { TextField } from "@mui/material";
import { ErrorMessage , useField } from "formik";

export const MyTextInput = (props) =>{
    const [field] = useField(props);

    return(
        <>
            <TextField
             type="text"
             {...props}
             {...field}
             fullWidth
            />
            <ErrorMessage name={props.name} component="span"/>
        </>
    )
}