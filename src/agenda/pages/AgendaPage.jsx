import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { AgendaLayout } from '../layout/AgendaLayout';
import {  NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/agenda/thunks';

export const AgendaPage = () => {


    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.agenda );

    const onClickNewNote = () => {
    dispatch( startNewNote() );
    }



    return (
        <AgendaLayout>
        
        {/* Vistas de las notas activas y Vista de cuando no hay nada */}
        {
            (!!active)
            ? <NoteView />
            : <NothingSelectedView />
        }

            <IconButton
                onClick={ onClickNewNote }
                size='large'
                disabled={ isSaving }
                sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                position: 'fixed',
                right: 50,
                bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </AgendaLayout>
    )
}