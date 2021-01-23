import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: props => ({
    margin: `0 ${props.slideMargin}px`,
    padding: 0,
    transition: "transform 500ms ease",

    curosor: "pointer",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    transform: "scale(1)",
    userSelect: "none",
    flex: `0 0
    calc(
      100% / ${props => props.visibleSlides} -
        ${props => props.slideMargin * 2}px
    )`,
    "&:img": {
      height: "100%",
      width: "100%"
    },
    "&:hover": {
      transform: `scale(${props => props.zoomFactor / 100 + 1}) !important`
    },
    "&:hover  ~ * ": {
      transform: `translateX(${props => props.zoomFactor / 2 + "%"}) !important`
    },
    "&:.left": {
      transformOrigin: "left",
      ":hover ~ *": {
        transform: `translateX(${props => props.zoomFactor + "%"}) !important`
      }
    },
    "&:.right": {
      transformOrigin: "right",
      ":hover ~ *": {
        transform: `translateX(0%}) !important`
      }
    }
  })
});
export const StyledSliderItem = styled.div`
  margin: 0 ${props => props.slideMargin}px;
  transition: transform 500ms ease;

  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;
  flex: 0 0
    calc(
      100% / ${props => props.visibleSlides} -
        ${props => props.slideMargin * 2}px
    );
  img {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  :hover {
    transform: scale(${props => props.zoomFactor / 100 + 1}) !important;
  }
  :hover ~ * {
    transform: translateX(${props => props.zoomFactor / 2 + "%"}) !important;
  }
  &.left {
    transform-origin: left;
    :hover ~ * {
      transform: translateX(${props => props.zoomFactor + "%"}) !important;
    }
  }
  &.right {
    transform-origin: right;
    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;
