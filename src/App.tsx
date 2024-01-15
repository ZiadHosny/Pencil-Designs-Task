import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { HomePage } from "./Pages/HomePage";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
                    {/* Toast Container (UI) */}
                    <ToastContainer
                        theme="dark"
                        autoClose={1000}
                        transition={Bounce}
                    />
                    <HomePage />
                </ThemeProvider>
            </Box >
        </Provider>
    );
};
