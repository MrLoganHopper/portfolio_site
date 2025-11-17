import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import MaiaMakes from './MaiaMakes.jsx';


export default function Scene() {
  const [hovered, setHovered] = useState({ left: false, right: false, enter: false });

  // Helper to dispatch synthetic keydown event
  const dispatchKey = (key) => {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
  };

  return (
    <main
      style={{
        position: 'fixed', // or 'absolute'
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
      }}
    >
      <div>
        {/* Enter key image */}
        <img
          src="/enterkey.png"
          alt="enter key"
          style={{
            position: 'absolute',
            bottom: '16vh',
            right: '78vw',
            height: hovered.enter ? '80px' : '70px',
            zIndex: 2,
            transition: 'height 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered((h) => ({ ...h, enter: true }))}
          onMouseLeave={() => setHovered((h) => ({ ...h, enter: false }))}
          onClick={() => dispatchKey('Enter')}
        />
        {/* Left arrow key image */}
        <img
          src="/arrowkey.png"
          alt="arrow keys"
          style={{
            position: 'absolute',
            bottom: '7vh',
            left: '7vw',
            height: hovered.left ? '80px' : '70px',
            zIndex: 2,
            transition: 'height 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered((h) => ({ ...h, left: true }))}
          onMouseLeave={() => setHovered((h) => ({ ...h, left: false }))}
          onClick={() => dispatchKey('ArrowLeft')}
        />
        {/* Right arrow key image */}
        <img
          src="/arrowkey.png"
          alt="arrow keys"
          style={{
            position: 'absolute',
            bottom: '7vh',
            right: '78vw',
            height: hovered.right ? '80px' : '70px',
            zIndex: 2,
            transition: 'height 0.2s',
            cursor: 'pointer',
            transform: 'rotate(180deg)',
          }}
          onMouseEnter={() => setHovered((h) => ({ ...h, right: true }))}
          onMouseLeave={() => setHovered((h) => ({ ...h, right: false }))}
          onClick={() => dispatchKey('ArrowRight')}
        />
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ width: '100vw', height: '100vh', background: '#4100f5' }} gl={{ clearColor: '#0a1a2f' }}>
        <directionalLight position={[0, 3, 2]} intensity={3} />
        <ambientLight intensity={0.5} />


        <Environment preset="city" />
        
        <MaiaMakes />
         
        <Model  />
        {/* Post-processing: bloom for glow + subtle noise/vignette */}
        
       
          
       
      </Canvas>

  </main>
  );
}