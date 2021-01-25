import React from "react";
import "./style.css";
import Divider from "@material-ui/core/Divider";
import { Layout } from "./layout";
import { ImageTiles } from "./pages/infinitescroll/imagetile.jsx";
import { makeStyles } from "@material-ui/core/styles";
import AvatarCarousel from "./pages/avatarcarousel/avatarcarousel.jsx";
import RecipeReviewCard from "./pages/imagecards/imagecard.jsx";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(230,230,230,0.7)"
  },
  carousel: {
    padding: "2rem",
    width: "50vw",
    height: "10vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    top: "10%",
    objectFit: "cover",
    border: "rgba(0,0,0,0.6)",
    [theme.breakpoints.down("sm")]: {
      top: "3rem",
      padding: "1rem",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative"
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

      <section className={classes.feed}>
        <RecipeReviewCard />
      </section>
    </div>
  );
}
