'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Particle {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
  targetPosition?: THREE.Vector3;
  isMoving: boolean;
}

function ParticleSystem() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { camera, gl } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const particleIdCounter = useRef(0);

  // Convert screen coordinates to world coordinates
  const getWorldPosition = useCallback((clientX: number, clientY: number) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.current.setFromCamera(mouse.current, camera);
    const distance = 10; // Distance from camera
    const worldPosition = new THREE.Vector3();
    raycaster.current.ray.at(distance, worldPosition);
    return worldPosition;
  }, [camera, gl]);

  // Find nearest particles for connection
  const findNearestParticles = useCallback((newParticle: Particle, existingParticles: Particle[]) => {
    const maxConnections = 3;
    const maxDistance = 8;
    
    const distances = existingParticles
      .map((particle, index) => ({
        index: particle.id,
        distance: newParticle.position.distanceTo(particle.position)
      }))
      .filter(item => item.distance <= maxDistance)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, maxConnections);
    
    return distances.map(item => item.index);
  }, []);

  // Create new particle on click
  const handleClick = useCallback((event: MouseEvent) => {
    const worldPos = getWorldPosition(event.clientX, event.clientY);
    
    setParticles(prevParticles => {
      const newParticle: Particle = {
        id: particleIdCounter.current++,
        position: worldPos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        connections: [],
        isMoving: true
      };

      // Find connections to existing particles
      const nearestConnections = findNearestParticles(newParticle, prevParticles);
      newParticle.connections = nearestConnections;

      // Add this particle to the connections of nearby particles
      const updatedParticles = prevParticles.map(particle => {
        if (nearestConnections.includes(particle.id)) {
          return {
            ...particle,
            connections: [...particle.connections, newParticle.id].slice(0, 4) // Max 4 connections per particle
          };
        }
        return particle;
      });

      return [...updatedParticles, newParticle];
    });
  }, [getWorldPosition, findNearestParticles]);

  // Set up click listener
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('click', handleClick);
    return () => canvas.removeEventListener('click', handleClick);
  }, [gl, handleClick]);

  // Animation loop
  useFrame(() => {
    if (!meshRef.current || !lineRef.current) return;

    // Update particle positions and create attraction forces
    setParticles(prevParticles => {
      return prevParticles.map(particle => {
        if (!particle.isMoving) return particle;

        let force = new THREE.Vector3();
        
        // Apply attraction to connected particles
        particle.connections.forEach(connectedId => {
          const connectedParticle = prevParticles.find(p => p.id === connectedId);
          if (connectedParticle) {
            const direction = connectedParticle.position.clone().sub(particle.position);
            const distance = direction.length();
            if (distance > 0.1) {
              direction.normalize();
              force.add(direction.multiplyScalar(0.001 * distance));
            }
          }
        });

        // Apply damping
        particle.velocity.multiplyScalar(0.98);
        particle.velocity.add(force);
        
        // Update position
        const newPosition = particle.position.clone().add(particle.velocity);
        
        // Stop moving if velocity is very small
        const isStillMoving = particle.velocity.length() > 0.001;
        
        return {
          ...particle,
          position: newPosition,
          isMoving: isStillMoving
        };
      });
    });

    // Update instance positions
    const matrix = new THREE.Matrix4();
    particles.forEach((particle, i) => {
      matrix.setPosition(particle.position);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update connections (lines)
    const positions: number[] = [];
    particles.forEach(particle => {
      particle.connections.forEach(connectedId => {
        const connectedParticle = particles.find(p => p.id === connectedId);
        if (connectedParticle && connectedId > particle.id) { // Avoid duplicate lines
          positions.push(
            particle.position.x, particle.position.y, particle.position.z,
            connectedParticle.position.x, connectedParticle.position.y, connectedParticle.position.z
          );
        }
      });
    });

    if (lineRef.current.geometry) {
      lineRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
    }
  });

  return (
    <>
      {/* Particle instances */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, 1000]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#10b981" />
      </instancedMesh>
      
      {/* Connection lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#10b981" opacity={0.6} transparent />
      </lineSegments>
    </>
  );
}

export default function InteractiveParticles() {
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
    // Fallback: Simple CSS animation
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-900/5 to-transparent animate-pulse" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
        onError={handleError}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'default'
        }}
        className="pointer-events-auto"
      >
        <ParticleSystem />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-sm text-gray-400 pointer-events-none">
        Click anywhere to create connected particles
      </div>
    </div>
  );
}