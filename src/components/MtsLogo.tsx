interface MtsLogoProps {
  className?: string;
  color?: string;
}

export const MtsLogo = ({ className = "h-10 w-10", color = "#0A579B" }: MtsLogoProps) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="4" opacity="0.1" />
    <path d="M30 35H70V45H40V65H30V35Z" fill={color} />
    <path d="M55 40L65 60H75L65 40H55Z" fill={color} />
    <text x="50" y="85" fontSize="12" fontWeight="bold" fill={color} textAnchor="middle">
      MTS TECH
    </text>
  </svg>
);
