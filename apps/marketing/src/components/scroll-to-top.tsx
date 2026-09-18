"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/** Plutajuće dugme za povratak na vrh stranice — pojavljuje se posle skrolovanja. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nazad na vrh"
      className="fixed right-4 bottom-24 z-50 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity hover:bg-primary/90"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
