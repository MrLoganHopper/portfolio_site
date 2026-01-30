import React, { useRef, useEffect, use } from 'react';
import { Box, useGLTF, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import {useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

// Preload the model for slightly faster loading
useGLTF.preload('/WireBasket.glb');
useGLTF.preload('Untitled.glb'); 

export default function Model({ onEnterSelect }) {
  const mesh = useRef();
  const mesh2 = useRef();
  const gltf2 = useGLTF('/Untitled.glb');
  const gltf = useGLTF('/WireBasket.glb');
  const groupRef = useRef();
  const [selected_box, setSelected_box] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);
  const [isDropping, setIsDropping] = React.useState(false);
  const [dropTarget, setDropTarget] = React.useState(null);
  const [selectedBoxShouldDrop, setSelectedBoxShouldDrop] = React.useState(false);
  const frameCount = useRef(0);
  const boxRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const texture = useTexture('/test.png');
  const navigationList = ["../pieces/DigiCache.jsx", "./pieces/CostaCritters.jsx",  "../pieces/Loganthons.jsx","../pieces/MerchDesigns.jsx", "../pieces/DoingDone.jsx" ];
  const navigate = useNavigate();
  const [pauseLocation, setPauseLocation] = React.useState(false);



  const dropanimation = async (targetIndex) => {
    if (targetIndex === null) return;
    onEnterSelect?.();           // notify Scene when Enter is used
    setPauseLocation(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsDropping(true);
    setDropTarget(targetIndex);
    setSelectedBoxShouldDrop(false);
    setTimeout(() => setSelectedBoxShouldDrop(true), 600);
  };

  // Handle navigation after drop animation completes
  useEffect(() => {
    if (isDropping && dropTarget !== null) {
      const timer = setTimeout( () => {
         // small delay
        
        setIsDropping(false);
        setDropTarget(null);
        setSelected_box(null);
        setPrevious(null);
        setSelectedBoxShouldDrop(false);
        navigate(navigationList[dropTarget]);
      }, 1000); // 1 second for the drop animation
      return () => clearTimeout(timer);
    }
  }, [isDropping, dropTarget]);



    useEffect(() => {
    const handleKeyDown = async (event) => {
      if (selected_box === null) {
        // On first key press, select the highest index box
        setSelected_box(boxRefs.length - 1);
        setPrevious(null);
        return;
      }
      if (event.key === 'ArrowLeft') {
        setPrevious(selected_box);
        setSelected_box((prev) => Math.min(prev + 1, boxRefs.length - 1));
      } else if (event.key === 'ArrowRight') {
        setPrevious(selected_box);
        setSelected_box((prev) => Math.max(prev - 1, 0));
      } else if (event.key === 'Enter' && selected_box !== null) {
        dropanimation(selected_box);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected_box]);


  const originalZPositions = [-1.1, -0.8, -0.5, -0.2, 0.1];


  useFrame(() => {
    // Handle drop animation - all boxes fall down and basket rotates
    if (isDropping && dropTarget !== null) {
      // Drop all boxes in world space (global Y axis)
      boxRefs.forEach((ref, idx) => {
        if (ref.current && groupRef.current) {
          // Keep selected box up until delay passes
          if (idx === dropTarget && !selectedBoxShouldDrop) {
            return; // Skip this box for now
          }
          
          // Get world position
          const worldPos = new THREE.Vector3();
          ref.current.getWorldPosition(worldPos);
          
          // Move down in world space
          worldPos.y -= 0.5;
          
          // Convert back to local position relative to parent
          ref.current.parent.worldToLocal(worldPos);
          ref.current.position.copy(worldPos);
        }
      });

      if(mesh.current && groupRef.current) {
        // Same for the basket mesh
        const worldPos = new THREE.Vector3();
        mesh.current.getWorldPosition(worldPos);
        worldPos.y -= 0.5;
        mesh.current.parent.worldToLocal(worldPos);
        mesh.current.position.copy(worldPos);
      }
      return;
    }

    if (selected_box === null) {
   
      // No box selected: all boxes at default y
      boxRefs.forEach(ref => {
        if (ref.current) {
          ref.current.position.y = -0.3;
          ref.current.position.z = originalZPositions[boxRefs.indexOf(ref)];
        }
        
      });
      return;
    }
    // Animate selected box up
    if (boxRefs[selected_box].current) {
      const targetz = originalZPositions[selected_box] - 0.3;
    
      boxRefs[selected_box].current.position.y =
        THREE.MathUtils.lerp(boxRefs[selected_box].current.position.y, 1, 0.1);
      boxRefs[selected_box].current.position.z = 
        THREE.MathUtils.lerp(boxRefs[selected_box].current.position.z, targetz, 0.1);
      boxRefs[selected_box].current.rotation.x =
        THREE.MathUtils.lerp(boxRefs[selected_box].current.rotation.x, 0, 0.1);
    }
    // Animate previous box down
    if (previous !== null && boxRefs[previous].current && previous !== selected_box) {
      const targetz = originalZPositions[previous];
      boxRefs[previous].current.position.y =
        THREE.MathUtils.lerp(boxRefs[previous].current.position.y, -0.3, 0.1);
      boxRefs[previous].current.position.z =
        THREE.MathUtils.lerp(boxRefs[previous].current.position.z, targetz, 0.1);
      boxRefs[previous].current.rotation.x =
        THREE.MathUtils.lerp(boxRefs[previous].current.rotation.x, -0.5, 0.1);
    }
    // Keep other boxes at default
    boxRefs.forEach((ref, idx) => {
      if (
        idx !== selected_box &&
        idx !== previous &&
        ref.current
      ) {
        ref.current.position.y = -0.3;
      }
    });
  });


  var a = 0
  var b = 0
  var c = 0


  useFrame((state) => {
        frameCount.current++;
        const delta = state.clock.getDelta();

    // Rotate the model slowly around the Y axis
    if (groupRef.current ) {
        const time = state.clock.elapsedTime;
        
        if(!isDropping && !pauseLocation) {
        groupRef.current.rotation.y +=  0.005; // Rotate at 0.2 radians per second
        groupRef.current.rotation.x = Math.sin(time / 4) / 2;
        groupRef.current.rotation.z = Math.cos(time / 4) / 2;
        groupRef.current.position.y = (-2 + Math.sin(time * 1)) / 20;
        }
        else {
          // During drop, lower the basket
           a = groupRef.current.rotation.x;
          b = groupRef.current.rotation.y;
          c = groupRef.current.rotation.z;


          groupRef.current.rotation.y = b;
          groupRef.current.rotation.x = a;
          groupRef.current.rotation.z = c;


        }
    }
  });





  // Most robust: render the full scene if present

    return (


    <>
    <group ref ={groupRef} rotation={[0.3, 0, 0]} name = "0">
    
    <primitive ref={mesh} object={gltf.scene} position={[0, -1, 0]} scale={1}  />
    
      
      {/* THIS IS THE ONE THAT WE WANT IM JUST COMMENTING IT BC I DONT HAVE THE OTHER VINYLS


<primitive ref={boxRefs[2]} object={gltf2.scene} position={[0, -0.3, -0.5]} rotation={[-0.5, Math.PI /2, Math.PI ]} scale={1}  />




*/}
    <mesh ref={boxRefs[0]} position={[0, -0.3, -1.1]} rotation={[-0.5, 0, 0]} name="0">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
         <MeshTransmissionMaterial 
                            thickness={0.8}
                            transmission={0.95}
                            roughness={0.2}
                            ior={1.5}
                            chromaticAberration={0.5}
                            distortion={0.15}
                            anisotropy={0.1}
                            reflectivity={0.3}
                            backside={true}
                            samples={6} // Reduced desktop samples from 4 to 2
                            resolution={500} // Reduced desktop resolution from 256 to 128
                            background={new THREE.Color("#4100f5")}
                        />
        
</mesh>



<mesh ref={boxRefs[1]} position={[0, -0.3, -0.8]} rotation={[-0.5, 0, 0]} name="1">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
         <meshBasicMaterial color={"#00e2a2"} transparent={true} />
</mesh>




<mesh ref={boxRefs[3]} position={[0, -0.3, -0.2]} rotation={[-0.5, 0, 0]} name="3">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
        <meshBasicMaterial color={"#f564cd"}  />
</mesh>


<mesh ref={boxRefs[2]} position={[0, -0.3, -0.5]} rotation={[-0.5, 0, 0 ]} name="2">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
        <meshBasicMaterial color={"#f5a641"}  />
</mesh>



<mesh ref={boxRefs[4]} position={[0, -0.3 , 0.1]} rotation={[-0.5, 0, 0]} name="4">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
        <meshBasicMaterial 
        
        
        color={"#b7ff00"}  />
</mesh>




</group>
        </>
);

 
  
}



