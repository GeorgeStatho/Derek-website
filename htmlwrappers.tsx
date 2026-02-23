import React, { createElement, JSX } from "react"

export class HTMLElements {
  title: keyof JSX.IntrinsicElements;
  prop: Record<string, unknown>;
  children: React.ReactNode| React.ReactNode[]=null;

  constructor(
    title: keyof JSX.IntrinsicElements,
    prop: Record<string, unknown> = {},
    children: React.ReactNode| React.ReactNode[] = null
  ) {
    this.title = title;
    this.prop = prop;
    this.children = children;
  }

  toJSX(): React.ReactElement {
    return React.createElement(this.title, this.prop, this.children);
  }
}

// usage
//const inner = new HTMLElements("span", "Inner text");
//const outer = new HTMLElements("div", { className: "box" },inner.toJSX());

//const jsx = outer.toJSX(); // <div class="box"><span>Inner text</span></div>
export function divWrapperElements(elements:React.ReactElement[],divprop:Record<string,unknown>,angleStep=0):React.ReactElement[]{
  const group: React.ReactElement[] = [];
  let angle = 0;

  for (const element of elements) {
    const propsWithRotation = {
      ...divprop,
      style: {
        ...(divprop.style as Record<string, unknown>),
        transform: `rotate(${angle}deg)`,
      },
    };

    group.push(new HTMLElements("div", propsWithRotation, element).toJSX());
    angle += angleStep;
  }
  return group
}

export function divWrap(
  element: React.ReactElement | React.ReactElement[],
  props: React.HTMLAttributes<HTMLDivElement> = {}
):React.ReactElement {
  const { style, ...rest } = props;
  return createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      },
      ...rest,
    },
    element
  );
}

export const innershadowdefs = new HTMLElements("defs", {}, [
      new HTMLElements(//inner shadow
        "filter",
        {
          id: "innerShadow",
          x: "-50%",
          y: "-50%",
          width: "200%",
          height: "200%",
          colorInterpolationFilters: "sRGB",
        },
        [
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
        ]
      ).toJSX(),
      new HTMLElements("clipPath", { id: "clip0" }, [
        new HTMLElements("rect", { fill: "white", width: 127, height: 114 }).toJSX(),
      ]).toJSX(),
    ]);
