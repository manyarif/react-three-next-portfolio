'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion' // Make sure this import is at the top
import Link from 'next/link'
import GlassSphere from '@/components/GlassSphere'
import Header from '@/components/Header'
import CenteredTitle from '@/components/CenteredTitle'

export default function Home() {
    return (
        <main className="h-screen bg-white text-black overflow-hidden">
            <Header />
            
            <div className="relative h-screen">
                <Canvas className="absolute inset-0">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <Environment preset="studio" />
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <GlassSphere />
                </Canvas>
                
                <CenteredTitle />
                
                <div className="absolute bottom-12 right-12 text-sm text-gray-500">
                    I simplify, I humanize.
                    <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link 
                            href="/about"
                            className="ml-2 inline-block border-b border-gray-300 hover:border-black transition-colors"
                        >
                            More about me →
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}