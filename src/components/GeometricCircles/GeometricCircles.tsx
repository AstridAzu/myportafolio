import { useState, useEffect } from 'react';

const GeometricCircles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 5
    }}>
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }

        .view-container {
          position: absolute;
          top: 0;
          left: 0;
          perspective: 400px;
          transition: transform 0.1s ease-out;
          pointer-events: none;
        }

        .main-plane {
          width: 60px;
          height: 60px;
          transform-style: preserve-3d;
          transform: rotateX(60deg) rotateZ(-30deg);
          animation: rotate 20s infinite linear;
        }

        .geo-circle {
          width: 60px;
          height: 60px;
          position: absolute;
          transform-style: preserve-3d;
          border-radius: 100%;
          box-sizing: border-box;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.8), inset 0 0 30px rgba(99, 102, 241, 0.6);
        }

        [data-theme='dark'] .geo-circle {
          box-shadow: 0 0 30px rgba(139, 92, 246, 1), inset 0 0 30px rgba(139, 92, 246, 0.8);
        }

        .geo-circle::before,
        .geo-circle::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 10%;
          height: 10%;
          border-radius: 100%;
          background: rgba(99, 102, 241, 1);
          box-sizing: border-box;
          box-shadow: 0 0 30px 1px rgba(99, 102, 241, 1);
        }

        [data-theme='dark'] .geo-circle::before,
        [data-theme='dark'] .geo-circle::after {
          background: rgba(139, 92, 246, 1);
          box-shadow: 0 0 30px 1px rgba(139, 92, 246, 1);
        }

        .geo-circle::before {
          transform: translateZ(-45px);
        }

        .geo-circle::after {
          transform: translateZ(45px);
        }

        .geo-circle:nth-child(1) {
          transform: rotateZ(72deg) rotateX(63.435deg);
        }

        .geo-circle:nth-child(2) {
          transform: rotateZ(144deg) rotateX(63.435deg);
        }

        .geo-circle:nth-child(3) {
          transform: rotateZ(216deg) rotateX(63.435deg);
        }

        .geo-circle:nth-child(4) {
          transform: rotateZ(288deg) rotateX(63.435deg);
        }

        .geo-circle:nth-child(5) {
          transform: rotateZ(360deg) rotateX(63.435deg);
        }

        @media (max-width: 768px) {
          .main-plane {
            width: 40px;
            height: 40px;
          }

          .geo-circle {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div 
        className="view-container"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="main-plane">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="geo-circle" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeometricCircles;
