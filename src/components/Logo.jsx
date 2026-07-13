import AnimatedMark from './AnimatedMark.jsx'

export default function Logo({ light = false, animated = false }) {
  const fill = light ? '#E9C876' : '#C89B3C'
  return (
    <a className="logo" href="#top">
      {animated ? (
        <AnimatedMark size={38} light={light} />
      ) : (
        <svg
          className="logo-mark"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 2 L21 9 L13 9 Z" fill={fill} />
          <rect x="15.5" y="8" width="3" height="4" fill={fill} />
          <path d="M9 12 C9 8 25 8 25 12 L27 20 L7 20 Z" fill={fill} />
          <rect x="6" y="20" width="22" height="3" fill={fill} />
          <rect x="8" y="23" width="18" height="7" rx="1" fill={fill} />
          {!light && (
            <>
              <rect x="14" y="25" width="2.4" height="5" fill="#FAF6EA" />
              <rect x="17.8" y="25" width="2.4" height="5" fill="#FAF6EA" />
            </>
          )}
        </svg>
      )}
      <span className={`logo-text ${light ? 'light' : ''}`}>
        RAMESHWARAM CAFÉ
        <small>Authentic South Indian</small>
      </span>
    </a>
  )
}
