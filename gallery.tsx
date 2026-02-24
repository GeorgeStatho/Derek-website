import React, { createElement } from "react";
import { CreateImage } from "./htmlwrappers.js";

export type GalleryImage = {
  src: string;
  caption: string;
};

export function buildImageCards(images: GalleryImage[]) {
  return images.map((img) =>
    createElement(
      "div",
      { className: "image-card", key: `${img.src}-${img.caption}` },
      CreateImage(img.src, "image-item"),
      createElement("p", { className: "image-caption" }, img.caption)
    )
  );
}