import { useEffect, useRef, useState } from 'react'
import './AnimatedLogo.css'

const WORD = 'RAMESHWARAM'

export default function AnimatedLogo({ onFinish, loop = false }) {
  const [playKey, setPlayKey] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (onFinish) {
      timeoutRef.current = setTimeout(onFinish, 3600)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [onFinish, playKey])

  const replay = () => {
    if (loop) setPlayKey((k) => k + 1)
  }

  return (
    <div className="al-stage" key={playKey} onClick={replay} role={loop ? 'button' : undefined}>

      <svg viewBox="-120 -130 240 250" width="230" height="240">
        <circle className="al-ring" cx="0" cy="-10" r="108" />

        <g className="al-mark-group" transform="translate(0,-10)">
          <g className="al-petals">
            <path className="al-petal" transform="rotate(0)" d="M 0 -95 L 17 -50 Q 17 -38 0 -34 Q -17 -38 -17 -50 Z" />
            <path className="al-petal" transform="rotate(45)" d="M -22 -40 Q -30 -75 0 -95 Q 30 -75 22 -40 Q 11 -55 0 -46 Q -11 -55 -22 -40 Z" />
            <path className="al-petal" transform="rotate(90)" d="M 0 -95 L 17 -50 Q 17 -38 0 -34 Q -17 -38 -17 -50 Z" />
            <path className="al-petal" transform="rotate(135)" d="M -22 -40 Q -30 -75 0 -95 Q 30 -75 22 -40 Q 11 -55 0 -46 Q -11 -55 -22 -40 Z" />
            <path className="al-petal" transform="rotate(180)" d="M 0 -95 L 17 -50 Q 17 -38 0 -34 Q -17 -38 -17 -50 Z" />
            <path className="al-petal" transform="rotate(225)" d="M -22 -40 Q -30 -75 0 -95 Q 30 -75 22 -40 Q 11 -55 0 -46 Q -11 -55 -22 -40 Z" />
            <path className="al-petal" transform="rotate(270)" d="M 0 -95 L 17 -50 Q 17 -38 0 -34 Q -17 -38 -17 -50 Z" />
            <path className="al-petal" transform="rotate(315)" d="M -22 -40 Q -30 -75 0 -95 Q 30 -75 22 -40 Q 11 -55 0 -46 Q -11 -55 -22 -40 Z" />
          </g>

          <g className="al-knot">
            <path className="al-strand h" pathLength="1" d="M -34 0 C -34 -15 -14 -15 -14 0 C -14 15 14 15 14 0 C 14 -15 34 -15 34 0" />
            <path className="al-strand v" pathLength="1" transform="rotate(90)" d="M -34 0 C -34 -15 -14 -15 -14 0 C -14 15 14 15 14 0 C 14 -15 34 -15 34 0" />
            <circle className="al-dot" cx="0" cy="0" r="3.4" />
            <circle className="al-dot" cx="-24" cy="0" r="2.2" />
            <circle className="al-dot" cx="24" cy="0" r="2.2" />
            <circle className="al-dot" cx="0" cy="-24" r="2.2" />
          </g>
        </g>
      </svg>

      <div className="al-wordmark">
        <span className="al-pre">THE</span>
        <h1 className="al-title">
          {[...WORD].map((ch, i) => (
            <span key={i} style={{ animationDelay: `${1.75 + i * 0.045}s` }}>
              {ch}
            </span>
          ))}
        </h1>
        <span className="al-post">CAFÉ</span>
      </div>
    </div>
  )
}