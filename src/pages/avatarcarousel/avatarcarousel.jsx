import React, { useState, useRef, useEffect } from "react";
import "./avatarcarousel.css";
import Slider from "../slider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0"
  }
}));
const AvatarCarousel = props => {
  const [images, setImages] = useState([]);
  const classes = useStyles();
  const SliderProps = {
    zoomFactor: 100, // How much the image should zoom on hover in percent
    slideMargin: 0, // Margin on each side of slides
    maxVisibleSlides: 8,
    pageTransition: 500 // Transition when flipping pages
  };
  const fetchPhotos = async () => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=cartoons&client_id=${ACCESS_KEY}&page=1&per_page=21`
    );
    const data = await res.json();

    console.log(data);
    let temp = data.results.map((img, index) => {
      let row = 1;
      let col = 1;
      return { url: img.urls.small, col: col, row: row };
    });

    setImages(p => [...p, ...temp]);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <div className={classes.root}>
      <Slider {...SliderProps}>
        {images.map((image, index) => (
          <Avatar
            className="avatar"
            key={index}
            src={image.url}
            alt="no image"
          />
        ))}
      </Slider>
    </div>
  );
};

export default AvatarCarousel;
