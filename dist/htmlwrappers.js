import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createElement } from "react";
export class HTMLElements {
    constructor(title, prop = {}, children = null) {
        this.children = null;
        this.title = title;
        this.prop = prop;
        this.children = children;
    }
    toJSX() {
        return React.createElement(this.title, this.prop, this.children);
    }
}
// usage
//const inner = new HTMLElements("span", "Inner text");
//const outer = new HTMLElements("div", { className: "box" },inner.toJSX());
//const jsx = outer.toJSX(); // <div class="box"><span>Inner text</span></div>
export function divWrapperElements(elements, divprop, angleStep = 0) {
    const group = [];
    let angle = 0;
    for (const element of elements) {
        const inner = createElement("div", { className: "circle-rot", style: { transform: `rotate(${angle}deg)` } }, element);
        group.push(new HTMLElements("div", divprop, inner).toJSX());
        angle += angleStep;
    }
    return group;
}
export function divWrap(element, props = {}) {
    const { style, ...rest } = props;
    return createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...style,
        },
        ...rest,
    }, element);
}
export const innershadowdefs = new HTMLElements("defs", {}, [
    new HTMLElements(//inner shadow
    "filter", {
        id: "innerShadow",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%",
        colorInterpolationFilters: "sRGB",
    }, [
        new HTMLElements("feOffset", { dx: 0, dy: 2 }).toJSX(),
        new HTMLElements("feGaussianBlur", { stdDeviation: 3, result: "blur" }).toJSX(),
        new HTMLElements("feComposite", {
            in: "blur",
            in2: "SourceAlpha",
            operator: "arithmetic",
            k2: -1,
            k3: 1,
            result: "innerShadow",
        }).toJSX(),
        new HTMLElements("feColorMatrix", {
            in: "innerShadow",
            type: "matrix",
            values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0",
        }).toJSX(),
        new HTMLElements("feComposite", { in2: "SourceGraphic", operator: "over" }).toJSX(),
    ]).toJSX(),
    new HTMLElements("clipPath", { id: "clip0" }, [
        new HTMLElements("rect", { fill: "white", width: 127, height: 114 }).toJSX(),
    ]).toJSX(),
]);
function heading(text) {
    return (_jsx("h1", { className: "page-title", children: text }));
}
export function Title(text, fontFamily) {
    return (_jsx("div", { className: "title-wrap", children: _jsx("h1", { className: "title-text", style: fontFamily ? { fontFamily } : undefined, children: text }) }));
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
export function Footer(title, text, instagramLink, linkedinLink) {
    return (_jsxs("div", { className: "footer", children: [_jsx(ParagraphTitle, { text: title }), _jsx(ParagraphText, { text: text }), _jsx(Social, { instagram: instagramLink, linkedin: linkedinLink })] }));
}
