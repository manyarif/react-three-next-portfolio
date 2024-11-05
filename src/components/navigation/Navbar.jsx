'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    weight: ['400']
})

export default function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null)

    return (
        <header className="fixed w-full top-0 z-40">
            {/* Left side - Logo */}
            <div className="fixed top-12 left-12">
                <Link href="/" className="block">
                    <div className={`
                        ${spaceGrotesk.className}
                        text-8xl
                        tracking-wider
                        font-light
                        hover:opacity-65
                        transition-opacity
                        duration-300
                        relative
                    `}>
                        FM
                    </div>
                </Link>
            </div>

            {/* Right side - Navigation */}
            <div className="fixed top-12 right-12 flex flex-col items-end space-y-6">
                <NavLink href="/works" active={hoveredLink === 'works'} onHover={() => setHoveredLink('works')}>Works</NavLink>
                <NavLink href="/about" active={hoveredLink === 'about'} onHover={() => setHoveredLink('about')}>About</NavLink>
                <NavLink href="/contact" active={hoveredLink === 'contact'} onHover={() => setHoveredLink('contact')}>Contact</NavLink>
                <NavLink href="/cv" active={hoveredLink === 'cv'} onHover={() => setHoveredLink('cv')}>CV</NavLink>
            </div>
        </header>
    )
}

const NavLink = ({ href, children, active, onHover }) => {
    return (
        <Link 
            href={href} 
            className="relative block group"
            onMouseEnter={onHover}
            onMouseLeave={() => onHover(null)}
        >
            <span className={`${spaceGrotesk.className} block py-1 text-sm tracking-wide`}>
                {children}
                <span 
                    className={`
                        absolute bottom-[5px] left-0 w-full h-[0.5px] bg-black
                        transform origin-left scale-x-0 transition-transform duration-300 ease-out
                        group-hover:scale-x-100
                    `}
                />
            </span>
        </Link>
    )
}