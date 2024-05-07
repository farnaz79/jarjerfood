'use client';


import {ReactNode} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
const theme =({children}:{children : ReactNode})=>{
    const theme = createTheme({
        palette:{
            primary: {
                main: "#323232",
            },
            secondary: {
                main: "#F0F0F0",
                light: "#BDBDBD",
            },
            info:{
                main: "#1BCF92",
                light: "#E55249",
                "500": "#FFC839",
            }
        },
        components:{
            MuiButton:{
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor : '#323232',
                        },
                    },
                }
            }
        }
    });
    return(
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
export default theme