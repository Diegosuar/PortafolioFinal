import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function DataNode({ position, size = 0.08, color = '#42a5f5' }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.material.emissiveIntensity =
                0.5 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3
        }
    })
    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.9}
            />
        </mesh>
    )
}

function ConnectionLine({ start, end, color = '#42a5f5' }) {
    const geometry = useMemo(() => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
        return new THREE.BufferGeometry().setFromPoints(points)
    }, [start, end])

    return (
        <line geometry={geometry}>
            <lineBasicMaterial color={color} transparent opacity={0.2} />
        </line>
    )
}

function NetworkGraph() {
    const groupRef = useRef()

    const nodes = useMemo(() => [
        { pos: [0, 0, 0], size: 0.15, color: '#42a5f5' },
        { pos: [1.2, 0.8, -0.5], size: 0.1, color: '#5c6bc0' },
        { pos: [-1, 1, 0.3], size: 0.1, color: '#42a5f5' },
        { pos: [0.8, -0.9, 0.4], size: 0.08, color: '#7986cb' },
        { pos: [-1.3, -0.5, -0.3], size: 0.09, color: '#42a5f5' },
        { pos: [1.5, -0.2, -0.8], size: 0.07, color: '#5c6bc0' },
        { pos: [-0.5, 1.5, -0.4], size: 0.08, color: '#7986cb' },
        { pos: [0.3, -1.4, -0.6], size: 0.06, color: '#42a5f5' },
        { pos: [-1.5, 0.3, 0.6], size: 0.07, color: '#5c6bc0' },
        { pos: [0.6, 0.5, 1], size: 0.09, color: '#42a5f5' },
        { pos: [-0.8, -1.2, 0.5], size: 0.06, color: '#7986cb' },
        { pos: [1, 1.3, 0.3], size: 0.07, color: '#42a5f5' },
    ], [])

    const connections = useMemo(() => [
        [0, 1], [0, 2], [0, 3], [0, 4], [0, 9],
        [1, 5], [1, 11], [2, 6], [3, 7], [3, 10],
        [4, 8], [4, 10], [5, 11], [6, 2], [7, 10],
        [8, 4], [9, 1], [9, 3],
    ], [])

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
            // Mouse interaction
            const { x, y } = state.mouse
            groupRef.current.rotation.y += x * 0.1
            groupRef.current.rotation.x += y * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <DataNode key={i} position={node.pos} size={node.size} color={node.color} />
            ))}
            {connections.map(([a, b], i) => (
                <ConnectionLine key={i} start={nodes[a].pos} end={nodes[b].pos} />
            ))}
            {/* Central glowing sphere */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[0, 0, 0]}>
                    <icosahedronGeometry args={[0.35, 1]} />
                    <MeshDistortMaterial
                        color="#1a237e"
                        emissive="#42a5f5"
                        emissiveIntensity={0.3}
                        distort={0.3}
                        speed={2}
                        transparent
                        opacity={0.4}
                        wireframe
                    />
                </mesh>
            </Float>
        </group>
    )
}

export default function DataNetwork() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
            dpr={[1, 1.5]}
        >
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.8} color="#42a5f5" />
            <pointLight position={[-5, -5, -3]} intensity={0.4} color="#1a237e" />
            <NetworkGraph />
        </Canvas>
    )
}
