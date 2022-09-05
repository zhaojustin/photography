import { useState } from "react";

import { Box, Container, Grid } from "@mui/material";

import Menu from "./Menu/Menu";
import Socials from "./Menu/Socials";
import Images from "./Images/Images";

function Wrapper() {
  const [gallery, setGallery] = useState("All");

  return (
    <Box sx={{ p: 5 }}>
      <Container maxWidth={{ xs: "xlg", sm: "lg" }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Menu gallery={gallery} setGallery={setGallery} />
            <Socials />
          </Grid>
          <Grid item xs={10}>
            <Images gallery={gallery} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Wrapper;
