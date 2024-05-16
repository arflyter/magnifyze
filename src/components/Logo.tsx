import React from 'react';

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 150 40" {...props}>
      {/* Logo Text */}
      <text
        x="10"
        y="30" // Position of the text within the SVG
        fill="#2563EB" // Color of the text
        fontSize="24" // Size of the text
        fontFamily="Arial, sans-serif" // Font family
        fontWeight="bold" // Bold text
      >
        Magnifyze
      </text>

      {/* Decorative elements */}
      <circle
        cx="120" // Horizontal position
        cy="20" // Vertical position
        r="10" // Radius for the circle
        fill="#2563EB" // Fill color for the circle
      />
      <line
        x1="120"
        y1="20"
        x2="140" // Line end point
        y2="30" // Creates a diagonal handle for a magnifying glass effect
        stroke="#2563EB" // Line color
        strokeWidth="2"
      />
    </svg>
  );
}
