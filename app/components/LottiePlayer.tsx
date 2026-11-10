"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type LottiePlayerProps = {
  /** Path inside /public, for example "/animation/hero.json". */
  src: string;
  className?: string;
};

// Fetches the animation only when it nears the viewport, so the JSON stays out of the JS bundle.
export default function LottiePlayer({ src, className = "" }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        fetch(encodeURI(src))
          .then((response) => {
            if (!response.ok) throw new Error(`Failed to load ${src}`);
            return response.json();
          })
          .then((json) => {
            if (!cancelled) setAnimationData(json);
          })
          .catch(() => {
            if (!cancelled) setFailed(true);
          });
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [src]);

  return (
    <div ref={containerRef} aria-hidden="true" className={`aspect-square w-full ${className}`}>
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={!reduceMotion}
          autoplay={!reduceMotion}
          className="h-full w-full"
        />
      ) : (
        !failed && <div className="h-full w-full animate-pulse rounded-2xl bg-slate-100/70" />
      )}
    </div>
  );
}
