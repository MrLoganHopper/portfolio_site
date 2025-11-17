import React from 'react';
import { Canvas } from '@react-three/fiber';
import { DirectionalLight, AmbientLight } from 'three';
import Header from './headers.jsx';


export default function DoingDone() {
     return (
       
           <main
               style={{
                   margin: 0,
                   padding: 0,
                   boxSizing: 'border-box',
                   background: '#cdf564',
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
                       backgroundColor: '#cdf564',
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
                       style={{ width: '100vw', height: '80vh', background: '#cdf564' }}
                       
                   >
                       <directionalLight position={[0, 3, 2]} intensity={3} />
                       <ambientLight intensity={0.5} />
                       <Header text="Doing Done" color="#6a20ff" background="#cdf564" fontSizing={1.5}/>
                   </Canvas>
               </div>
               
   
               {/* Scrollable content */}
               
               <div
                   style={{
                       color: '#cdf564',
                       marginTop: '80vh', // same as canvas height
                       backgroundColor: '#7d41f5',
                       width: '100vw',
                       zIndex: 2,
                       padding : '2rem',
                       position: 'relative',
                       fontFamily: 'Helvetica, Arial, sans-serif',
                           
                       }}
                   >
                       <div style={{ maxWidth: '60vw', margin: '0 auto' }}>
                       <h1 style={{fontWeight: 'bold'}}>DOING DONE - PRODUCITVITY SOFTWARE SAAS</h1>
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
     <div style={{ textAlign: 'left' }}>Doing Done is a producitivy mobile and web app designed specifically for individuals with ADHD. I use it every day and would not be able to function without it</div>
     <div style={{ fontWeight: 'bold', textAlign: 'left' }}>ROLES</div>
     <div style={{ textAlign: 'left' }}>Full Stack Developer: Fronend Developer, Backend Developer, Database Engineer, UI/UX Designer, Buisness Strategeist, CEO</div>
     <div style={{ fontWeight: 'bold', textAlign: 'left' }}>STACK</div>
    <div style={{ textAlign: 'left' }}>Frontend: React / React Native (JSX / JS, HTML, CSS) Backend: FastAPI (Python), DataBase: DynamoDB + AWS S3 Buckets (images), Hosting: GoDaddy + CPannel</div>
      <div style={{ fontWeight: 'bold', textAlign: 'left' }}>YEARS</div>
     <div style={{ textAlign: 'left' }}>2023, 2024, 2025</div>
     <div style={{ fontWeight: 'bold', textAlign: 'left' }}>AWARDS</div>
     <div style={{ textAlign: 'left' }}>Young Entrepreneurs Academy National Finalist and Regional Winner, NCWIT National Honorable Mention</div>
     <div style={{ fontWeight: 'bold', textAlign: 'left' }}>LINK</div>
     <a
  style={{ textAlign: 'left', color: '#4100f5', textDecoration: 'underline', cursor: 'pointer' }}
  href="https://doingdone.fun"
  target="_blank"
  rel="noopener noreferrer"
>
  doingdone.fun
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
                       color: '#7d41f5',
                       marginTop: '40vh', // same as canvas height
                       backgroundColor: '#cdf564',
                       width: '100vw',
                       zIndex: 2,
                       padding : '2rem',
                       position: 'relative',
                       fontFamily: 'Helvetica, Arial, sans-serif',
                           
                       }}
   
                   >
   
                       <div style={{height: '100%', margin: '0 auto' }}>ddd
                           
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