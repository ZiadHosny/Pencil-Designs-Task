import { Box, ThemeProvider, createTheme } from "@mui/material";


// Mui Dark Theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const App: React.FC = () => {
    return (
        // Mui Theme Provider
        <ThemeProvider theme={darkTheme}>
            <Box className='app'>
                <div>App</div>
            </Box >
        </ThemeProvider>
    );
};
