import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DirectionalLight, AmbientLight } from 'three';
import Header from './headers.jsx';

export default function CostaCritters() {
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
                      <Header text="Costa Critters" color="#00e2a2" background="#4100f5" fontSizing={1.8}/>
                  </Canvas>
              </div>
              
  
              {/* Scrollable content */}
              
              <div
                  style={{
                      color: '#4100f5',
                      marginTop: '80vh', // same as canvas height
                      backgroundColor: '#64f5cd',
                      width: '100vw',
                      zIndex: 2,
                      padding : '2rem',
                      position: 'relative',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                          
                      }}
                  >
                      <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
                      <h1 style={{fontWeight: 'bold'}}>COSTA CRITTERS - A CAMPUS WIDE DIGITAL TREASURE HUNT</h1>
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
    <div style={{ textAlign: 'left' }}>Costa Critters was a campus wide digital treasure hunt in which students could leave their name to claim their find</div>
    <div style={{ fontWeight: 'bold', textAlign: 'left' }}>ROLES</div>
    <div style={{ textAlign: 'left' }}>Project Designer, Full Stack Developer: Frontend Developer, Backend Developer, Database Engineer, UI/UX Designer, 3D Modeler, Flyer Designer, Ideator</div>
    <div style={{ fontWeight: 'bold', textAlign: 'left' }}>STACK</div>
    <div style={{ textAlign: 'left' }}>Frontend: React (JSX / JS, HTML, CSS) Blender, React Three Fiber (Three.js) Backend: FastAPI (Python), DataBase: FireBase, Hosting: github pages</div>
     <div style={{ fontWeight: 'bold', textAlign: 'left' }}>YEARS</div>
    <div style={{ textAlign: 'left' }}> 2025</div>
       <div style={{ fontWeight: 'bold', textAlign: 'left' }}>LINK</div>
     <a
  style={{ textAlign: 'left', color: '#4100f5', textDecoration: 'underline', cursor: 'pointer' }}
  href="https://costa-critters.web.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  costa-critters.web.app (on mobile only)
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
                      color: '#64f5cd',
                      marginTop: '40vh', // same as canvas height
                      backgroundColor: '#4100f5',
                      width: '100vw',
                      zIndex: 2,
                      padding : '2rem',
                      position: 'relative',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                          
                      }}
  
                  >
  
                      <div style={{height: '100%', margin: '0 auto' }}>
                          
                           </div>
  
                            <br/>
                        <br/>
                                    <br/>
                                    <br/>
                                    <br/>
          
                              <div style={{height: '40vw', width: "70vw",   margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginLeft: '9.5vw' }}>
                                    <video
                                      src="/project_images/costa_critters/costa_critters_vid.mp4"
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

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px' }}>
                                        <img src="/project_images/costa_critters/Boxes.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>
                                    
                                    <br/>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '30vw' }}>
                                        <img src="/project_images/costa_critters/Spot.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>

                                </div>

                                <div style = {{ width: "80vw", height: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '5vw' , marginBottom: '5vw', marginLeft: '5vw' }}>
                                    <img src = "/project_images/costa_critters/MidThree.png" alt="flyer" style={{ width: '70vw', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                </div>

                                <div style={{ width: '90vw', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'flex-start',   borderRadius: '20px', marginLeft: '1vw' }}>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '30vw' }}>
                                        <img src="/project_images/costa_critters/IRL_Flyer.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>
                                    
                                    <br/>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px' }}>
                                        <img src="/project_images/costa_critters/Flyer.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>

                                </div>

                                <div style = {{ width: "80vw", height: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '5vw' , marginBottom: '5vw', marginLeft: '5vw' }}>
                                    <img src = "/project_images/costa_critters/EarlyFlyers.png" alt="flyer" style={{ width: '70vw', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                </div>


                                <div style={{ width: '90vw', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#4100f5',  borderRadius: '20px', marginLeft: '1vw' }}>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px' }}>
                                        <img src="/project_images/costa_critters/EarlyBox.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>
                                    
                                    <br/>

                                    <div style={{height: '40vw', width: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '30vw' }}>
                                        <img src="/project_images/costa_critters/Lockers.png" alt="digicache1" style={{ height: '100%', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                    </div>

                                </div>


                                <div style = {{ width: "80vw", height: "40vw", margin: '0 auto', backgroundColor: '#64f5cd', padding: '1rem', borderRadius: '20px', marginTop: '5vw' , marginBottom: '5vw', marginLeft: '5vw' }}>
                                    <img src = "/project_images/costa_critters/Users.png" alt="flyer" style={{ width: '70vw', display: 'block', margin: '0 auto', borderRadius: '20px' }} />
                                </div>







                            </div>
                              <br/>
  
  
                  </div>
          </main>
      );
  }