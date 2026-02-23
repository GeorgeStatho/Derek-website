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
        const propsWithRotation = {
            ...divprop,
            style: {
                ...divprop.style,
                transform: `rotate(${angle}deg)`,
            },
        };
        group.push(new HTMLElements("div", propsWithRotation, element).toJSX());
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
