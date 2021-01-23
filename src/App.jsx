import React from "react";
import "./style.css";
import { Layout } from "./layout";
import { ImageTiles } from "./pages/infinitescroll/imagetile.jsx";
import { makeStyles } from "@material-ui/core/styles";
import AvatarCarousel from "./pages/avatarcarousel/avatarcarousel.jsx";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  carousel: {
    paddingTop: "0",
    width: "40vw",
    height: "20vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "sticky",
    top: "10%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      top: "10%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "sticky"
    }
  },
  feed: {
    paddingTop: 20,
    marginTop: 20,
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row"
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout />
      <section className={classes.carousel}>
        <AvatarCarousel />
      </section>
      <section className={classes.feed}>{"feed"}</section>
    </div>
  );
}
