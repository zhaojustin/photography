import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function Menu() {
  return (
    <Container>
      <Box sx={{ pt: 10, pb: 5 }}>
        <Link href="#">
          <Typography variant="h5">Home</Typography>
        </Link>
        <Link href="#">
          <Typography variant="h5">Favorites</Typography>
        </Link>
        <Link href="#">
          <Typography variant="h5">Film</Typography>
        </Link>
        <Link href="#">
          <Typography variant="h5">NYC</Typography>
        </Link>
        <Link href="#">
          <Typography variant="h5">LA/OC</Typography>
        </Link>
        <Link href="#">
          <Typography variant="h5">Friends</Typography>
        </Link>
      </Box>
    </Container>
  );
}
