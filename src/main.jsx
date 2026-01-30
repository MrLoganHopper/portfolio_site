import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Scene from './Scene.jsx';
import CostaCritters from './pieces/CostaCritters.jsx';
import DigiCache from './pieces/DigiCache.jsx';
import DoingDone from './pieces/DoingDone.jsx';
import MerchDesigns from './pieces/MerchDesigns.jsx';
import Loganthons from './pieces/Loganthons.jsx';
import { useState, useRef, useEffect } from 'react';

function PersistentUI() {
  const location = useLocation();
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // Example: change colors based on route
  const isHome = location.pathname === '/';
  const isCostaCritters = location.pathname === '/pieces/CostaCritters.jsx';
  const isDigiCache = location.pathname === '/pieces/DigiCache.jsx';
  const isDoingDone = location.pathname === '/pieces/DoingDone.jsx';
  const isMerchDesigns = location.pathname === '/pieces/MerchDesigns.jsx';
  const isLoganthons = location.pathname === '/pieces/Loganthons.jsx';
  const pageColors = {
    '/': { bg: '#cdf564', color: '#4100f5' },         // Home: green-yellow / blue
    '/pieces/CostaCritters.jsx': { bg: '#64f5cd', color: '#4100f5' }, // Teal / Blue
    '/pieces/DigiCache.jsx': { bg: '#ffffff', color: '#4100f5' },     // Lime / Blue
    '/pieces/DoingDone.jsx': { bg: '#7d41f5', color: '#cdf564' },     // Purple / Green-yellow
    '/pieces/MerchDesigns.jsx': { bg: '#f564cd', color: '#4100f5' },  // Magenta / Blue
    '/pieces/Loganthons.jsx': { bg: '#f5a641', color: '#4100f5' },    // Orange / Blue
  };
  const currentColors = pageColors[location.pathname] || { bg: '#ffffff', color: '#000000' }; 
  const marqueeBg = currentColors.bg;
  const marqueeColor = currentColors.color;

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

  return (
    <>
      {/* Marquee */}
      <div
        style={{
          position: 'fixed',
          top: '0px',
          left: 0,
          width: '100vw',
          pointerEvents: 'none',
          zIndex: 10,
          overflow: 'hidden',
          backgroundColor: marqueeBg,
          padding: '1vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
            fontSize: '2rem',
            color: marqueeColor,
            animation: 'marquee 20s linear infinite',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            verticalAlign: 'middle',
          }}
        >
          {Array(3).fill(0).map((_, i) => (
            <span key={i}>
              &nbsp; MAIA ROCHA &nbsp;
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: marqueeColor,
                  WebkitMaskImage: 'url(/logo.png)',
                  maskImage: 'url(/logo.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  display: 'inline-block',
                  margin: '0 1rem',
                  marginRight: '2rem',
                  verticalAlign: 'middle',
                }}
              />
              PORTFOLIO &nbsp;
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: marqueeColor,
                  WebkitMaskImage: 'url(/logo.png)',
                  maskImage: 'url(/logo.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  display: 'inline-block',
                  margin: '0 1rem',
                  marginRight: '2rem',
                  verticalAlign: 'middle',
                }}
              />
              CREATIVE CODING &nbsp;
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: marqueeColor,
                  WebkitMaskImage: 'url(/logo.png)',
                  maskImage: 'url(/logo.png)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  display: 'inline-block',
                  margin: '0 1rem',
                  marginRight: '2rem',
                  verticalAlign: 'middle',
                }}
              />
            </span>
          ))}
        </div>
      </div>
      {/* Back arrow */}
      <div
        style={{
          position: 'fixed',
          top: 'calc(10vh + 70px)',
          left: 0,
          zIndex: 11,
          cursor: isHome ? 'default' : 'pointer',
          pointerEvents: 'auto',
          opacity: isHome ? 0 : 1,
        }}
      >
        <div
          style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: marqueeBg,
            WebkitMaskImage: 'url(/backarrow.png)',
            maskImage: 'url(/backarrow.png)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            display: 'inline-block',
            margin: '1rem',
            verticalAlign: 'middle',
            cursor: isHome ? 'default' : 'pointer',
          }}
          onClick={() => window.history.back()}
        />
      </div>

      {/* Music toggle */}
      <div
        style={{
          position: 'fixed',
          top: 'calc(10vh + 70px)',
          right: 0,
          zIndex: 11,
          cursor: 'pointer',
          pointerEvents: 'auto',
        }}
        onClick={handleMusicToggle}
      >
        <div
          style={{
            width: '6rem',
            height: '6rem',
            backgroundColor: marqueeBg,
            WebkitMaskImage: `url(${musicOn ? "/music/music.png" : "/music/nomusic.png"})`,
            maskImage: `url(${musicOn ? "/music/music.png" : "/music/nomusic.png"})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            display: 'inline-block',
            margin: '1rem',
            verticalAlign: 'middle',
            cursor: 'pointer',
          }}
        />
        <audio ref={audioRef} src="/music/PleaseHold.mp3" loop />
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}
      </style>
    </>
  );
}

function MainRouter() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time and wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Minimum 2 seconds, adjust as needed
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading && (
        <div style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          backgroundColor: "#4400ff",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <video
            src="/loader.mp4"
            autoPlay
            loop
            muted
            style={{
              width: '50%',
              height: '50%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
      <PersistentUI />
      <Routes>
        <Route path="/" element={<Scene />} />
        <Route path="/pieces/CostaCritters.jsx" element={<CostaCritters />} />
        <Route path="/pieces/DigiCache.jsx" element={<DigiCache />} />
        <Route path="/pieces/DoingDone.jsx" element={<DoingDone />} />
        <Route path="/pieces/MerchDesigns.jsx" element={<MerchDesigns />} />
        <Route path="/pieces/Loganthons.jsx" element={<Loganthons />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
