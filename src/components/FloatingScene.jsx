'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import GlassSphere from './GlassSphere'

function Loader() {
    return <div className="text-black">Loading...</div>
}

export default function FloatingScene() {
    return (
        <div className="w-full h-full bg-white">
            <Canvas>
                <Suspense fallback={<Loader />}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <GlassSphere />
                </Suspense>
            </Canvas>
        </div>
    )
}