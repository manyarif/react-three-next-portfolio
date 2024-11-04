'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState(null)

    return (
        <header className="fixed w-full top-0 z-50">
            {/* Left side - Logo */}
            <div className="fixed top-8 left-12">
                <Link href="/" className="block">
                    <div className="text-3xl font-bold">
                        FM
                    </div>
                </Link>
            </div>

            {/* Right side - Navigation */}
            <div className="fixed top-8 right-12 flex flex-col items-end space-y-6">
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
            <span className="block py-1 text-sm tracking-wide">
                {children}
                <span 
                    className={`
                        absolute bottom-[1px] left-0 w-full h-[0.5px] bg-black
                        transform transition-all duration-150 ease-out
                        ${active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                    `}
                />
            </span>
        </Link>
    )
}