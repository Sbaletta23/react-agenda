import { Route, Routes } from "react-router-dom";
import { AgendaRoutes } from "../agenda/routes/AgendaRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";



export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            {/* AgendaApp */}
            <Route path="/*" element={ <AgendaRoutes />} />

        </Routes>
        
    )
}
