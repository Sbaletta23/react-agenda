import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";



const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    useSelector

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,
        } = useForm( formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        
        if( !isFormValid ) return;

        dispatch( startCreatingUserWithEmailPassword(formState));
    }

    return (

        <AuthLayout title="Crear una cuenta">
        
                <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                    <Grid container>
                            {/* Login usuarios */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Nombre"
                                    type="text"
                                    placeholder="Nombre completo"
                                    fullWidth
                                    name="displayName"
                                    value={ displayName }
                                    onChange={ onInputChange }
                                    error={ !!displayNameValid && formSubmitted }
                                    helperText={ displayNameValid }
                                    />
                            </Grid>

                            {/* Email */}
                            <Grid item xs={ 12 }sx={{mt: 2}}>
                                <TextField 
                                    label="Email"
                                    type="email"
                                    placeholder="correo@google.com"
                                    fullWidth
                                    name="email"
                                    value={ email }
                                    onChange={ onInputChange }
                                    error={ !!emailValid && formSubmitted }
                                    helperText={ emailValid }
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
                                    error={ !!passwordValid && formSubmitted }
                                    helperText={ passwordValid }
                                    />
                            </Grid>

                            
                            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>


                                <Grid 
                                    item 
                                    xs={ 12 }
                                    display={ !!errorMessage ? '': 'none' }
                                >
                                    <Alert severity='error'>{ errorMessage }</Alert>
                                </Grid>
                                
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <Button
                                        disabled={ isCheckingAuthentication }
                                        type="submit"
                                        variant='contained'
                                        fullWidth
                                        >
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