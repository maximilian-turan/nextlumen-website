'use client'

import { useState, useCallback } from 'react'
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

function SpeakButton() {
  const [speaking, setSpeaking] = useState(false)

  const speak = useCallback(() => {
    if (!('speechSynthesis' in window) || speaking) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(
      'Future begins. Today... Welcome to NextLumen.'
    )
    utterance.lang = 'en-US'
    utterance.rate = 0.88
    utterance.pitch = 0.95

    // Pick a deep English voice if available
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v =>
      v.lang.startsWith('en') && /daniel|alex|google us|microsoft david/i.test(v.name)
    )
    if (preferred) utterance.voice = preferred

    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [speaking])

  return (
    <button
      onClick={speak}
      aria-label="Let the robot speak"
      className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
        ${speaking
          ? 'border-white/40 text-white bg-white/10 cursor-default'
          : 'border-white/20 text-neutral-400 hover:border-white/50 hover:text-white hover:bg-white/5 cursor-pointer'
        }`}
    >
      {/* Sound wave icon */}
      <span className="flex items-end gap-[3px] h-4">
        {[1, 2, 3, 2, 1].map((h, i) => (
          <span
            key={i}
            className={`w-[3px] rounded-full bg-current transition-all duration-150 ${speaking ? 'animate-pulse' : ''}`}
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </span>
      {speaking ? 'Speaking...' : 'Let the robot speak'}
    </button>
  )
}

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
          <SpeakButton />
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
