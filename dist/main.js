import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { HTMLElements, divWrapperElements, divWrap, innershadowdefs } from "./htmlwrappers.js";
//circle functions
function createCircRect(x, y) {
    let group = [];
    let shape = new HTMLElements("rect", { fill: "var(--fill-0, #D9D9D9)", height: 19, width: 83, x: x, y: y - 10 });
    group.push(shape.toJSX());
    shape = new HTMLElements("ellipse", { cx: x, cy: y, fill: "var(--fill-0, #D9D9D9)", rx: 40, ry: 39.5, });
    group.push(shape.toJSX());
    return new HTMLElements("g", { clipPath: "url(#clip0)", filter: "url(#innerShadow)" }, group).toJSX();
}
function createCircRectCol(x, y, count) {
    const svgs = [];
    let svgElement;
    for (let i = 0; i < count; i++) {
        svgElement =
            new HTMLElements("svg", { width: 200, height: 114 }, [innershadowdefs.toJSX(), createCircRect(x, y)]).toJSX();
        svgs.push(svgElement);
    }
    return svgs;
}
//end circle funtions
//creating circles
const svgColumn = createCircRectCol(66, 53.5, 6);
let leftCircles = divWrapperElements(svgColumn, {
    className: "circle-item left-circle-col"
}, 45);
const rightCircles = divWrapperElements(svgColumn, { className: "circle-item right-circle-col" }, 45);
//end creating circles
function heading(text) {
    return (_jsx("h1", { className: "page-title", children: text }));
}
function Title(text) {
    return (_jsx("div", { className: "title-wrap", children: _jsx("h1", { className: "title-text", children: text }) }));
}
function ParagraphTitle({ text }) {
    return _jsx("p", { className: "name-title", children: text });
}
function ParagraphText({ text }) {
    return _jsx("p", { className: "paragraph-text", children: text });
}
function Instagram() {
    return (_jsxs("svg", { className: "icon", viewBox: "0 0 24 24", "aria-label": "Instagram", role: "img", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5", ry: "5", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "12", cy: "12", r: "4", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })] }));
}
function Linked() {
    return (_jsxs("svg", { className: "icon", viewBox: "0 0 24 24", "aria-label": "LinkedIn", role: "img", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", ry: "3", fill: "none", stroke: "currentColor", strokeWidth: "2" }), _jsx("rect", { x: "7", y: "10", width: "2", height: "7", fill: "currentColor" }), _jsx("circle", { cx: "8", cy: "7.5", r: "1", fill: "currentColor" }), _jsx("path", { d: "M12 10h2v1c.4-.7 1.3-1.2 2.4-1.2 1.9 0 3.1 1.2 3.1 3.4V17h-2v-3.6c0-1.1-.5-1.8-1.5-1.8-1 0-1.7.7-1.9 1.4-.1.2-.1.5-.1.8V17h-2v-7z", fill: "currentColor" })] }));
}
function Social({ instagram, linkedin }) {
    return (_jsxs("div", { className: "socials", children: [instagram ? (_jsx("a", { href: instagram, target: "_blank", rel: "noreferrer", "aria-label": "Instagram profile", children: _jsx(Instagram, {}) })) : null, linkedin ? (_jsx("a", { href: linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn profile", children: _jsx(Linked, {}) })) : null] }));
}
function Footer(title, text) {
    return (_jsxs("div", { className: "footer", children: [_jsx(ParagraphTitle, { text: title }), _jsx(ParagraphText, { text: text }), _jsx(Social, { instagram: "https://www.instagram.com/derek46631?igsh=dmYwMWpsZzJ0cWpn", linkedin: "https://www.linkedin.com/in/derek-cardenas-baa004261/" })] }));
}
const root = createRoot(document.getElementById("root"));
root.render(createElement("div", {
    className: "page",
}, Title("The Dk Page"), Footer("Derek Cardenas", "Aspiring mechanical engineering student at Vaughn College of Aeronautics and Technology. Studying in 3D design and modeling."), createElement("div", { className: "circle-row" }, divWrap(leftCircles, { className: "circle-col left-col" }), divWrap(rightCircles, { className: "circle-col right-col" }))));
