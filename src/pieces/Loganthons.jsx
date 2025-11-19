import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DirectionalLight, AmbientLight } from 'three';
import Header from './headers.jsx';

export default function Loganthons() {
    return (
    
        <main
            style={{
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                background: '#4100f5',
                width: '100vw',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            {/* Background div */}
            <div
                style={{
                    zIndex: -2,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '200vh', // covers extra scroll
                    backgroundColor: '#4100f5',
                }}
            ></div>

            {/* Fixed header canvas */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '50vh',
                    zIndex: 1,
                }}
            >
                <Canvas
                    camera={{ position: [0, 0.3, 7], fov: 50 }}
                    style={{ width: '100vw', height: '80vh', background: '#4100f5' }}
                    
                >
                    <directionalLight position={[0, 3, 2]} intensity={3} />
                    <ambientLight intensity={0.5} />
                    <Header text="Loganthon" color="#ff9100" background="#4100f5" fontSizing={1.8}/>
                </Canvas>
            </div>
            

            {/* Scrollable content */}
            
            <div
                style={{
                    color: '#4100f5',
                    marginTop: '80vh', // same as canvas height
                    backgroundColor: '#f5a641',
                    width: '100vw',
                    zIndex: 2,
                    padding : '2rem',
                    position: 'relative',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                        
                    }}
                >
                    <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
                    <h1 style={{fontWeight: 'bold'}}>LOGANTHON - THE ANNUAL FRIENDS HACKATHON</h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div
  style={{
    display: 'grid',
    gridTemplateColumns: '200px 1fr', // 200px for first column, rest for second
    gap: '1rem',
    width: '100%',
    margin: '0 auto',
    maxWidth: '600px',
  }}
>
  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>OVERVIEW</div>
  <div style={{ textAlign: 'left' }}>The Loganthon is an annual friendly competition I host for my birthday in which I put my friends into teams to compete in a series of rediculous yet creatively challenging events which are only disclosed at the begining of the event</div>
  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>ROLES</div>
  <div style={{ textAlign: 'left' }}>Game Master, Creative Director, Brand Designer, Merch Designer and Manufacturer, Event Coordinator, Challenge Engineer</div>
   <div style={{ fontWeight: 'bold', textAlign: 'left' }}>YEARS</div>
  <div style={{ textAlign: 'left' }}>2022, 2023, 2024, 2025</div>


</div>

               </div>
                <br/>
                    <br/>
                    <br/>
                    <br/>
                    
              
            </div>
             <div
                style={{
                    color: '#f5a641',
                    marginTop: '40vh', // same as canvas height
                    backgroundColor: '#4100f5',
                    width: '100vw',
                    zIndex: 2,
                    padding : '2rem',
                    position: 'relative',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                        
                    }}

                >

                    <div style={{height: '100vh', margin: '0 auto' }}>

                        <img src= "https://scontent-lax3-2.cdninstagram.com/v/t51.82787-15/517402580_17860745859441461_2652882421536005453_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&cb=8438d1d6-990335f2&ig_cache_key=MzY3Mzk0MDk2ODcyODEwMjk0NQ%3D%3D.3-ccb1-7-cb8438d1d6-990335f2&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=QDfrSd3Q57EQ7kNvwGx1LsY&_nc_oc=AdlXGkcrF5QbLxYT-PkwBrpg814lAxrBJKFrAJZKDAR1vy-Hj9teUjQsG8aInEU7Hvw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_gid=nOQ5HudrDthqdAJrirMB2w&oh=00_Afip0EEoQhFXgZCEF6SBBi852yIka5luIh61_A71nCeotw&oe=6922B1B2" alt="Loganthon Merch" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                        
                         </div>

                </div>
        </main>
    );
}