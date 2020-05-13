import React from "react"

const Wave = () => (
  <svg width="100%" height="154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="white">
      <animate
        repeatCount="indefinite"
        fill="freeze"
        attributeName="d"
        dur="10s"
        values="
      M-1 25C488 154 489 -4.76837e-06 2560 0V154H0L-1 25Z;
      
      M0 71C572 134 307 43 2560 0V208H0V71Z;
      
      M0 28.0002C413 -67 307 116 2560 73V165H0V28.0002Z；
      
      M-1 25C488 154 489 -4.76837e-06 2560 0V154H0L-1 25Z
      "
      />
    </path>
  </svg>
)

export default Wave
