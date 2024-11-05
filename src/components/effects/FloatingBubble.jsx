'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'

export default function FloatingBubble() {

    const bubbleRef = useRef()

    useFrame((state, delta) => {
        // Subtle organic movement
        bubbleRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        bubbleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        bubbleRef.current.rotation.y += delta * 0.05
    })

    return (
        <mesh ref={bubbleRef}
            scale={[2, 2, 2]}
            position={[0, 0, 0]}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
                color="#ffffff"
                transparent
                opacity={0.1}
                roughness={0}
                metalness={0.9}
                clearcoat={1}
                clearcoatRoughness={0.1}
                distort={0.6}
                speed={2}
                radius={0.7}
                ior={1}
                transmission={1}
                thickness={1}
            />
        </mesh>
    )
}   