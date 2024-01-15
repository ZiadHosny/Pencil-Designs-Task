import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store";


// Mui Dark Theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const App: React.FC = () => {
    return (
        // redux Provider
        <Provider store={store}>
            <Box className='app'>
                {/* Mui Theme Provider */}
                <ThemeProvider theme={darkTheme}>
                    <Navbar />

                    <div>App</div>
                </ThemeProvider>
            </Box >
        </Provider>
    );
};
