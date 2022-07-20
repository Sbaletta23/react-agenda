import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
    return (

        <AuthLayout title="Crear una cuenta">
        
                <form>
                    <Grid container>
                            {/* Login usuarios */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Email"
                                    type="email"
                                    placeholder="correo@google.com"
                                    fullWidth
                                    />
                            </Grid>

                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Nombre"
                                    type="text"
                                    placeholder="Nombre completo"
                                    fullWidth
                                    />
                            </Grid>

                            {/* Contraseña  */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Contraseña"
                                    type="password"
                                    placeholder="Escribi tu contraseña"
                                    fullWidth
                                    />
                            </Grid>

                            {/* Boton para loguearse */}
                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                                {/* Login con cuenta creada */}
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button variant='contained' fullWidth>
                                        Crear cuenta
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* Boton para Crear Cuenta */}
                            <Grid container direction='row' justifyContent='end'>
                                <Typography sx={{mr: 1 }}>¿Ya tienes cuenta?</Typography>
                                <Link component={ RouterLink } color='inherit' to="/auth/login">
                                    Ingresar
                                </Link>
                            </Grid>


                    </Grid>
                </form>
        </AuthLayout>
    )
}
