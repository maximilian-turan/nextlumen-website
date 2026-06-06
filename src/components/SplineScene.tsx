import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/**
 * Lazy-loaded wrapper around the Spline runtime. The scene streams in over the
 * network, so instead of letting the robot pop in abruptly we keep it
 * invisible until `onLoad` fires, then fade it in smoothly. A fallback (e.g.
 * the gradient placeholder) stays visible underneath during loading.
 */
export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Suspense fallback={null}>
      <Spline
        scene={scene}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-[1200ms] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </Suspense>
  );
}
