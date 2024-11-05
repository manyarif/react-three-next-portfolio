'use client'

import React, { Suspense } from 'react'
import FloatingBubble from '../effects/FloatingBubble'

export default function FloatingScene() {
    return (
        <Suspense fallback={null}>
            <FloatingBubble />
        </Suspense>
    )
}