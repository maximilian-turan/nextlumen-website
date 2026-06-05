import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/**
 * Lazy-loaded wrapper around the Spline runtime. Renders nothing until the
 * scene chunk is fetched, so a fallback (e.g. the gradient placeholder) can
 * stay visible underneath while the 3D scene streams in.
 */
export default function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={null}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
