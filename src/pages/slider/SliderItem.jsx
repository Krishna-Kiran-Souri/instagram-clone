import React from "react";
// Styles
import { StyledSliderItem } from "./SliderItemStyles";

t;

const SliderItem = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children
}) => (
  <StyledSliderItem
    zoomFactor={zoomFactor}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
  >
    {children}
  </StyledSliderItem>
);

export default SliderItem;
