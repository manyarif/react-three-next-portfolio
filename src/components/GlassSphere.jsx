'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function GlassSphere() {
    const sphereRef = useRef()
    
    useFrame((state, delta) => {
        // Subtle organic movement
        sphereRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
        sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
        sphereRef.current.rotation.y += delta * 0.05
    })

    return (
        <mesh ref={sphereRef} scale={[2.5, 2.5, 2.5]}>
            <sphereGeometry args={[1, 96, 96]} />
            <MeshDistortMaterial
                transparent
                opacity={0.9}
                roughness={0}
                metalness={0.2}
                clearcoat={1}
                clearcoatRoughness={0.2}
                distort={0.4}
                speed={0.8}
                radius={0.5}
                ior={4}
            />
        </mesh>
    )
}