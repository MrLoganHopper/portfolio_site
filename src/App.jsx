import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scene from './Scene.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CostaCritters from './pieces/CostaCritters.jsx'
import DigiCache from './pieces/DigiCache.jsx'
import DoingDone from './pieces/DoingDone.jsx'
import MerchDesigns from './pieces/MerchDesigns.jsx'
import Loganthons from './pieces/Loganthons.jsx'



function App() {
  const [count, setCount] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const handleMusicToggle = () => {
    setMusicOn((prev) => {
      const next = !prev;
      if (next) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      return next;
    });
  };

  const marqueeContent = (
    <>
      &nbsp; MAIA ROCHA &nbsp;
      <img src="/logo.png" alt="logo" style={{ height: '6rem ', verticalAlign: 'middle', margin: '0 1rem', marginRight: '2rem', display: 'inline-block' }} />
      PORTFOLIO &nbsp;
      <img src="/logo.png" alt="logo" style={{ height: '6rem ', verticalAlign: 'middle', margin: '0 1rem', marginRight: '2rem', display: 'inline-block' }} />
      CREATIVE CODING &nbsp;
      <img src="/logo.png" alt="logo" style={{ height: '6rem ', verticalAlign: 'middle', margin: '0 1rem', marginRight: '2rem', display: 'inline-block' }} />
    </>
  );

  return (
    <>
    {!loading && (
    <Router>
      {/* Overlayed moving text */}
      <div
        style={{
          position: 'fixed',
          top: '0px',
          left: 0,
          width: '100vw',
          pointerEvents: 'none',
          zIndex: 10,
          overflow: 'hidden',
          backgroundColor: '#cdf564',
          padding: '3vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
            fontSize: '2rem',
            color: '#4100f5',
            animation: 'marquee 20s linear infinite',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            verticalAlign: 'middle',
          }}
        >
          {/* Repeat pattern 3 times for seamless loop */}
          {Array(3).fill(0).map((_, i) => (
            <span key={i}>{marqueeContent}</span>
          ))}
        </div>
      </div>

      {/* Music toggle image */}

      <div
        style={{
          position: 'fixed',
          top: 'calc(10vh + 70px)', // just below the marquee
          left: 0,
          zIndex: 11,
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
    >
      <img src = "/backarrow.png" alt="back arrow" style={{ height: '5rem ', verticalAlign: 'middle', margin: '1rem', display: 'inline-block', cursor: 'pointer'}} onClick={() => window.history.back()}  />


      </div>
      <div
        style={{        
          position: 'fixed',
          top: 'calc(10vh + 70px)', // just below the marquee
          right: 0,
          zIndex: 11,
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        onClick={handleMusicToggle}
      >
        <img
          src={musicOn ? "/music/music.png" : "/music/nomusic.png"}
          alt={musicOn ? "Music On" : "No Music"}
          style={{
            height: '6rem',
            verticalAlign: 'middle',
            margin: '1rem',
            display: 'inline-block',
          }}
        />
        {/* Hidden audio element */}
        <audio ref={audioRef} src="/music/PleaseHold.mp3" loop />
      </div>
      

    
      {/* 3D Scene */}
     
      {/* Add marquee keyframes to your CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}
      </style>
      <Routes>
        <Route path="/" element={<Scene />}  style={{ position: 'absolute', top: 0, left: 0, color: 'white', zIndex: 1}}/>
        <Route path="/pieces/CostaCritters.jsx" element={<CostaCritters />} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1}}/>
        <Route path="/pieces/DigiCache.jsx" element={<DigiCache />} />
        <Route path="/pieces/DoingDone.jsx" element={<DoingDone />} />
        <Route path="/pieces/MerchDesigns.jsx" element={<MerchDesigns />} />
        <Route path="/pieces/Loganthons.jsx" element={<Loganthons />} />
      </Routes>
      </Router>
    )}

    </>
  );
}

export default App
