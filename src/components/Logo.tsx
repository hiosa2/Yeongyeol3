interface LogoProps {
  size?: number;
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ size = 120, variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Icon Only - 연결 심볼 */}
        <g>
          {/* Left Circle (Person) */}
          <circle
            cx="40"
            cy="60"
            r="18"
            fill="url(#gradient1)"
            opacity="0.9"
          />
          
          {/* Right Circle (Person) */}
          <circle
            cx="80"
            cy="60"
            r="18"
            fill="url(#gradient2)"
            opacity="0.9"
          />
          
          {/* Connection Line - 연결선 */}
          <path
            d="M 40 60 Q 60 45 80 60"
            stroke="url(#gradient3)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Center Heart - 연결의 중심 */}
          <path
            d="M 60 50 L 63 47 Q 65 45 67 47 Q 69 49 67 51 L 60 58 L 53 51 Q 51 49 53 47 Q 55 45 57 47 L 60 50 Z"
            fill="#FF6B9D"
          />
        </g>
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7D58FF" />
            <stop offset="100%" stopColor="#9B7EFF" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5AC8FA" />
            <stop offset="100%" stopColor="#7DD4FF" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7D58FF" />
            <stop offset="50%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#5AC8FA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size * 3}
      height={size}
      viewBox="0 0 360 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon Part */}
      <g>
        {/* Left Circle (Person) */}
        <circle
          cx="40"
          cy="60"
          r="18"
          fill="url(#gradient1-full)"
          opacity="0.9"
        />
        
        {/* Right Circle (Person) */}
        <circle
          cx="80"
          cy="60"
          r="18"
          fill="url(#gradient2-full)"
          opacity="0.9"
        />
        
        {/* Connection Line */}
        <path
          d="M 40 60 Q 60 45 80 60"
          stroke="url(#gradient3-full)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Center Heart */}
        <path
          d="M 60 50 L 63 47 Q 65 45 67 47 Q 69 49 67 51 L 60 58 L 53 51 Q 51 49 53 47 Q 55 45 57 47 L 60 50 Z"
          fill="#FF6B9D"
        />
      </g>
      
      {/* Text Part - YeonGyeol */}
      <g>
        <text
          x="130"
          y="70"
          fontSize="42"
          fontWeight="700"
          fill="#7D58FF"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          YeonGyeol
        </text>
        
        {/* Korean Subtitle */}
        <text
          x="130"
          y="95"
          fontSize="18"
          fontWeight="500"
          fill="#9B9B9B"
          letterSpacing="2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          연결
        </text>
      </g>
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1-full" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7D58FF" />
          <stop offset="100%" stopColor="#9B7EFF" />
        </linearGradient>
        <linearGradient id="gradient2-full" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="100%" stopColor="#7DD4FF" />
        </linearGradient>
        <linearGradient id="gradient3-full" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7D58FF" />
          <stop offset="50%" stopColor="#FF6B9D" />
          <stop offset="100%" stopColor="#5AC8FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
