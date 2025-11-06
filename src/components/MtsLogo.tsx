interface MtsLogoProps {
  // className is used to control the size and styling of the <img> tag
  className?: string; 
  // The 'color' prop is no longer needed for a fixed-color PNG image
  color?: string; 
}

// 1. Import your NEW PNG image (Adjust path as needed)
import MtsPngLogo from './mts-logo.png';

export const MtsLogo = ({ className = "h-10 w-10", color }: MtsLogoProps) => (
  // 2. Use the <img> tag to display the PNG file
  <img 
    // Use the imported PNG file as the source
    src={MtsPngLogo} 
    // Add the alt text for accessibility
    alt="MTS Logo Symbol"
    // Apply the sizing/styling class (e.g., h-10 w-10 for Tailwind CSS)
    className={className} 
    // This style helps the dark logo show up against a potentially dark background 
    // if it was transparent, but usually not needed for a standard logo placement.
    style={{ objectFit: 'contain' }} 
  />
);