import { Grid, Typography } from '@mui/material';
import { agenda1} from './';

export const AuthLayout = ({children, title = ''}) => {
    return (
    
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', adding: 4, backgroundImage: `url(${agenda1})`, position: 'absolute',
        backgroundSize: 'cover', backgroundPosition: 'center center', '&:before': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            content: '""',
            display: 'block',
            background: '#000',
            opacity: '0.6'}
        }} 
        >


                {/* Formulario para ingresar a la App*/}
                <Grid item
                className="box-shadow"
                xs={ 3 }
                sx={{
                width: { sm: 450 },
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2,
                zIndex: 1
                }}>              
                    <Typography variant="h5" sx={{mb: 1}}>{ title }</Typography>

                    {  children  } 

                </Grid>
                
    </Grid>
)
}
