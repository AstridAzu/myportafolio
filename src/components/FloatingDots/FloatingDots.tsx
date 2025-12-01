import { useState } from 'react';

const FloatingDots = () => {
  // Función para generar dots (equivalente al mixin de SASS)
  const generateDots = (count: number): string => {
    const shadows: string[] = [];
    for (let i = 0; i <= count; i++) {
      const x = (Math.random() * 3 - 0.5).toFixed(2);
      const y = (Math.random() * 3 - 0.5).toFixed(2);
      const hue = Math.floor(Math.random() * 360);
      shadows.push(`${x}em ${y}em 7px hsla(${hue}, 100%, 50%, 0.9)`);
    }
    return shadows.join(', ');
  };

  // Generar sombras para cada elemento (se generan una vez)
  const [shadows] = useState(() => ({
    body1: generateDots(40),
    body2: generateDots(40),
    head1: generateDots(40),
    head2: generateDots(40)
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'serif',
      fontSize: '52px',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <style>{`
        @keyframes move {
          from {
            transform: rotate(0deg) scale(12) translateX(-20px);
          }
          to {
            transform: rotate(360deg) scale(18) translateX(20px);
          }
        }
        
        .floating-dot {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 3em;
          height: 3em;
          color: transparent;
          mix-blend-mode: screen;
        }
        
        .floating-dot::before {
          content: '.';
        }
      `}</style>
      
      <div 
        className="floating-dot"
        style={{
          textShadow: shadows.body1,
          animation: '44s -27s move infinite ease-in-out alternate'
        }}
      />
      
      <div 
        className="floating-dot"
        style={{
          textShadow: shadows.body2,
          animation: '43s -32s move infinite ease-in-out alternate'
        }}
      />
      
      <div 
        className="floating-dot"
        style={{
          textShadow: shadows.head1,
          animation: '42s -23s move infinite ease-in-out alternate'
        }}
      />
      
      <div 
        className="floating-dot"
        style={{
          textShadow: shadows.head2,
          animation: '41s -19s move infinite ease-in-out alternate'
        }}
      />
    </div>
  );
};

export default FloatingDots;
