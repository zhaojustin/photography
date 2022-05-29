import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function Menu({ updateImages }) {
  const handleClick = (img) => {
    updateImages(img);
  };
  return (
    <Container>
      <Box sx={{ pt: 10, pb: 5 }}>
        <Link>
          <Typography variant="h5">Home</Typography>
        </Link>
        <Link
          href="#"
          onClick={() => {
            updateImages("favorites");
          }}
        >
          <Typography variant="h5">Favorites</Typography>
        </Link>
        <Link
          href="#"
          onClick={() => {
            updateImages("film");
          }}
        >
          <Typography variant="h5">Film</Typography>
        </Link>
        <Link
          href="#"
          onClick={() => {
            updateImages("nyc");
          }}
        >
          <Typography variant="h5">NYC</Typography>
        </Link>
        <Link
          href="#"
          onClick={() => {
            updateImages("la");
          }}
        >
          <Typography variant="h5">LA/OC</Typography>
        </Link>
        <Link
          href="#"
          onClick={() => {
            updateImages("friends");
          }}
        >
          <Typography variant="h5">Friends</Typography>
        </Link>
      </Box>
    </Container>
  );
}
