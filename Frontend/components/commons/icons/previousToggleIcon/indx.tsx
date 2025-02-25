import React from "react";

function PreviousToggleIcon({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={className}>
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1668 6.00016H0.833496M0.833496 6.00016L5.50016 10.6668M0.833496 6.00016L5.50016 1.3335"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default PreviousToggleIcon;
