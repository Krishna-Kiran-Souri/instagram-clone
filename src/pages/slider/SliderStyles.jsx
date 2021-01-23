import styled from "styled-components";
import { StyledSliderItem } from "./SliderItemStyles";

export const StyledSliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 1);
  padding: ${props =>
      (props.zoomFactor / (2 * props.visibleSlides)) * 0.7 + "%"}
    0;
  .button-wrapper {
    position: absolute;
    width: 55px;
    height: 100%;
    top: 0;
    padding: ${props => props.zoomFactor / 70 + "%"} 0;
    box-sizing: border-box;
  }
  .button {
    display: block;
    background: rgb(255, 255, 255, 0.6);
    border: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;
    :hover {
      opacity: 0.5;
    }
  }
  .back {
    left: 0;
  }
  .forward {
    right: 0;
  }
`;

export const StyledSlider = styled.div`
  display: flex;
  padding: 0 55px;
  transition: transform ${props => props.pageTransition}ms ease;
  :hover ${StyledSliderItem} {
    transform: translateX(${props => props.transformValue});
  }
`;
