import { createTheme } from "@mui/material/styles";
import "../App.css";

export const theme = createTheme({
  typography: {
    link: {
      fontFamily: "Overpass Mono",
      fontWeight: 400,
      fontSize: 20,
      color: "#757575",
    },
    linkSelected: {
      fontFamily: "Overpass Mono",
      fontWeight: 400,
      fontSize: 20,
      color: "#000",
    },
    title: {
      fontFamily: "Overpass Mono",
      fontWeight: 700,
      fontSize: 30,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underline: "none",
      },
    },
  },
  overrides: {},
});
