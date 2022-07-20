import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";


export const LoginPage = () => {
    return (

        <AuthLayout title="Login">
        
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
                                        Ingresar
                                    </Button>
                                </Grid>
                                {/* Login con Cuenta de Google */}
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button variant='contained' fullWidth>
                                        <Google />
                                        <Typography sx={{ ml: 1 }}>Google</Typography>
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* Boton para Crear Cuenta */}
                            <Grid container direction='row' justifyContent='end'>
                                <Link component={ RouterLink } color='inherit' to="/auth/register">
                                    Crear una cuenta
                                </Link>
                            </Grid>


                    </Grid>
                </form>
        </AuthLayout>
    )
}
