import { useImageService } from "../../service/imageservice.js";
import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

export const ImageTiles = props => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPhotos = async pageNumber => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=10`
    );
    const data = await res.json();
    // console.log(data);
    setImages(data.results);
  };
  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  // const imageTiles=
  console.log(images.map(tile => tile.urls.regular));
  return (
    // <h1 />
    // <h1>{images.map(tile=>tile)}</h1>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img src={tile.urls.regular} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
