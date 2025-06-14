'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'

// Economic Graph Wireframe
function EconomicGraph() {
  const meshRef = useRef<THREE.Group>(null!)
  
  // Generate supply and demand curve points
  const supplyPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 20; i++) {
      const x = i * 0.2 - 2
      const y = Math.pow(x + 2, 1.5) - 2
      const z = 0
      points.push(new THREE.Vector3(x, y, z))
    }
    return points
  }, [])
  
  const demandPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 20; i++) {
      const x = i * 0.2 - 2
      const y = -Math.pow(x + 2, 0.8) + 2
      const z = 0
      points.push(new THREE.Vector3(x, y, z))
    }
    return points
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })
  
  return (
    <group ref={meshRef} position={[-3, 0, 0]}>
      {/* Supply Curve */}
      <Line
        points={supplyPoints}
        color="#10b981"
        lineWidth={2}
        transparent
        opacity={0.8}
      />
      {/* Demand Curve */}
      <Line
        points={demandPoints}
        color="#06b6d4"
        lineWidth={2}
        transparent
        opacity={0.8}
      />
      {/* Grid lines */}
      {[-2, -1, 0, 1, 2].map((x) => (
        <Line
          key={`v-${x}`}
          points={[new THREE.Vector3(x, -2, 0), new THREE.Vector3(x, 2, 0)]}
          color="#333333"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
      {[-2, -1, 0, 1, 2].map((y) => (
        <Line
          key={`h-${y}`}
          points={[new THREE.Vector3(-2, y, 0), new THREE.Vector3(2, y, 0)]}
          color="#333333"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  )
}

// Neural Network Pattern
function NeuralNetwork() {
  const meshRef = useRef<THREE.Group>(null!)
  
  const nodes = useMemo(() => {
    const nodePositions = []
    // Input layer
    for (let i = 0; i < 4; i++) {
      nodePositions.push(new THREE.Vector3(-2, i * 0.8 - 1.2, 0))
    }
    // Hidden layer
    for (let i = 0; i < 6; i++) {
      nodePositions.push(new THREE.Vector3(0, i * 0.6 - 1.5, 0))
    }
    // Output layer
    for (let i = 0; i < 3; i++) {
      nodePositions.push(new THREE.Vector3(2, i * 0.8 - 0.8, 0))
    }
    return nodePositions
  }, [])
  
  const connections = useMemo(() => {
    const lines = []
    // Connect input to hidden
    for (let i = 0; i < 4; i++) {
      for (let j = 4; j < 10; j++) {
        lines.push([nodes[i], nodes[j]])
      }
    }
    // Connect hidden to output
    for (let i = 4; i < 10; i++) {
      for (let j = 10; j < 13; j++) {
        lines.push([nodes[i], nodes[j]])
      }
    }
    return lines
  }, [nodes])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })
  
  return (
    <group ref={meshRef} position={[3, 0, 0]}>
      {/* Connections */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection}
          color="#34d399"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
      {/* Nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
      ))}
    </group>
  )
}

// Floating Particles
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })
  
  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#067857"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function Hero3D() {
  const [webglSupported, setWebglSupported] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setWebglSupported(false)
      }
    } catch (e) {
      setWebglSupported(false)
    }
  }, [])

  const handleError = React.useCallback(() => {
    setHasError(true)
  }, [])

  if (!webglSupported || hasError) {
    // Fallback: CSS-only animated background
    return (
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-accent-cyan/10 to-primary-800/20 animate-pulse" />
        <div className="absolute inset-0">
          {/* CSS-only floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        onError={handleError}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'default'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <FloatingParticles />
        <EconomicGraph />
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}