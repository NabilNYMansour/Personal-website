import { createTheme } from "@mui/material";
import { green, lime, orange } from "@mui/material/colors";

// Theming
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Courier", "monospace"].join(","),
  },
});

darkTheme.typography.body1 = {
  fontFamily: ["Courier", "monospace"].join(","),
  [darkTheme.breakpoints.down("md")]: {
    fontSize: "95%",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: ["Courier", "monospace"].join(","),
  },
});

lightTheme.typography.body1 = darkTheme.typography.body1;
