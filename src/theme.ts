import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#36393b",
      },
      secondary: {
        main: "#c9b8a8",
      },
    },
    typography:{
      fontFamily: "Alegreya"
    }
  });
theme = responsiveFontSizes (theme)
  export default theme;