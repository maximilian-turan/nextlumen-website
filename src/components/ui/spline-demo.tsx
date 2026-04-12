'use client'

import { useState, useCallback } from 'react'
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

function Logo3D() {
  const depths = [
    { offset: '7px, 10px', blur: '3px', color: '#000000' },
    { offset: '6px, 9px',  blur: '2px', color: '#0a0a0a' },
    { offset: '5px, 7px',  blur: '1px', color: '#141414' },
    { offset: '3px, 5px',  blur: '0px', color: '#1e1e1e' },
    { offset: '2px, 3px',  blur: '0px', color: '#2a2a2a' },
    { offset: '1px, 2px',  blur: '0px', color: '#383838' },
  ]

  return (
    <h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl select-none whitespace-nowrap"
      style={{
        fontFamily: 'var(--font-orbitron)',
        fontWeight: 900,
        letterSpacing: '0.05em',
        lineHeight: 1,
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {depths.map((d, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            background: d.color,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transform: `translate(${d.offset})`,
            filter: d.blur !== '0px' ? `blur(${d.blur})` : undefined,
          }}
        >
          NextLumen
        </span>
      ))}
      <span
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #e8e8e8 0%, #a0a0a0 18%, #d4d4d4 35%, #787878 55%, #b0b0b0 75%, #d8d8d8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))',
        }}
      >
        NextLumen
      </span>
    </h1>
  )
}

function SpeakButton({ onSpeakChange }: { onSpeakChange: (s: boolean) => void }) {
  const [speaking, setSpeaking] = useState(false)

  const speak = useCallback(() => {
    if (speaking) return
    const audio = new Audio('/NextLumen.mp3')
    audio.onplay = () => { setSpeaking(true); onSpeakChange(true) }
    audio.onended = () => { setSpeaking(false); onSpeakChange(false) }
    audio.onerror = () => { setSpeaking(false); onSpeakChange(false) }
    audio.play()
  }, [speaking, onSpeakChange])

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

function RobotSpeakingFX({ speaking }: { speaking: boolean }) {
  if (!speaking) return null
  return (
    <>
      {/* Pulsing glow rings around robot */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%',
            margin: 'auto',
            width: `${50 + i * 18}%`,
            height: `${40 + i * 14}%`,
            top: 0, bottom: 0, left: 0, right: 0,
            position: 'absolute',
            animation: `ping ${0.9 + i * 0.3}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Sound wave bars — robot mouth area */}
      <div
        className="absolute flex items-center gap-[2px] z-10"
        style={{ left: '50%', top: '30%', transform: 'translate(-50%, -50%)' }}
      >
        {[2, 3, 5, 4, 6, 4, 5, 3, 2].map((h, i) => (
          <span
            key={i}
            className="rounded-full bg-white/70"
            style={{
              width: '2px',
              height: `${h * 2}px`,
              animation: `soundbar 0.${5 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.06}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export function SplineSceneBasic() {
  const [speaking, setSpeaking] = useState(false)

  return (
    <>
      <style>{`
        @keyframes soundbar {
          from { transform: scaleY(0.3); opacity: 0.4; }
          to   { transform: scaleY(1);   opacity: 1; }
        }
        @keyframes ping {
          0%   { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>

      <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden rounded-none border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          {/* Text content */}
          <div className="md:flex-1 px-8 pt-10 pb-4 md:py-0 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
            <Logo3D />
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-neutral-400">
              Future begins. Today...
            </p>
            <SpeakButton onSpeakChange={setSpeaking} />
          </div>

          {/* 3D Robot Scene */}
          <div className="flex-1 relative min-h-[55vh] md:min-h-0 order-1 md:order-2">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
            <RobotSpeakingFX speaking={speaking} />
          </div>
        </div>
      </Card>
    </>
  )
}
