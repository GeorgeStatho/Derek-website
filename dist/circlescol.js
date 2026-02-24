import { createElement } from "react";
import { HTMLElements, divWrapperElements, innershadowdefs } from "./htmlwrappers.js";
function createCircRect(x, y) {
    const group = [];
    let shape = new HTMLElements("rect", {
        fill: "var(--fill-0, #D9D9D9)",
        height: 19,
        width: 83,
        x,
        y: y - 10,
    });
    group.push(shape.toJSX());
    shape = new HTMLElements("ellipse", {
        cx: x,
        cy: y,
        fill: "var(--fill-0, #D9D9D9)",
        rx: 40,
        ry: 39.5,
    });
    group.push(shape.toJSX());
    return new HTMLElements("g", { clipPath: "url(#clip0)", filter: "url(#innerShadow)" }, group).toJSX();
}
function createCircRectCol(x, y, count) {
    const svgs = [];
    for (let i = 0; i < count; i++) {
        const svgElement = new HTMLElements("svg", { width: 127, height: 114, viewBox: "0 0 127 114" }, [innershadowdefs.toJSX(), createCircRect(x, y)]).toJSX();
        svgs.push(svgElement);
    }
    return svgs;
}
function withRotation(elements, angleStep) {
    return elements.map((el, index) => createElement("div", { className: "circle-rot", style: { transform: `rotate(${index * angleStep}deg)` } }, el));
}
export function buildCircleColumns() {
    const svgColumn = createCircRectCol(66, 53.5, 6);
    const leftCircles = divWrapperElements(withRotation(svgColumn, 45), {
        className: "circle-item left-circle-col",
    });
    const rightCircles = divWrapperElements(withRotation(svgColumn, 45), {
        className: "circle-item right-circle-col",
    });
    return { leftCircles, rightCircles };
}
export function startRandomCircleRotation() {
    const circles = Array.from(document.querySelectorAll(".circle-rot"));
    if (circles.length === 0) {
        return;
    }
    circles.forEach((el, index) => {
        const initialMatch = (el.style.transform || "").match(/rotate\(([-\d.]+)deg\)/);
        const initial = initialMatch ? Number(initialMatch[1]) : 0;
        el.dataset.rot = String(initial);
        const tick = () => {
            const current = Number(el.dataset.rot || "0");
            const direction = Math.random() < 0.5 ? -1 : 1;
            const step = 15 + Math.random() * 45;
            const next = current + direction * step;
            el.dataset.rot = String(next);
            el.style.transform = `rotate(${next}deg)`;
            const delay = 1200 + Math.random() * 2200;
            setTimeout(tick, delay);
        };
        const initialDelay = index * 150 + Math.random() * 500;
        setTimeout(tick, initialDelay);
    });
}
