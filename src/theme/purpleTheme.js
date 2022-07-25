import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#1b1b1b'
        },
        secondary: {
            main: '#6d6d6d'
        },
        error: {
            main: red.A400
        }
    }
})