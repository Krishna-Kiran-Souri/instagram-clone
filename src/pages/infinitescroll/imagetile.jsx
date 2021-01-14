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
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=12`
    );
    const data = await res.json();
    // console.log(data);
    let temp = data.results.map((img, index) => {
      let row = 1;
      let col = 1;
      if (index === 0) {
        col = 3;
        row = 3;
      }
      if (index % 7 === 0) {
        row = 2;
        col = 2;
      }

      return { url: img.urls.small, col: col, row: row };
    });
    console.log(temp);
    setImages(temp);
  };
  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  // const imageTiles=

  return (
    // <h1 />
    // <h1>{images.map(tile=>tile)}</h1>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((tile, index) => (
          <GridListTile key={index} cols={tile.col || 1} rows={tile.row}>
            <img src={tile.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
