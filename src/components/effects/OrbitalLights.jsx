import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function MovingLights() {
    const light1 = useRef()
    const light2 = useRef()
    const light3 = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        
        // Slower, wider circular motion
        light1.current.position.x = Math.sin(time * 0.3) * 4
        light1.current.position.z = Math.cos(time * 0.3) * 4
        
        // Gentler figure-8 motion
        light2.current.position.x = Math.sin(time * 0.4) * 3
        light2.current.position.z = Math.sin(time * 0.4) * Math.cos(time * 0.4) * 3
        
        // Slower spiral motion
        light3.current.position.x = Math.sin(time * 0.2) * 5
        light3.current.position.y = Math.cos(time * 0.15) * 3
        light3.current.position.z = Math.sin(time * 0.25) * 4
    })

    return (
        <>
            <pointLight ref={light1} intensity={0.8} color="#ff7f00" distance={15} />
            <pointLight ref={light2} intensity={0.8} color="#00ff7f" distance={15} />
            <pointLight ref={light3} intensity={0.8} color="#7f00ff" distance={15} />
            
            {/* Subtle ambient light */}
            <ambientLight intensity={0.1} />
            
            {/* Stronger directional light for better highlights */}
            <directionalLight 
                position={[5, 5, 5]} 
                intensity={0.8} 
                color="#ffffff" 
            />
        </>
    )
} 