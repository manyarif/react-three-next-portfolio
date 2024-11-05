'use client'

import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function PostProcessing() {
    return (
        <EffectComposer>
            <Bloom 
                intensity={1.5}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                blendFunction={BlendFunction.ADD}
            />
            <ChromaticAberration 
                offset={[0.002, 0.002]} 
                radialModulation={false}
                modulationOffset={0.5}
            />
        </EffectComposer>
    )
} 