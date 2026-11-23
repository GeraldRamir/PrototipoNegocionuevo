"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { getOpeningStatus, type OpeningStatus } from "./hours";

/** Computed on the client only, so server HTML never disagrees with the visitor's clock. */
export function useOpeningStatus(): OpeningStatus | null {
  const [status, setStatus] = useState<OpeningStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpeningStatus(site.hours, site.timeZone));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
