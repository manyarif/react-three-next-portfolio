'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function GlassSphere() {
    const sphereRef = useRef()
    
    useFrame((state, delta) => {
        // Subtle organic movement
        sphereRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        sphereRef.current.rotation.y += delta * 0.05
    })

    return (
        <mesh ref={sphereRef} scale={[2, 2, 2]}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
                transparent
                opacity={0.4}
                roughness={0}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0}
                distort={0.4}
                speed={1.1}
                radius={0.7}
                ior={2}
            />
        </mesh>
    )
}