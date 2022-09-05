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

let selected = [true, false, false, false, false];
function reset() {
  for (var i = 0; i < 5; i++) {
    selected[i] = false;
  }
}

function Menu(props) {
  const classes = useStyles();

  if (props.gallery == "All") {
    reset();
    selected[0] = true;
    console.log(selected);
  } else if (props.gallery == "New York") {
    reset();
    selected[1] = true;
  } else if (props.gallery == "California") {
    reset();
    selected[2] = true;
  } else if (props.gallery == "Hawaii") {
    reset();
    selected[3] = true;
  } else if (props.gallery == "Friends") {
    reset();
    selected[4] = true;
  }

  return (
    <Box>
      {/* TITLE */}
      <Box>
        <Typography variant="title">Justin Zhao</Typography>
      </Box>

      {/* MENU LINKS */}
      <Stack direction="column" spacing={0.5} sx={{ pt: 3 }}>
        <Link
          component="button"
          underline="none"
          align="left"
          onClick={() => {
            props.setGallery("All");
          }}
        >
          <Typography
            variant={selected[0] ? "linkSelected" : "link"}
            className={classes.hover}
          >
            All
          </Typography>
        </Link>
        <Link
          component="button"
          underline="none"
          align="left"
          onClick={() => {
            props.setGallery("New York");
          }}
        >
          <Typography
            variant={selected[1] ? "linkSelected" : "link"}
            className={classes.hover}
          >
            New York
          </Typography>
        </Link>
        <Link
          component="button"
          underline="none"
          align="left"
          onClick={() => {
            props.setGallery("California");
          }}
        >
          <Typography
            variant={selected[2] ? "linkSelected" : "link"}
            className={classes.hover}
          >
            California
          </Typography>
        </Link>
        <Link
          component="button"
          underline="none"
          align="left"
          onClick={() => {
            props.setGallery("Hawaii");
          }}
        >
          <Typography
            variant={selected[3] ? "linkSelected" : "link"}
            className={classes.hover}
          >
            Hawaii
          </Typography>
        </Link>
        <Link
          component="button"
          underline="none"
          align="left"
          onClick={() => {
            props.setGallery("Friends");
          }}
        >
          <Typography
            variant={selected[4] ? "linkSelected" : "link"}
            className={classes.hover}
          >
            Friends
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default Menu;
