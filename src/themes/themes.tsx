import { createTheme } from "@mui/material";

// Theming
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
        default: "#201f29",
        paper: "#201f29",
    },
  },
  typography: {
    fontFamily: ["Courier", "monospace"].join(","),
  },
});

darkTheme.typography.body1 = {
  fontFamily: ["Courier", "monospace"].join(","),
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "85%",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
        // make the theme the light version of #201f29"
        default: "#fefefe",
        paper: "#fefefe",
    },
  },
  typography: {
    fontFamily: ["Courier", "monospace"].join(","),
  },
});

lightTheme.typography.body1 = darkTheme.typography.body1;
