import React, { use, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';
import MaiaMakes from './MaiaMakes.jsx';
import "./App.css"
import { useLocation } from 'react-router-dom';





export default function Scene() {
  const [hovered, setHovered] = useState({ left: false, right: false, enter: false });
 const [first, setFirst] = useState(true);

  const [clicked, setClicked] = useState(false);
  const [enterClicked, setEnterClicked] = useState(true)


   

  // Helper to dispatch synthetic keydown event
  const dispatchKey = (key) => {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
    if (event === 'RightArrow') {
      setClicked(true);
    }
  };




  




   useEffect(() => {
      const handleKeyDown = (event) => {
  
        if (event.key === 'ArrowRight') {
          setClicked(true);
          if (first) {
            setEnterClicked(false);
          setTimeout(() => {
            setEnterClicked(true);
          
          }, 6000); // Reset clicked state after 1 second
        }
          setFirst(false);
        } else if (event.key === 'Enter' && clicked) {
          setEnterClicked(true);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [clicked]);



    








const handleRightArrowClick = () => {
  setClicked(true);
 
  if(first) {
  setTimeout(() => {
    setEnterClicked(false);
    setEnterClicked(true);
  }, 6000); // Reset clicked state after 1 second
}
  setFirst(false);
}

const handleEnterClick = () => {
  setEnterClicked(true);
}





useEffect(() => {
  console.log("clicked state:", clicked);
}, [clicked]);

 


  




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
        <img className={enterClicked ? "" : "blinking-element"}
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
        <img className={clicked ? "" : "blinking-element"}
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
          onClick={() => [dispatchKey('ArrowRight'), handleRightArrowClick()]}
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