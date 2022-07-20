
import { Grid, Typography } from '@mui/material';
import { AddBox } from '@mui/icons-material';


export const NothingSelectView = () => {
    return (
        <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
        >   
            {/* Icono AddBox */}
            <Grid item xs={ 12 }>
                <AddBox sx={ {fontSize: 50, color: 'white'}}/>
            </Grid>

            {/* Entradras */}
            <Grid item xs={ 12 }>
                <Typography color='white' variant='h7'>
                    Seleciona o Crea una entrada
                </Typography>
            </Grid>
        </Grid>
        )
}

