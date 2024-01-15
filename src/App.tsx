import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./Components/Navbar";


// Mui Dark Theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const App: React.FC = () => {
    return (
        <Box className='app'>
            {/* Mui Theme Provider */}
            <ThemeProvider theme={darkTheme}>
                <Navbar />

                <div>App</div>

            </ThemeProvider>
        </Box >
    );
};
