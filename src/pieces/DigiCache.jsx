import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DirectionalLight, AmbientLight } from 'three';
import Header from './headers.jsx';


export default function DigiCache() {
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
                              <Header text="DigiCache" color="white" background="#4100f5" fontSizing={1.8} istransparent={true} />
                          </Canvas>
                      </div>
                      
          
                      {/* Scrollable content */}
                      
                      <div
                          style={{
                              color: '#4100f5',
                              marginTop: '80vh', // same as canvas height
                              backgroundColor: 'white',
                              width: '100vw',
                              zIndex: 2,
                              padding : '2rem',
                              position: 'relative',
                              fontFamily: 'Helvetica, Arial, sans-serif',
                                  
                              }}
                          >
                              <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
                              <h1 style={{fontWeight: 'bold'}}>DIGICACHE - A CAMPUS WIDE DIGITAL GEOCACHING EXPERIENCE</h1>
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
            <div style={{ textAlign: 'left' }}>DigiCache is an interactive, campus-wide digital geocaching experience designed to allow students to respond to prompts with either a song, text, or image, and view what fellow students left as well</div>
            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>ROLES</div>
            <div style={{ textAlign: 'left' }}>Project Lead, Full Stack Developer: Frontend Developer, Backend Developer, Database Engineer, Exprience Designer</div>
             <div style={{ fontWeight: 'bold', textAlign: 'left' }}>STACK</div>
    <div style={{ textAlign: 'left' }}>Frontend: React (JSX / JS, HTML, CSS) Blender, React Three Fiber (Three.js) Backend: Spring Boot (Java), DataBase: DynamoDB + AWS S3 Buckets (images), Hosting: Railway</div>
             <div style={{ fontWeight: 'bold', textAlign: 'left' }}>YEARS</div>
            <div style={{ textAlign: 'left' }}>2025</div>
            <div style={{ fontWeight: 'bold', textAlign: 'left' }}>LINK</div>
     <a
  style={{ textAlign: 'left', color: '#4100f5', textDecoration: 'underline', cursor: 'pointer' }}
  href="https://digicache-react-countdown-production.up.railway.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  digicache (mobile only)
</a>
          
          
          </div>
          
                         </div>
                          <br/>
                              <br/>
                              <br/>
                              <br/>
                              
                        
                      </div>
                       <div
                          style={{
                              color: 'white',
                              marginTop: '40vh', // same as canvas height
                              backgroundColor: '#4100f5',
                              width: '100vw',
                              zIndex: 2,
                              padding : '2rem',
                              position: 'relative',
                              fontFamily: 'Helvetica, Arial, sans-serif',
                                  
                              }}
          
                          >

                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
          
                              <div style={{height: '40vw', width: "70vw",   margin: '0 auto', backgroundColor: '#7f95ff', padding: '1rem', borderRadius: '20px', marginLeft: '9.5vw' }}>
                                    <video
                                      src="/project_images/digicache/digicache_video.mp4"
                                      autoPlay
                                      loop
                                      muted
                                      playsInline

                                      style={{ width: '100%', height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }}
                                    >
                                      Your browser does not support the video tag.
                                    </video>
                                </div>
          
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>

                            <div style={{ width: '90vw', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#4100f5',  borderRadius: '20px', marginLeft: '1vw' }}>
                                
                                
                                <div style={{ width: '90vw', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#4100f5',  borderRadius: '20px', marginLeft: '1vw' }}>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#7f95ff', padding: '1rem', borderRadius: '20px' }}>
                                        <img src="/project_images/digicache/digicachedogs.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>
                                    
                                    <br/>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#7f95ff', padding: '1rem', borderRadius: '20px', marginTop: '30vw' }}>
                                        <img src="/project_images/digicache/Justin.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>

                                </div>


                                <div style={{ width: '90vw', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'flex-start',   borderRadius: '20px', marginLeft: '1vw', marginTop: '-10vw' }}>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#7f95ff', padding: '1rem', borderRadius: '20px' }}>
                                        <img src="/project_images/digicache/usingdigicache.jpeg" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>
                                    
                                    <br/>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#7f95ff', padding: '1rem', borderRadius: '20px', marginTop: '30vw' }}>
                                        <img src="/project_images/digicache/digicachesamuel.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>

                                </div>


                            </div>
                              <br/>
          
          
                          </div>
                  </main>
              );
          }