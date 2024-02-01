"use client";

import { useEffect, useState } from "react";

export function UpdateMinute() {
  const [time, setTime] = useState<string>(new Date().toUTCString());

  useEffect(() => {
    const pend = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(pend);
  }, []);

  return <time suppressHydrationWarning={true}>{time}</time>;
}
