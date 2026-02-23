import React, { createElement, JSX } from "react"
import { createRoot } from "react-dom/client";
import { HTMLElements, divWrapperElements, divWrap,innershadowdefs, Footer, Title} from "./htmlwrappers.js";

//circle functions
function createCircRect(x:number,y:number){
    let group=[];
    let shape=new HTMLElements("rect",{fill: "var(--fill-0, #D9D9D9)",height: 19 ,width: 83 ,x: x ,y: y-10});
    group.push(shape.toJSX());
    shape=new HTMLElements("ellipse", {cx: x,cy: y,fill: "var(--fill-0, #D9D9D9)",rx: 40,ry: 39.5,});
    group.push(shape.toJSX());
    return new HTMLElements("g", { clipPath: "url(#clip0)", filter: "url(#innerShadow)" }, group).toJSX();
}
function createCircRectCol(x: number, y: number, count: number): React.ReactElement[] {
  const svgs: React.ReactElement[] = [];
  let svgElement:React.ReactElement;
  for (let i = 0; i < count; i++) {
    svgElement=
      new HTMLElements(
        "svg",
        { width: 127, height: 114, viewBox: "0 0 127 114" },
        [innershadowdefs.toJSX(), createCircRect(x, y)]
      ).toJSX();

      svgs.push(svgElement);
  }

  return svgs;
}
//end circle funtions

//creating circles
const svgColumn=createCircRectCol(66,53.5,6)

let leftCircles=divWrapperElements(svgColumn,{
      className: "circle-item left-circle-col"
    },45)

const rightCircles = divWrapperElements(
  svgColumn,
  { className: "circle-item right-circle-col" },
  45
);
//end creating circles

const root = createRoot(document.getElementById("root")!);
root.render(
  createElement(
    "div",
    {
      className: "page",
    },Title("The Dk Page", '"Jersey 25", sans-serif'),
    Footer("Derek Cardenas","Aspiring mechanical engineering student at Vaughn College of Aeronautics and Technology. Studying in 3D design and modeling.","https://www.instagram.com/derek46631?igsh=dmYwMWpsZzJ0cWpn","https://www.linkedin.com/in/derek-cardenas-baa004261/"),
    createElement(
      "div",
      { className: "circle-row" },
      divWrap(leftCircles, { className: "circle-col left-col" }),
      divWrap(rightCircles, { className: "circle-col right-col" })
    )
  )
);
