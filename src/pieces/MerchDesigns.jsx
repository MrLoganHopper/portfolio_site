import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DirectionalLight, AmbientLight } from 'three';
import Header from './headers.jsx';


export default function MerchDesigns() {
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
                           <Header text="Merch Designs" color="#ff4bcc" background="#4100f5" fontSizing={1.5} />
                       </Canvas>
                   </div>
                   
       
                   {/* Scrollable content */}
                   
                   <div
                       style={{
                           color: '#4100f5',
                           marginTop: '80vh', // same as canvas height
                           backgroundColor: '#f564cd',
                           width: '100vw',
                           zIndex: 2,
                           padding : '2rem',
                           position: 'relative',
                           fontFamily: 'Helvetica, Arial, sans-serif',
                               
                           }}
                       >
                           <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
                           <h1 style={{fontWeight: 'bold'}}>MERCH DESIGNS - HOODIES, T-SHIRTS, AND TOTES</h1>
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
         <div style={{ textAlign: 'left' }}I>I have designed and screen printed several pieces of clothing, this is a page to display the desings along with their prints</div>
         <div style={{ fontWeight: 'bold', textAlign: 'left' }}>ROLES</div>
         <div style={{ textAlign: 'left' }}>Designer, Screen Printer, Distributor</div>
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
                           color: '#f564cd',
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
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
                            <br/>
                           <br/>
                           <br/>
                           <br/>
       
       
                       </div>
               </main>
           );
       }