import React from "react";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function Content(props) {
  return (
    <Box sx={{ p: 5 }}>
      <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
        {props.itemData.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
