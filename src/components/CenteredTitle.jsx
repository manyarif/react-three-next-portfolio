'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CenteredTitle() {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg text-gray-500 tracking-wide -mb-20">
                        creative developer
                    </p>
                    <h1 className="text-[11vw] font-light tracking-tight">
                        Flavio Manyari
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}