import './AnimatedMark.css'

export default function AnimatedMark({ size = 40, light = false }) {
  return (
    <span
      className={`am-wrap ${light ? 'am-light' : ''}`}
      style={{ width: size, height: size }}
    >
      <span className="am-glow" />
      <svg viewBox="-60 -65 120 125" width={size} height={size}>
        <g className="am-mark-group" transform="translate(0,-5)">
          <g className="am-petals">
            <path className="am-petal" transform="rotate(0)" d="M 0 -48 L 8.5 -25 Q 8.5 -19 0 -17 Q -8.5 -19 -8.5 -25 Z" />
            <path className="am-petal" transform="rotate(45)" d="M -11 -20 Q -15 -37.5 0 -48 Q 15 -37.5 11 -20 Q 5.5 -27.5 0 -23 Q -5.5 -27.5 -11 -20 Z" />
            <path className="am-petal" transform="rotate(90)" d="M 0 -48 L 8.5 -25 Q 8.5 -19 0 -17 Q -8.5 -19 -8.5 -25 Z" />
            <path className="am-petal" transform="rotate(135)" d="M -11 -20 Q -15 -37.5 0 -48 Q 15 -37.5 11 -20 Q 5.5 -27.5 0 -23 Q -5.5 -27.5 -11 -20 Z" />
            <path className="am-petal" transform="rotate(180)" d="M 0 -48 L 8.5 -25 Q 8.5 -19 0 -17 Q -8.5 -19 -8.5 -25 Z" />
            <path className="am-petal" transform="rotate(225)" d="M -11 -20 Q -15 -37.5 0 -48 Q 15 -37.5 11 -20 Q 5.5 -27.5 0 -23 Q -5.5 -27.5 -11 -20 Z" />
            <path className="am-petal" transform="rotate(270)" d="M 0 -48 L 8.5 -25 Q 8.5 -19 0 -17 Q -8.5 -19 -8.5 -25 Z" />
            <path className="am-petal" transform="rotate(315)" d="M -11 -20 Q -15 -37.5 0 -48 Q 15 -37.5 11 -20 Q 5.5 -27.5 0 -23 Q -5.5 -27.5 -11 -20 Z" />
          </g>
          <g className="am-knot">
            <path className="am-strand h" pathLength="1" d="M -17 0 C -17 -7.5 -7 -7.5 -7 0 C -7 7.5 7 7.5 7 0 C 7 -7.5 17 -7.5 17 0" />
            <path className="am-strand v" pathLength="1" transform="rotate(90)" d="M -17 0 C -17 -7.5 -7 -7.5 -7 0 C -7 7.5 7 7.5 7 0 C 7 -7.5 17 -7.5 17 0" />
            <circle className="am-dot" cx="0" cy="0" r="1.7" />
          </g>
        </g>
      </svg>
    </span>
  )
}
