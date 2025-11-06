interface MtsLogoProps {
  // className is used to control the size and styling of the <img> tag
  className?: string; 
  // The 'color' prop is no longer needed for a fixed-color PNG image
  color?: string; 
}

export const MtsLogo = ({ className = "h-10 w-10", color }: MtsLogoProps) => (
  <img 
    src="/mts-logo.png" 
    // Add the alt text for accessibility
    alt="MTS Logo Symbol"
    // Apply the sizing/styling class (e.g., h-10 w-10 for Tailwind CSS)
    className={className} 
    // This style helps the dark logo show up against a potentially dark background 
    // if it was transparent, but usually not needed for a standard logo placement.
    style={{ objectFit: 'contain' }} 
  />
);