import React, { useState, useRef, useEffect } from "react";
import "./avatarcarousel.css";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const AvatarCarousel = props => {
  const [images, setImages] = useState([]);
  const SliderProps = {
  zoomFactor: 30, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};
  const fetchPhotos = async () => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=1&per_page=21`
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
    <Slider {...SliderProps}>
      {images.map(image => (
        <Avatar src={image.url} alt="no name" />
      ))}
<Slider/>
  );
};

export default AvatarCarousel;
