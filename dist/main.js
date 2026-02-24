import { createElement, useRef } from "react";
import { createRoot } from "react-dom/client";
import { divWrap, Footer, Title } from "./htmlwrappers.js";
import { useAutoFitPage } from "./layout.js";
import { buildCircleColumns, startRandomCircleRotation } from "./circlescol.js";
import { Plane } from "./plane.js";
import { buildImageCards } from "./gallery.js";
// Circle columns (generated once)
const { leftCircles, rightCircles } = buildCircleColumns();
// Image cards
const images = [
    { src: "./assets/derek.jpg", caption: "The man himself" },
    { src: "./assets/derek2.jpg", caption: "Derek Today" },
    { src: "assets/gun.jpg", caption: "One of his inventions" },
];
const imageItems = buildImageCards(images);
function AppFrame() {
    const pageRef = useRef(null);
    useAutoFitPage(pageRef);
    return createElement("div", { className: "page-wrap" }, createElement("div", {
        className: "page",
        ref: pageRef,
    }, Title("The Dk Page", '"Jersey 25", sans-serif'), Footer("Derek Cardenas", "Aspiring mechanical engineering student at Vaughn College of Aeronautics and Technology. Studying in 3D design and modeling.", "https://www.instagram.com/derek46631?igsh=dmYwMWpsZzJ0cWpn", "https://www.linkedin.com/in/derek-cardenas-baa004261/"), createElement("div", { className: "circle-row" }, divWrap(leftCircles, { className: "circle-col left-col" }), createElement("div", { className: "image-col" }, createElement("div", { className: "image-grid" }, imageItems)), divWrap(rightCircles, { className: "circle-col right-col" })), createElement(Plane)));
}
const root = createRoot(document.getElementById("root"));
root.render(createElement(AppFrame));
window.addEventListener("load", () => {
    setTimeout(startRandomCircleRotation, 0);
});
