import React, { use, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment, useProgress } from '@react-three/drei';
import MaiaMakes from './MaiaMakes.jsx';
import "./App.css"
import { useLocation } from 'react-router-dom';


function LoadingDetector({ onLoaded }) {
  const { active, progress } = useProgress();
  
  useEffect(() => {
    if (!active && progress === 100) {
      onLoaded();
    }
  }, [active, progress, onLoaded]);
  
  return null;
}

export default function Scene() {
  const [hovered, setHovered] = useState({ left: false, right: false, enter: false });
  const [first, setFirst] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [enterClicked, setEnterClicked] = useState(true);
  const [isEntered, setIsEntered] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const location = useLocation();
  const resetTimer = useRef(null);
  
  // Match the order in Model.jsx navigationList
  // boxRefs[0] = DigiCache, boxRefs[1] = CostaCritters, boxRefs[2] = Loganthons, boxRefs[3] = MerchDesigns, boxRefs[4] = DoingDone
  const projects = [
    'DIGICACHE',      // index 0 = boxRefs[0]
    'COSTA CRITTERS', // index 1 = boxRefs[1]
    'LOGANTHON',      // index 2 = boxRefs[2]
    'MERCH DESIGNS',  // index 3 = boxRefs[3]
    'DOING DONE',     // index 4 = boxRefs[4]
  ];

  // Reset on mount (or whenever the route changes)
  useEffect(() => {
    setIsEntered(false);
    setCurrentProjectIndex(null); // Reset project index
    setFirst(true); // Reset first click state
    setClicked(false); // Reset clicked state
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, [location.pathname]);

  // Helper to dispatch synthetic keydown event
  const dispatchKey = (key) => {
    const event = new KeyboardEvent('keydown', { key });
    window.dispatchEvent(event);
    if (event === 'RightArrow') {
      setClicked(true);
    }
  };

  const handleEnterSelect = () => {
    setIsEntered(true); // show overlay while dropping
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setIsEntered(false), 2500); // drop duration + buffer
  };

useEffect(() => {
    
    setIsEntered(false);
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, [location.pathname]);




  




   useEffect(() => {
      const handleKeyDown = (event) => {
  
        if (event.key === 'ArrowRight') {
          setClicked(true);
          // First click selects boxRefs[4] (highest index)
          setCurrentProjectIndex((prev) => {
            if (prev === null) return 4; // First click = DoingDone (boxRefs[4])
            return Math.max(prev - 1, 0); // Decrement to move through array
          });

          
          if (first) {
            setEnterClicked(false);
            setTimeout(() => {
              setEnterClicked(true);
            }, 6000); // Reset clicked state after 1 second
        }
        setFirst(false);
      } else if (event.key === 'ArrowLeft') {
        setCurrentProjectIndex((prev) => {
          if (prev === null) return null;
          return Math.min(prev + 1, 4); // Increment but cap at 4
        });
      } else if (event.key === 'Enter' && clicked) {
        setEnterClicked(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clicked, first, projects.length]);



    








const handleRightArrowClick = () => {
  // Don't call dispatchKey here, just let the click handler dispatch the event
  // This prevents double-firing
  if (first) {
    setEnterClicked(false);
    setTimeout(() => {
      setEnterClicked(true);
    }, 6000);
  }
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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#4100f5',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: isEntered ? 11 : 0,
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '2vh',
          left: '2vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '220px',
          height: '150px',
          zIndex: 2,
          gap: '0.5rem',
        }}
      >
        {/* Enter key image */}
        <img className={enterClicked ? "" : "blinking-element"}
          src="/enterkey.png"
          alt="enter key"
          style={{
            height: hovered.enter ? '80px' : '70px',
            zIndex: 2,
            alignSelf: 'flex-end',
            transition: 'height 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered((h) => ({ ...h, enter: true }))}
          onMouseLeave={() => setHovered((h) => ({ ...h, enter: false }))}
          onClick={() => dispatchKey('Enter')}
        />
        {/* Left arrow key image */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
        <img
          src="/arrowkey.png"
          alt="arrow keys"
          style={{
            height: hovered.left ? '80px' : '70px',
            zIndex: 2,
            transition: 'height 0.2s',
            alignSelf: 'flex-start',
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
            height: hovered.right ? '80px' : '70px',
            zIndex: 2,
            transition: 'height 0.2s',
            cursor: 'pointer',
            transform: 'rotate(180deg)',
     
          }}
          onMouseEnter={() => setHovered((h) => ({ ...h, right: true }))}
          onMouseLeave={() => setHovered((h) => ({ ...h, right: false }))}
          onClick={() => { dispatchKey('ArrowRight'); handleRightArrowClick(); }}
        />
        </div>
      </div>


      <div style={{zIndex:2, width: '500px', height: '70px', position: 'fixed',
          top: 'calc(10vh + 100px)', right: '12vw', color: '#cdf564', fontSize: '40px', alignItems: 'center', justifyContent: 'center', textAlign: 'right', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: "bold"}}>
        {currentProjectIndex !== null ? projects[currentProjectIndex] : ''}
      </div>

          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ width: '100vw', height: '100vh', background: '#4100f5' }} gl={{ clearColor: '#0a1a2f' }}>
          <LoadingDetector onLoaded={() => setAssetsLoaded(true)} />
          <directionalLight position={[0, 3, 2]} intensity={3} />
        <ambientLight intensity={0.5} />


        <Environment preset="city" />

        <MaiaMakes />
          </Canvas>

          </div>

          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: isEntered ? 12 : 1 }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ width: '100vw', height: '100vh',  }} gl={{ clearColor: '#0a1a2f' }}>
          <LoadingDetector onLoaded={() => setAssetsLoaded(true)} />
          <directionalLight position={[0, 3, 2]} intensity={3} />
        <ambientLight intensity={0.5} />


        <Environment preset="city" />
        
      
         
        <Model onEnterSelect={handleEnterSelect} style={{"zIndex": isEntered ? 12 : 0}} />
        {/* Post-processing: bloom for glow + subtle noise/vignette */}
        
       
          
       
      </Canvas>
      </div>

  </main>
  );
}