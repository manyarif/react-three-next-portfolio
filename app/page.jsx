'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import Link from 'next/link'

import Navbar from '@/components/navigation/Navbar'
import FloatingScene from '@/components/scenes/FloatingScene'
import HeroTitle from '@/components/hero/HeroTitle'
import OrbitalLights from '@/components/effects/OrbitalLights'
import PostProcessing from '@/components/effects/PostProcessing'

export default function Home() {
    return (
        <main className="h-screen bg-white text-black overflow-hidden relative">
            <Navbar />

            <div className="absolute inset-0">
                <div className="relative h-screen">
                    <Canvas className="absolute inset-0 z-20">
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                            <Environment 
                                preset="studio"
                                background={false}
                                intensity={2}
                            />
                            <spotLight 
                                position={[10, 10, 10]} 
                                angle={0.15} 
                                penumbra={1} 
                                intensity={1} 
                            />
                            <spotLight 
                                position={[-10, -10, -10]} 
                                angle={0.15} 
                                penumbra={1} 
                                intensity={0.5} 
                            />
                            <FloatingScene />
                            <OrbitalLights />
                            <PostProcessing />
                    </Canvas>
                    

                    <div className="relative z-30">
                        <HeroTitle />
                    </div>
                    
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-full text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                y: [0, 5, 0],
                            }}
                            transition={{ 
                                opacity: { duration: 0.8, delay: 1 },
                                y: { 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2, // Wait 2 seconds before repeating
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{ 
                                y: 0, // Stop at neutral position when hovered
                                transition: { duration: 0.2 } // Quick transition to stopped state
                            }}
                            className="inline-block"
                        >
                            <Link 
                                href="/works"
                                className="
                                    text-gray-400 
                                    transition-colors 
                                    duration-300
                                    tracking-[0.1em]
                                    text-xs
                                "
                            >
                                ↓ Explore more... ↓
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}