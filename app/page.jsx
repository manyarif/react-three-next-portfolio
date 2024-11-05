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

            <div className="fixed inset-0 pointer-events-none z-30">
                <div className="absolute top-8 left-8 right-8 bottom-24 border border-black/10 overflow-hidden">
                    <div className="absolute inset-0">
                        <Canvas 
                            className="absolute inset-0 z-20"
                            camera={{ position: [0, 0, 5], fov: 50 }}
                        >
                            <PerspectiveCamera 
                                makeDefault 
                                position={[0, 0, 5]}
                                fov={50}
                            />
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

                        <div className="relative z-20">
                            <HeroTitle />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                        opacity: 1,
                        y: [0, 8, 0],
                    }}
                    transition={{ 
                        opacity: { duration: 1, delay: 1 },
                        y: { 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        y: 0,
                        transition: { 
                            duration: 0.2,
                            ease: "easeOut"
                        }
                    }}
                    className="inline-block"
                >
                    <Link 
                        href="/"
                        className="
                            text-gray-600 
                            transition-colors 
                            duration-300
                            tracking-[0.05em]
                            text-xs
                            hover:text-gray-900
                        "
                    >
                        ↓ Explore my work ↓
                    </Link>
                </motion.div>
            </div>
        </main>
    )
}