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
                className="text-center relative"
            >
                <p className={`
                    ${spaceGrotesk.className}
                    text-sm    // Default size for mobile
                    sm:text-sm     // Slightly larger for small screens
                    md:text-lg     // Original size for medium screens and up
                    text-gray-400 
                    tracking-widest 
                    absolute
                    w-full
                    -top-4
                `}>
                    creative developer
                </p>
                <h1 className={`
                    ${spaceGrotesk.className}
                    text-[9vw]
                    font-regular
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