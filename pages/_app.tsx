import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@/styles/globals.css";
import "@fontsource/space-grotesk";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Space Grotesk",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "dark",
    background: {
      default: "#1B1F24",
      paper: "#2C343F",
    },
    primary: {
      main: "#065FE4",
    },
    secondary: {
      main: "#c3cad5",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
