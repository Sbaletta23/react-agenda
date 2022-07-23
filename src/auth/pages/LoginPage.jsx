import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";


export const LoginPage = () => {


    const { status, errorMessage  } = useSelector( state => state.auth )
    const dispatch = useDispatch();


    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const isAuthenticating = useMemo( () => status === 'cheking', [status]);

    // Loguearse Normal
    const onSubmit = ( event ) => {
        event.preventDefault();
        
        console.log({email, password});
        dispatch( startLoginWithEmailPassword({email, password}) );
    }
    

    // Loguarse con Google
    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSingIn() );
    }


    return (

        <AuthLayout title="Login">
        
                <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                    <Grid container>
                            {/* Login usuarios */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Email"
                                    type="email"
                                    placeholder="correo@google.com"
                                    fullWidth
                                    name="email"
                                    value={ email }
                                    onChange={ onInputChange }
                                    />
                            </Grid>

                            {/* Contraseña  */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Contraseña"
                                    type="password"
                                    placeholder="Escribi tu contraseña"
                                    fullWidth
                                    name="password"
                                    value={ password }
                                    onChange={ onInputChange }
                                    />
                            </Grid>

                            {/* Mensaje de Error */}
                            <Grid 
                                container
                                display={ !!errorMessage ? '': 'none' }
                                sx={{ mt: 1 }}>
                                <Grid 
                                    item 
                                    xs={ 12 }>
                                    <Alert severity='error'>{ errorMessage }</Alert>
                                </Grid>
                            </Grid>


                            {/* Boton Login */}
                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button 
                                    disabled={ isAuthenticating }
                                    type='submit'
                                    variant='contained'
                                    fullWidth>
                                        Ingresar
                                    </Button>
                                </Grid>

                                {/* Boton de Google */}
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button
                                    disabled={ isAuthenticating }
                                    variant='contained'
                                    fullWidth
                                    onClick={ onGoogleSignIn}>
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