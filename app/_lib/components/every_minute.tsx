"use client";

import { useEffect, useState } from "react";

export default function EveryMinute() {
  const [time, setTime] = useState<string>(new Date().toUTCString());

  useEffect(() => {
    const pending = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(pending);
  }, []);

  return <time suppressHydrationWarning={true}>{time}</time>;
}
