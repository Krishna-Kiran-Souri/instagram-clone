import { useImageService } from "../../service/imageservice.js";
import React, { useState, useEffect } from "react";
import "./imagetile.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "20px",
    height: "100vh"
  },
  gridList: {
    width: 500,
    height: 700,
    position: "realtive",
    marginTop: "50px",
    paddingTop: "50px",
    width: "100vw",
    overFlowY: "hidden"
  }
}));

export const ImageTiles = props => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPhotos = async pageNumber => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=21`
    );
    const data = await res.json();
    // console.log(data);
    let temp = data.results.map((img, index) => {
      let row = 1;
      let col = 1;
      if (index === 0) {
        col = 3;
        row = 2;
      } else if (index % 7 === 0) {
        col = 1;
        row = 2;
      }

      return { url: img.urls.small, col: col, row: row };
    });
    console.log(temp);
    setImages(p => [...p, ...temp]);
  };
  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);
  const loadMore = () => {
    setPageNumber(prevpagenumber => prevpagenumber + 1);
  };
  // const imageTiles=

  return (
    // <h1 />
    // <h1>{images.map(tile=>tile)}</h1>
    <div className={classes.root + " imagegrid"}>
      <GridList
        cellHeight={160}
        className={classes.gridList + " grid-list"}
        cols={3}
      >
        {images.map((tile, index) => (
          <GridListTile key={index} cols={tile.col || 1} rows={tile.row} spacing={10}>
            <img src={tile.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
