import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { HTMLElements, divWrapperElements, divWrap, innershadowdefs, Footer, Title, CreateImage } from "./htmlwrappers.js";
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
            new HTMLElements("svg", { width: 127, height: 114, viewBox: "0 0 127 114" }, [innershadowdefs.toJSX(), createCircRect(x, y)]).toJSX();
        svgs.push(svgElement);
    }
    return svgs;
}
//end circle funtions
//creating circles
const svgColumn = createCircRectCol(66, 53.5, 6);
function withRotation(elements, angleStep) {
    return elements.map((el, index) => createElement("div", { className: "circle-rot", style: { transform: `rotate(${index * angleStep}deg)` } }, el));
}
const leftCircles = divWrapperElements(withRotation(svgColumn, 45), { className: "circle-item left-circle-col" });
const rightCircles = divWrapperElements(withRotation(svgColumn, 45), { className: "circle-item right-circle-col" });
//end creating circles
function Plane() {
    return (_jsxs("svg", { className: "plane", viewBox: "0 0 576 384", "aria-label": "Plane", role: "img", children: [_jsx("path", { fill: "currentColor", opacity: "1", stroke: "none", className: "tail", d: "M392.251038,195.699799 C399.772217,201.272156 405.590424,207.788147 408.860260,216.302734 C409.568848,218.147903 410.079773,220.112640 410.364899,222.068512 C411.181519,227.670258 409.621521,228.911392 404.414093,226.829727 C387.407959,220.031540 370.423737,213.178619 353.423523,206.365524 C343.222260,202.277191 332.816589,198.634232 322.862823,194.015137 C315.851440,190.761475 308.275574,193.783646 307.441772,203.456345 C306.770599,211.241959 306.048096,219.023163 305.353607,226.806763 C303.742432,244.864578 302.191528,262.927979 300.501068,280.978363 C299.658234,289.978027 299.562683,289.919830 307.797516,293.201752 C316.924347,296.839111 325.920319,300.828796 335.154388,304.163544 C339.965698,305.901062 343.148254,308.491089 344.470856,313.499878 C345.351624,316.835571 347.509064,319.780029 347.808594,323.558380 C344.547424,325.095764 341.592773,323.345215 338.698242,322.696259 C326.529114,319.967865 314.395935,317.068726 302.301422,314.026154 C299.754089,313.385315 298.516815,313.827942 297.056580,316.091034 C293.679626,321.324799 288.379608,321.396881 285.058929,316.153168 C283.411896,313.552277 281.882751,313.519318 279.332977,314.142487 C265.919403,317.421173 252.465698,320.535614 239.026764,323.710693 C237.433182,324.087158 235.846237,324.831757 233.758743,323.432953 C236.993469,315.257172 238.108353,306.142548 249.140823,303.003448 C258.695953,300.284729 267.685150,295.624023 277.041443,292.135345 C280.559418,290.823608 282.106049,289.059479 281.741028,285.188293 C280.086121,267.638702 278.620728,250.071289 277.074768,232.511383 C276.272522,223.399017 275.510406,214.282318 274.596710,205.180969 C274.218903,201.417557 274.165710,197.487885 270.626678,194.821442 C266.974030,192.069382 263.356049,192.446732 259.357056,194.059357 C232.797089,204.769943 206.200974,215.391144 179.587738,225.968796 C177.384338,226.844543 174.879425,229.089005 172.647797,227.106812 C170.221298,224.951553 171.468475,221.698486 172.227737,219.097916 C175.154083,209.074692 181.484695,201.265350 190.029449,195.725464 C196.221298,191.711014 199.060638,187.067612 198.026794,179.754486 C197.639145,177.012405 198.102844,174.110291 198.445679,171.313919 C198.959686,167.121658 201.991684,165.240097 205.727783,165.052841 C209.615234,164.857986 212.344559,167.034607 213.335968,170.946579 C213.815186,172.837433 214.098297,174.778000 214.560776,177.163055 C220.048630,174.183823 224.497787,170.469849 229.148209,167.064606 C230.483856,166.086563 230.685257,164.582001 230.681168,163.026245 C230.673721,160.194077 230.723419,157.361786 230.721344,154.529572 C230.718170,150.181305 232.581711,146.995636 236.894363,145.984009 C241.282196,144.954742 244.263763,147.098862 245.977753,151.135712 C246.235199,151.742004 246.474930,152.355804 246.722168,152.964447 C248.774109,153.447601 249.881699,151.927536 251.099823,150.978500 C258.720551,145.041336 266.194763,138.914001 273.878204,133.060638 C276.389709,131.147369 276.702820,128.839279 276.662750,126.066177 C276.441162,110.733627 276.908661,95.441833 279.633301,80.296494 C280.314575,76.509628 281.188263,72.780060 283.125793,69.422523 C286.865723,62.941624 294.551392,62.689335 298.514191,69.044823 C301.567688,73.941956 302.464294,79.599907 303.269073,85.213615 C305.212036,98.766579 305.654449,112.407547 305.277191,126.067703 C305.178650,129.636063 306.451019,131.931671 309.235748,134.036331 C317.698029,140.432068 325.990021,147.053101 334.104492,153.395798 C336.009888,152.551620 335.829987,151.152008 336.342957,150.166794 C338.108795,146.775482 340.894470,145.403671 344.574493,145.828522 C348.205078,146.247681 350.048553,148.701981 351.001129,151.968704 C351.230042,152.753815 351.430573,153.663834 351.260406,154.431320 C348.304199,167.763962 358.671417,171.527054 367.413147,177.219696 C367.916504,174.663788 368.250824,172.583115 368.744690,170.541046 C369.667084,166.727310 372.453644,164.901886 376.075592,165.035049 C379.561188,165.163177 382.465820,166.719574 383.377136,170.657562 C384.101288,173.786758 384.433868,177.002289 383.966553,180.088791 C382.873444,187.308029 385.573456,192.290588 392.251038,195.699799 z" }), _jsx("path", { fill: "currentColor", opacity: "1", stroke: "none", className: "stream", d: "M229.290985,243.001541 C229.286819,253.487717 229.293564,263.474365 229.270248,273.460938 C229.264359,275.983917 229.431427,279.017944 225.841263,278.899963 C222.660797,278.795380 222.752853,275.904449 222.746918,273.579895 C222.709534,258.932953 222.711258,244.285873 222.736816,229.638901 C222.741226,227.112076 222.714783,224.054352 226.208252,224.169632 C229.317291,224.272217 229.255203,227.151001 229.269318,229.519409 C229.295105,233.846817 229.285568,238.174454 229.290985,243.001541 z" }), _jsx("path", { fill: "currentColor", opacity: "1", stroke: "none", className: "stream", d: "M352.728333,259.998444 C352.725403,249.520065 352.717957,239.541245 352.724915,229.562408 C352.726593,227.176147 352.754150,224.312363 355.778687,224.171753 C359.245453,224.010605 359.277100,227.046906 359.279663,229.597565 C359.294312,244.233124 359.285950,258.868713 359.271881,273.504303 C359.269409,276.072632 359.237976,279.069977 355.745911,278.889313 C352.638885,278.728607 352.792816,275.792786 352.761078,273.470245 C352.701996,269.146820 352.734619,264.822144 352.728333,259.998444 z" }), _jsx("path", { fill: "currentColor", opacity: "1", stroke: "none", className: "stream", d: "M187.254303,261.001526 C187.253860,271.312317 187.275436,281.123627 187.236115,290.934723 C187.226257,293.395447 187.556702,296.582672 184.130844,296.733124 C180.614120,296.887543 180.745239,293.733887 180.739822,291.235107 C180.708145,276.601471 180.706924,261.967712 180.734192,247.334061 C180.738495,245.022003 180.525955,242.103043 183.774048,242.040314 C187.317963,241.971893 187.172699,245.043564 187.216293,247.531525 C187.291992,251.853897 187.247726,256.178375 187.254303,261.001526 z" }), _jsx("path", { fill: "currentColor", opacity: "1", stroke: "none", className: "stream", d: "M401.281403,280.992981 C401.282074,283.816925 401.498596,286.167725 401.228851,288.461395 C400.878082,291.443726 402.989319,296.417297 398.166412,296.543457 C393.218506,296.672821 394.939362,291.661682 394.865814,288.691132 C394.660278,280.391235 394.796387,272.082916 394.797760,263.777924 C394.798523,259.127106 394.636566,254.468445 394.860535,249.828415 C394.998932,246.961212 393.408356,242.325287 397.915619,242.197510 C402.561218,242.065842 401.185730,246.737656 401.227112,249.600708 C401.375916,259.896729 401.282745,270.196259 401.281403,280.992981 z" })] }));
}
//images creating
const images = [{ src: "./assets/derek.jpg", caption: "The man himself" },
    { src: "assets/derek2.jpg", caption: "Derek Today" },
    { src: "assets/gun.jpg", caption: "One of his inventions" }
];
const imageItems = images.map((img) => createElement("div", { className: "image-card" }, CreateImage(img.src, "image-item"), createElement("p", { className: "image-caption" }, img.caption)));
//end images creation
//rendering
const root = createRoot(document.getElementById("root"));
root.render(createElement("div", {
    className: "page",
}, Title("The Dk Page", '"Jersey 25", sans-serif'), Footer("Derek Cardenas", "Aspiring mechanical engineering student at Vaughn College of Aeronautics and Technology. Studying in 3D design and modeling.", "https://www.instagram.com/derek46631?igsh=dmYwMWpsZzJ0cWpn", "https://www.linkedin.com/in/derek-cardenas-baa004261/"), createElement("div", { className: "circle-row" }, divWrap(leftCircles, { className: "circle-col left-col" }), createElement("div", { className: "image-col" }, createElement("div", { className: "image-grid" }, imageItems)), divWrap(rightCircles, { className: "circle-col right-col" })), Plane()));
function startRandomCircleRotation() {
    const circles = Array.from(document.querySelectorAll(".circle-rot"));
    console.log("circle-rot count:", circles.length);
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
window.addEventListener("load", () => {
    setTimeout(startRandomCircleRotation, 0);
});
const plane = document.querySelector(".plane");
if (plane) {
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    plane.addEventListener("pointerdown", (e) => {
        dragging = true;
        plane.classList.add("dragging");
        plane.setPointerCapture(e.pointerId);
        const rect = plane.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });
    plane.addEventListener("pointermove", (e) => {
        if (!dragging)
            return;
        plane.style.left = `${e.clientX - offsetX}px`;
        plane.style.top = `${e.clientY - offsetY}px`;
        plane.style.bottom = "auto";
    });
    plane.addEventListener("pointerup", (e) => {
        dragging = false;
        plane.releasePointerCapture(e.pointerId);
    });
}
