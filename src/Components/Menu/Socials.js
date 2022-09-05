import { Box, Typography, Stack, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hover: {
    "&:hover": {
      color: "black",
      transition: "0.3s",
    },
  },
  selected: {
    color: "black",
  },
});

function Socials() {
  const classes = useStyles();

  return (
    <Box sx={{ pt: 40 }}>
      {/* TITLE */}
      <Box>
        <Typography variant="linkSelected">Find Me</Typography>
      </Box>

      {/* MENU LINKS */}
      <Stack direction="column" spacing={0.5} sx={{ pt: 3 }}>
        <Link href="http://justinzhao.net" underline="none">
          <Typography variant="link" className={classes.hover}>
            justinzhao.net
          </Typography>
        </Link>
        <Link href="https://instagram.com/justinzaho" underline="none">
          <Typography variant="link" className={classes.hover}>
            @justinzaho
          </Typography>
        </Link>
        <Link href="https://instagram.com/justinzaho" underline="none">
          <Typography variant="link" className={classes.hover}>
            @zaho.jpeg
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default Socials;
