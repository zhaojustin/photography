import { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Images(props) {
  const [data, setData] = useState({});

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch("/photography");
    response = await response.json();
    setData(response);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  let ALL_PHOTOS = [];
  let NY_PHOTOS = [];
  let CA_PHOTOS = [];
  let HA_PHOTOS = [];
  let FOOD_PHOTOS = [];
  let FRIENDS_PHOTOS = [];

  for (var i = 0; i < data.length; i++) {
    let identifier = data[i].split("GOOD/")[1];
    if (identifier.split("/")[0].includes("FRIENDS")) {
      FRIENDS_PHOTOS.push(data[i]);
    }
    if (identifier.split("/")[0].includes("LA")) {
      CA_PHOTOS.push(data[i]);
    }
    if (identifier.split("/")[0].includes("HAWAII")) {
      HA_PHOTOS.push(data[i]);
    }
    if (identifier.split("/")[0].includes("NY")) {
      NY_PHOTOS.push(data[i]);
    }
  }

  const PREFIX = "https://justinzhao-photography.s3.amazonaws.com/";

  {
    /* FRIENDS PHOTOS GALLERY */
  }
  let friendsPhotos = [];
  for (var i = 0; i < FRIENDS_PHOTOS.length; i++) {
    friendsPhotos.push({
      img: PREFIX + FRIENDS_PHOTOS[i],
      title: "Friends Photo " + i,
    });
  }

  {
    /* HAWAII PHOTOS GALLERY */
  }
  let hawaiiPhotos = [];
  for (var i = 0; i < HA_PHOTOS.length; i++) {
    hawaiiPhotos.push({
      img: PREFIX + HA_PHOTOS[i],
      title: "Hawaii Photo " + i,
    });
  }

  {
    /* CA PHOTOS GALLERY */
  }
  let californiaPhotos = [];
  for (var i = 0; i < CA_PHOTOS.length; i++) {
    californiaPhotos.push({
      img: PREFIX + CA_PHOTOS[i],
      title: "California Photo " + i,
    });
  }

  {
    /* NY PHOTOS GALLERY */
  }
  let newyorkPhotos = [];
  for (var i = 0; i < NY_PHOTOS.length; i++) {
    newyorkPhotos.push({
      img: PREFIX + NY_PHOTOS[i],
      title: "New York Photo " + i,
    });
  }

  {
    /* ALL PHOTOS GALLERY */
  }
  let allPhotos = [];
  for (var i = 0; i < FRIENDS_PHOTOS.length; i++) {
    allPhotos.push({
      img: PREFIX + FRIENDS_PHOTOS[i],
      title: "Friends Photo " + i,
    });
  }
  for (var i = 0; i < HA_PHOTOS.length; i++) {
    allPhotos.push({
      img: PREFIX + HA_PHOTOS[i],
      title: "Hawaii Photo " + i,
    });
  }
  for (var i = 0; i < CA_PHOTOS.length; i++) {
    allPhotos.push({
      img: PREFIX + CA_PHOTOS[i],
      title: "California Photo " + i,
    });
  }
  for (var i = 0; i < NY_PHOTOS.length; i++) {
    allPhotos.push({
      img: PREFIX + NY_PHOTOS[i],
      title: "New York Photo " + i,
    });
  }

  let gallery = [];
  if (props.gallery == "All") {
    gallery = allPhotos;
  } else if (props.gallery == "California") {
    gallery = californiaPhotos;
  } else if (props.gallery == "New York") {
    gallery = newyorkPhotos;
  } else if (props.gallery == "Hawaii") {
    gallery = hawaiiPhotos;
  } else if (props.gallery == "Friends") {
    gallery = friendsPhotos;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
        {gallery.map((item) => (
          <Zoom>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              width="100%"
              loading="lazy"
            />
          </Zoom>
        ))}
      </Masonry>
    </Box>
  );
}
