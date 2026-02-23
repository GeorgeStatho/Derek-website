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
    const inner = createElement(
      "div",
      { className: "circle-rot", style: { transform: `rotate(${angle}deg)` } },
      element
    );

    group.push(new HTMLElements("div", divprop, inner).toJSX());
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





function heading(text: string) {
  return (
    <h1 className="page-title">
      {text}
    </h1>
  );
}


export function Title(text:string, fontFamily?: string) {
  return (
    <div className="title-wrap">
      <h1 className="title-text" style={fontFamily ? { fontFamily } : undefined}>
        {text}
      </h1>
    </div>
  );
}

function ParagraphTitle({ text }: { text: string }) {
  return <p className="name-title">{text}</p>;
}

function ParagraphText({ text }: { text: string }) {
  return <p className="paragraph-text">{text}</p>;
}

function Instagram() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-label="Instagram" role="img">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function Linked() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-label="LinkedIn" role="img">
      <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="7" y="10" width="2" height="7" fill="currentColor" />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
      <path d="M12 10h2v1c.4-.7 1.3-1.2 2.4-1.2 1.9 0 3.1 1.2 3.1 3.4V17h-2v-3.6c0-1.1-.5-1.8-1.5-1.8-1 0-1.7.7-1.9 1.4-.1.2-.1.5-.1.8V17h-2v-7z" fill="currentColor" />
    </svg>
  );
}

function Social({ instagram, linkedin }: { instagram?: string; linkedin?: string }) {
  return (
    <div className="socials">
      {instagram ? (
        <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile">
          <Instagram />
        </a>
      ) : null}
      {linkedin ? (
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linked />
        </a>
      ) : null}
    </div>
  );
}


export function Footer(title: string,text:string, instagramLink:string,linkedinLink:string) {
  return (
    <div className="footer">
      <ParagraphTitle text={title} />
      <ParagraphText text={text} />
      <Social
        instagram={instagramLink}
        linkedin={linkedinLink}
      />
    </div>
  );
}
