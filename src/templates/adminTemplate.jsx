import { Navbar } from "../components/ui/navbar"

export const AdminTemplate = ({children}) =>{
    return(
        <>
        <Navbar/>
        {children}
        </>
    )
}