import React, { useRef, useEffect, useState, use} from 'react';
import { Box, useGLTF, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import {useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Text } from '@react-three/drei';

useGLTF.preload('/Untitled.glb');
useGLTF.preload('/Vinyl.glb');
useGLTF.preload('/DoingDoneVinyl.glb');
useGLTF.preload('/CostaCrittersVinyl.glb');
useGLTF.preload('/MerchVinyl.glb');

export default function Header(props) {
     const groupRef = useRef();
        const [rotation, setRotation] = useState([0, 0, 0]);
        const [position, setPosition] = useState([0, -0.5, -3]);
        const radius = 2; // radius of the "globe"
        const texture = useTexture('/test.png');
        const boxRef = useRef();
        const frameCount = useRef(0);
        const gltf = useGLTF('/Untitled.glb');
        const vinylGltf = useGLTF('/Vinyl.glb');
        const doingDoneVinylGltf = useGLTF('/DoingDoneVinyl.glb');
        const costaCrittersVinylGltf = useGLTF('/CostaCrittersVinyl.glb');
        const merchVinylGltf = useGLTF('/MerchVinyl.glb');

        // Extract geometry from vinyl model
        const vinylGeometry = React.useMemo(() => {
            let geometry = null;
            vinylGltf.scene.traverse((child) => {
                if (child.isMesh && !geometry) {
                    geometry = child.geometry;
                }
            });
            return geometry;
        }, [vinylGltf]);
    
        // Clone vinyl scene for transmission material
        const clonedVinyl = React.useMemo(() => vinylGltf.scene.clone(), [vinylGltf]);

        // Apply MeshTransmissionMaterial to cloned vinyl
        useEffect(() => {
            if (clonedVinyl && props.istransparent) {
                clonedVinyl.traverse((child) => {
                    if (child.isMesh) {
                        // Store the original geometry
                        const geo = child.geometry;
                        // Create new material with transmission properties
                        child.material = new THREE.MeshPhysicalMaterial({
                            transmission: 0.95,
                            thickness: 0.8,
                            roughness: 0.2,
                            ior: 1.5,
                            reflectivity: 0.3,
                            transparent: true,
                        });
                    }
                });
            }
        }, [clonedVinyl, props.istransparent]);
    
        useEffect(() => {
            const handleMouseMove = (event) => {
                // Normalized mouse coordinates
                const x = (event.clientX / window.innerWidth) * 2 - 1; // -1 to 1
                const y = (event.clientY / window.innerHeight) * 2 - 1; // -1 to 1
    
                // Map to spherical coordinates
                const longitude = (x * Math.PI) / 10; // -π to π
                const latitude = (y * (Math.PI / 2)) / 10; // -π/2 to π/2
    
                // Calculate position on sphere
                const px = ((radius * Math.cos(latitude) * Math.sin(longitude)) / 5);
                const py = ((radius * Math.sin(latitude)) / 5) -0.5;
                const pz = ((radius * Math.cos(latitude) * Math.cos(longitude)) / 5)-3;
    
                setPosition([px, py, pz]);
                setRotation([latitude, longitude, 0]);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, []);

        useFrame((state) => {
                frameCount.current++;
                const delta = state.clock.getDelta();
        
            // Rotate the model slowly around the Y axis
            if (boxRef.current) {
                const time = state.clock.elapsedTime;
                boxRef.current.rotation.y =  (boxRef.current.rotation.y - 0.005); // Rotate at 0.2 radians per second
                boxRef.current.rotation.x = (Math.sin(time / 4) / 2) - Math.PI / 7 + (props.istransparent ? Math.PI / 3 : 0);
                boxRef.current.rotation.z = (Math.cos(time / 4) / 2) + Math.PI;
                boxRef.current.position.y = (-2 + Math.sin(time * 1)) / 20;
            }
          });

    return (
        <>
        <group ref={groupRef} position={position} rotation={rotation}>
            <Text
                position={[0, 0, 0]}
                fontSize={props.fontSizing}
                color={props.color}
                anchorX="center"
                anchorY="middle"
                font="/fonts/PixelScript.ttf"
                materialType="meshBasicMaterial"
                outlineWidth={0}
            >
                {props.text}
            </Text>
        </group>
     
        {props.istransparent ? (
            <mesh 
                ref={boxRef} 
                geometry={vinylGeometry}
                position={[0, 100, 4]} 
                rotation={[Math.PI / 2, Math.PI / 4, 0]}
                scale={1.3}
            >
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
                    samples={6}
                    resolution={500}
                    background={new THREE.Color("#4100f5")}
                />
            </mesh>
        ) : (
            <primitive 
                ref={boxRef} 
                object={props.text === "Doing Done" ? doingDoneVinylGltf.scene : props.text === "Costa Critters" ? costaCrittersVinylGltf.scene : props.text === "Merch Designs" ? merchVinylGltf.scene : vinylGltf.scene} 
                position={[0, 100, 4]} 
                rotation={[0, Math.PI / 2, 0]} 
                scale={1.3}
            />
        )}
        </>
    );
}