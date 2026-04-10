'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden rounded-none border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Text content — bottom on mobile, left on desktop */}
        <div className="md:flex-1 px-8 pt-10 pb-4 md:py-0 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            NextLumen
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-neutral-400">
            Future begins. Today...
          </p>
        </div>

        {/* 3D Scene — top on mobile, right on desktop */}
        <div className="flex-1 relative min-h-[55vh] md:min-h-0 order-1 md:order-2">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
