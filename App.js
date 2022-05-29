import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Menu from "./components/Menu";
import Content from "./components/Content";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import setImageData from "./components/ImageData/ImageData";

export default function App() {
  let [images, setImages] = useState(setImageData("favorites"));
  const updateImages = (img) => {
    setImages(setImageData(img));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2}>
            <Box sx={{}}>
              <Menu images={images} updateImages={updateImages} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Box sx={{ height: "100vh" }}>
              <Content itemData={images} />
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
