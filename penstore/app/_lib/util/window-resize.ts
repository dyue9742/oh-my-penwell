import { useEffect, useState } from "react";

export interface IWinSize {
  w: number;
  h: number;
}

export const windowResize = () => {
  const _w = typeof window !== "undefined" ? window.innerWidth : 0;
  const _h = typeof window !== "undefined" ? window.innerHeight : 0;
  const [winSize, setWinSize] = useState<IWinSize>({ w: _w, h: _h });

  useEffect(() => {
    function resizeUpdater() {
      console.log("resizeUpdater is calling...");
      const w = window.innerWidth / 2 - 256;
      const h = window.innerHeight / 100;

      setWinSize({ w: w, h: h });
    }

    window.addEventListener("resize", resizeUpdater);

    return () => {
      window.removeEventListener("resize", resizeUpdater);
    };
  });

  console.log(winSize);
  return winSize;
};
