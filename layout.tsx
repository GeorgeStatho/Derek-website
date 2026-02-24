import { useEffect } from "react";
import { DESIGN_HEIGHT, DESIGN_WIDTH } from "./design.js";
import { applyPlaneNormalizedPosition } from "./plane.js";

export function useAutoFitPage(pageRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const fitPage = () => {
      const page = pageRef.current;
      if (!page) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const scaleX = vw / DESIGN_WIDTH;
      const scaleY = vh / DESIGN_HEIGHT;
      const scale = Math.min(scaleX, scaleY);

      page.style.setProperty("--scale", String(scale));
      page.style.transformOrigin = "center center";

      const plane = page.querySelector(".plane") as HTMLElement | null;
      if (plane) {
        applyPlaneNormalizedPosition(plane);
      }
    };

    fitPage();
    window.addEventListener("resize", fitPage);
    window.addEventListener("load", fitPage);

    const fonts = (document as Document & { fonts?: { ready?: Promise<unknown> } }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(() => fitPage()).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", fitPage);
      window.removeEventListener("load", fitPage);
    };
  }, [pageRef]);
}
