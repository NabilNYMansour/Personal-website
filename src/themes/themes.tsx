import { Theme, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";

const font = "Caviar-Dreams";

// Theming
export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#201f29",
      paper: "#201f29",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    },
  },
});

darkTheme.typography.body1 = {
  fontFamily: font,
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "85%",
  },
};

export const offDarkColor = "#34333C";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      // make the theme the light version of #201f29"
      default: "#fefefe",
      paper: "#fefefe",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none'
    },
  },
});

export const offLightColor = "#f1f1f1";

lightTheme.typography.body1 = darkTheme.typography.body1;
