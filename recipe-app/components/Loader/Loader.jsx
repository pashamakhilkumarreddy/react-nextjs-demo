import { memo } from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
        <circle
          id="c"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="#0046ffeb"
          cx="45"
          cy="45"
          r="43"
        />
      </svg>
      <style jsx>{`
        .loader-container {
          max-height: 100vh;
        }

        svg {
          stroke-dasharray: 269.7405090332031px;
          stroke-dashoffset: 0;
          animation: loader 10s linear reverse infinite;
          transform: rotate(-90deg);
          max-height: 10rem;
        }

        @keyframes loader {
          50% {
            stroke-dashoffset: 269.7405090332031px;
          }
          50.01% {
            stroke-dashoffset: -269.7405090332031px;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(Loader);
