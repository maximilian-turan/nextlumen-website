'use client'

import { SplineScene } from "@/components/ui/spline";

export function SplineSceneBasic() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Background Scene */}
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />

      {/* Minimal Content - Top Left Corner */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-lg md:text-2xl font-display font-bold text-white mb-1">
          NextLumen
        </h1>
        <p className="text-xs md:text-sm text-white/70">
          Build the Future. Today
        </p>
      </div>
    </div>
  )
}