import React, { useRef, useEffect, useState} from 'react';
import { Box, useGLTF, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import {useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Text } from '@react-three/drei';



export default function Header(props) {
     const groupRef = useRef();
        const [rotation, setRotation] = useState([0, 0, 0]);
        const [position, setPosition] = useState([0, -0.5, -3]);
        const radius = 2; // radius of the "globe"
        const texture = useTexture('/test.png');
        const boxRef = useRef();
        const frameCount = useRef(0);
    
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
                boxRef.current.rotation.y +=  -0.005; // Rotate at 0.2 radians per second
                boxRef.current.rotation.x = Math.sin(time / 4) / 2;
                boxRef.current.rotation.z = Math.cos(time / 4) / 2;
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
     

        <mesh ref={boxRef} position={[0, 100, 4]} rotation={[0, 0, Math.PI / 4]} name="1">
        <boxGeometry args={[1.4, 1.4, 0.1]} />
        {props.istransparent ?
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
            :
        <meshBasicMaterial  color={props.color} />
        }
            </mesh>
            </>
    );
}