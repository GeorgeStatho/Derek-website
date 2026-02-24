import { createElement } from "react";
import { CreateImage } from "./htmlwrappers.js";
export function buildImageCards(images) {
    return images.map((img) => createElement("div", { className: "image-card", key: `${img.src}-${img.caption}` }, CreateImage(img.src, "image-item"), createElement("p", { className: "image-caption" }, img.caption)));
}
