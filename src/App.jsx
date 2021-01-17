import React from "react";
import "./style.css";
import { Layout } from "./layout";
import { ImageTiles } from "./pages/infinitescroll/imagetile.jsx";

export default function App() {
  return (
    <div>
      <Layout />
      <ImageTiles />
    </div>
  );
}
