import React, { useRef, useState, useEffect } from 'react';
import { Text } from '@react-three/drei';

export default function MaiaMakes() {
    const groupRef = useRef();
    const [rotation, setRotation] = useState([0, 0, 0]);
    const [position, setPosition] = useState([0, 0, 0]);
    const radius = 2; // radius of the "globe"

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalized mouse coordinates
            const x = (event.clientX / window.innerWidth) * 2 - 1; // -1 to 1
            const y = (event.clientY / window.innerHeight) * 2 - 1; // -1 to 1

            // Map to spherical coordinates
            const longitude = (x * Math.PI) / 10; // -π to π
            const latitude = (y * (Math.PI / 2)) / 10; // -π/2 to π/2

            // Calculate position on sphere
            const px = (radius * Math.cos(latitude) * Math.sin(longitude)) / 5;
            const py = (radius * Math.sin(latitude)) / 5;
            const pz = (radius * Math.cos(latitude) * Math.cos(longitude)) / 5;

            setPosition([px, py, pz]);
            setRotation([latitude, longitude, 0]);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            <Text
                position={[-1.7, 0.6, 0]}
                fontSize={0.7}
                color="#b7ff00"
                anchorX="center"
                anchorY="middle"
                font="/fonts/PixelScript.ttf"
                materialType="meshBasicMaterial"
                outlineWidth={0}
            >
                Maia
            </Text>
            <Text
                position={[1.5, -1.5, 0]}
                fontSize={0.7}
                color="#b7ff00"
                anchorX="center"
                anchorY="middle"
                font="/fonts/PixelScript.ttf"
                materialType="meshBasicMaterial"
            >
                Makes
            </Text>
        </group>
    );
}