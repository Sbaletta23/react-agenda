import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AgendaRoutes } from "../agenda/routes/AgendaRoutes";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks";



export const AppRouter = () => {

    const status = useCheckAuth();

    if ( status === 'checking' ) {
        return <CheckingAuth />
    }


    return (
        <Routes>
    
            {
                (status === 'authenticated')
                ? <Route path="/*" element={ <AgendaRoutes /> } /> //Rutas Privadas
                : <Route path="/auth/*" element={ <AuthRoutes /> } /> //Rutas Publicas
            }
    
            <Route path='/*' element={ <Navigate to='/auth/login' />  } /> 
    
        </Routes>
        )
}
