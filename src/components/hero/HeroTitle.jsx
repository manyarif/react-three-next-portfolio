'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Space_Grotesk } from 'next/font/google'


const spaceGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500'] // Light, Regular, Medium
})

export default function HeroTitle() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <p className={`
                    ${spaceGrotesk.className}
                    text-lg 
                    text-gray-400 
                    tracking-widest 
                    mb-4
                `}>
                    creative developer
                </p>
                <h1 className={`
                    ${spaceGrotesk.className}
                    text-[9vw]
                    font-light
                    tracking-normal
                    text-black
                    leading-none
                `}>
                    Flavio Manyari
                </h1>
            </motion.div>
        </div>
    )
}