'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavLink = ({ href, children }) => {
    return (
        <Link href={href} className="relative group">
            <span className="block py-2 px-4">
                {children}
                <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </span>
        </Link>
    )
}

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 px-12 py-8">
            <nav className="max-w-[1400px] mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Logo
                        </motion.div>
                    </Link>
                    
                    <div className="space-x-12 text-sm tracking-wide">
                        <NavLink href="/">Craft</NavLink>
                        <NavLink href="/">Lab</NavLink>
                        <NavLink href="/">About</NavLink>
                        <NavLink href="/">CV</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}