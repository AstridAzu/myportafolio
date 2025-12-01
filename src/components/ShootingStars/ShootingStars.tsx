import { useState } from 'react';

interface StarStyle extends React.CSSProperties {
  '--star-tail-length'?: string;
  '--top-offset'?: string;
  '--fall-duration'?: string;
  '--fall-delay'?: string;
  
}

const ShootingStars = () => {
  const randomRange = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  const [stars] = useState(() => 
    Array.from({ length: 50 }, (_, i) => {
      const tailLength = randomRange(500, 750) / 100;
      const topOffset = randomRange(0, 10000) / 100;
      const fallDuration = randomRange(6000, 12000) / 1000;
      const fallDelay = randomRange(0, 10000) / 1000;
      
      return {
        id: i,
        style: {
          '--star-tail-length': `${tailLength}em`,
          '--top-offset': `${topOffset}vh`,
          '--fall-duration': `${fallDuration}s`,
          '--fall-delay': `${fallDelay}s`,
        } as StarStyle
      };
    })
  );

  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translate3d(-30em, 0, 0);
          }
        }
        
        @keyframes tail-fade {
          0%, 50% {
            width: var(--star-tail-length);
            opacity: 1;
          }
          70%, 80% {
            width: 0;
            opacity: 0.4;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }
        
        @keyframes blink {
          50% {
            opacity: 0.6;
          }
        }
        
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          transform: rotate(-45deg);
          z-index: 1;
        }
        
        .shooting-star {
          --star-color: --var(--star-color);
          --star-tail-height: 2px;
          --star-width: calc(var(--star-tail-length) / 6);
          position: absolute;
          top: var(--top-offset);
          left: 0;
          width: var(--star-tail-length);
          height: var(--star-tail-height);
          color: var(--star-color);
          background: linear-gradient(45deg, currentColor, transparent);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px currentColor);
          transform: translate3d(104em, 0, 0);
          animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
                     tail-fade var(--fall-duration) var(--fall-delay) ease-out infinite;
        }
        
        @media screen and (max-width: 750px) {
          .shooting-star {
            animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
          }
        }
        
        .shooting-star::before,
        .shooting-star::after {
          position: absolute;
          content: '';
          top: 0;
          left: calc(var(--star-width) / -2);
          width: var(--star-width);
          height: 100%;
          background: linear-gradient(45deg, transparent, currentColor, transparent);
          border-radius: inherit;
          animation: blink 2s linear infinite;
        }
        
        .shooting-star::before {
          transform: rotate(45deg);
        }
        
        .shooting-star::after {
          transform: rotate(-45deg);
        }
      `}</style>
      
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={star.style}
          />
        ))}
      </div>
    </>
  );
};

export default ShootingStars;
