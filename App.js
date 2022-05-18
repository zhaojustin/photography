import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Provider } from "react-redux";

import Menu from "./components/Menu";
import Content from "./components/Content";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2}>
            <Box sx={{ bgcolor: "#cfe8fc" }}>
              <Menu />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Box sx={{ bgcolor: "#123123", height: "100vh" }}>
              <Content />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h5: {
      fontWeight: 300,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "black",
        },
      },
    },
  },
});
