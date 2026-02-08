import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Neuron {
  id: number;
  position: THREE.Vector3;
  connections: Connection[];
  activationLevel: number;
  lastActivation: number;
  layer: number;
}

interface Connection {
  targetId: number;
  weight: number;
  signal: number;
  signalPosition: number;
  isActive: boolean;
}

interface Signal {
  id: number;
  fromNeuron: number;
  toNeuron: number;
  progress: number;
  strength: number;
}

function NeuralNetwork() {
  const neuronMeshRef = useRef<THREE.InstancedMesh>(null);
  const connectionLineRef = useRef<THREE.LineSegments>(null);
  const signalMeshRef = useRef<THREE.InstancedMesh>(null);
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);
  const { camera, gl, size } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const time = useRef(0);
  const signalIdCounter = useRef(0);

  // Initialize neural network structure
  useEffect(() => {
    const networkNeurons: Neuron[] = [];
    const layers = 5;
    const neuronsPerLayer = [8, 12, 16, 12, 8];
    let neuronId = 0;

    // Create neurons in layers
    for (let layer = 0; layer < layers; layer++) {
      const neuronCount = neuronsPerLayer[layer];
      const layerX = (layer - layers / 2) * 6;
      
      for (let i = 0; i < neuronCount; i++) {
        const angle = (i / neuronCount) * Math.PI * 2;
        const radius = 3 + Math.sin(layer * 0.5) * 1.5;
        const y = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        const neuron: Neuron = {
          id: neuronId++,
          position: new THREE.Vector3(layerX, y, z),
          connections: [],
          activationLevel: Math.random() * 0.3,
          lastActivation: 0,
          layer
        };
        
        networkNeurons.push(neuron);
      }
    }

    // Create connections between layers
    networkNeurons.forEach(neuron => {
      if (neuron.layer < layers - 1) {
        const nextLayerNeurons = networkNeurons.filter(n => n.layer === neuron.layer + 1);
        
        // Connect to 2-4 neurons in the next layer
        const connectionCount = Math.floor(Math.random() * 3) + 2;
        const shuffled = [...nextLayerNeurons].sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < Math.min(connectionCount, shuffled.length); i++) {
          const connection: Connection = {
            targetId: shuffled[i].id,
            weight: Math.random() * 0.8 + 0.2,
            signal: 0,
            signalPosition: 0,
            isActive: false
          };
          neuron.connections.push(connection);
        }
      }
    });

    setNeurons(networkNeurons);
  }, []);

  // Handle mouse interaction
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.current.setFromCamera(mouse.current, camera);
    
    // Find nearest neuron to mouse and activate it
    setNeurons(prevNeurons => {
      return prevNeurons.map(neuron => {
        const screenPos = neuron.position.clone().project(camera);
        const distance = Math.sqrt(
          Math.pow(screenPos.x - mouse.current.x, 2) + 
          Math.pow(screenPos.y - mouse.current.y, 2)
        );
        
        if (distance < 0.3) {
          return {
            ...neuron,
            activationLevel: Math.min(1, neuron.activationLevel + 0.1),
            lastActivation: time.current
          };
        }
        return neuron;
      });
    });
  }, [camera, gl]);

  // Handle click to create signal burst
  const handleClick = useCallback((event: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Find nearest neuron and trigger activation cascade
    let nearestNeuron: Neuron | null = null;
    let minDistance = Infinity;
    
    neurons.forEach(neuron => {
      const screenPos = neuron.position.clone().project(camera);
      const distance = Math.sqrt(
        Math.pow(screenPos.x - mouse.current.x, 2) + 
        Math.pow(screenPos.y - mouse.current.y, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        nearestNeuron = neuron;
      }
    });
    
    if (nearestNeuron && minDistance < 0.5) {
      // Trigger activation
      setNeurons(prevNeurons => {
        return prevNeurons.map(neuron => {
          if (neuron.id === nearestNeuron!.id) {
            return {
              ...neuron,
              activationLevel: 1,
              lastActivation: time.current
            };
          }
          return neuron;
        });
      });
      
      // Create signals from this neuron
      const newSignals: Signal[] = (nearestNeuron as Neuron).connections.map(connection => ({
        id: signalIdCounter.current++,
        fromNeuron: nearestNeuron!.id,
        toNeuron: connection.targetId,
        progress: 0,
        strength: connection.weight
      }));
      
      setSignals(prevSignals => [...prevSignals, ...newSignals]);
    }
  }, [neurons, camera]);

  // Set up event listeners
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [gl, handleMouseMove, handleClick]);

  // Animation loop
  useFrame((state, delta) => {
    time.current += delta;
    
    if (!neuronMeshRef.current || !connectionLineRef.current || !signalMeshRef.current) return;

    // Update neurons
    setNeurons(prevNeurons => {
      return prevNeurons.map(neuron => {
        // Natural decay of activation
        const timeSinceActivation = time.current - neuron.lastActivation;
        let newActivationLevel = neuron.activationLevel;
        
        if (timeSinceActivation > 0.1) {
          newActivationLevel = Math.max(0, neuron.activationLevel - delta * 0.5);
        }
        
        // Random background activity
        if (Math.random() < 0.001) {
          newActivationLevel = Math.min(1, newActivationLevel + 0.2);
        }
        
        return {
          ...neuron,
          activationLevel: newActivationLevel
        };
      });
    });

    // Update signals
    setSignals(prevSignals => {
      const updatedSignals = prevSignals
        .map(signal => ({
          ...signal,
          progress: signal.progress + delta * 2
        }))
        .filter(signal => signal.progress < 1);
      
      // Activate target neurons when signals arrive
      prevSignals.forEach(signal => {
        if (signal.progress >= 1) {
          setNeurons(prevNeurons => {
            return prevNeurons.map(neuron => {
              if (neuron.id === signal.toNeuron) {
                const newActivation = Math.min(1, neuron.activationLevel + signal.strength * 0.5);
                
                // Propagate signal if activation is high enough
                if (newActivation > 0.7 && Math.random() < 0.3) {
                  const newSignals: Signal[] = neuron.connections.map(connection => ({
                    id: signalIdCounter.current++,
                    fromNeuron: neuron.id,
                    toNeuron: connection.targetId,
                    progress: 0,
                    strength: connection.weight * 0.8
                  }));
                  
                  setSignals(currentSignals => [...currentSignals, ...newSignals]);
                }
                
                return {
                  ...neuron,
                  activationLevel: newActivation,
                  lastActivation: time.current
                };
              }
              return neuron;
            });
          });
        }
      });
      
      return updatedSignals;
    });

    // Update neuron visual instances
    const neuronMatrix = new THREE.Matrix4();
    const neuronColor = new THREE.Color();
    
    neurons.forEach((neuron, i) => {
      // Position
      neuronMatrix.setPosition(neuron.position);
      
      // Scale based on activation
      const scale = 0.8 + neuron.activationLevel * 0.4;
      neuronMatrix.scale(new THREE.Vector3(scale, scale, scale));
      
      neuronMeshRef.current!.setMatrixAt(i, neuronMatrix);
      
      // Color based on activation
      const hue = 0.6 - neuron.activationLevel * 0.2; // Blue to cyan
      const saturation = 0.8;
      const lightness = 0.3 + neuron.activationLevel * 0.7;
      neuronColor.setHSL(hue, saturation, lightness);
      neuronMeshRef.current!.setColorAt(i, neuronColor);
    });
    
    neuronMeshRef.current.instanceMatrix.needsUpdate = true;
    if (neuronMeshRef.current.instanceColor) {
      neuronMeshRef.current.instanceColor.needsUpdate = true;
    }

    // Update connection lines
    const positions: number[] = [];
    const colors: number[] = [];
    
    neurons.forEach(neuron => {
      neuron.connections.forEach(connection => {
        const targetNeuron = neurons.find(n => n.id === connection.targetId);
        if (targetNeuron) {
          positions.push(
            neuron.position.x, neuron.position.y, neuron.position.z,
            targetNeuron.position.x, targetNeuron.position.y, targetNeuron.position.z
          );
          
          // Color based on connection weight and neuron activation
          const intensity = connection.weight * (neuron.activationLevel + targetNeuron.activationLevel) * 0.5;
          const color = new THREE.Color().setHSL(0.6, 0.8, 0.2 + intensity * 0.6);
          
          colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
        }
      });
    });

    if (connectionLineRef.current.geometry) {
      connectionLineRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      connectionLineRef.current.geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      );
    }

    // Update signal instances
    const signalMatrix = new THREE.Matrix4();
    const signalColor = new THREE.Color();
    
    signals.forEach((signal, i) => {
      const fromNeuron = neurons.find(n => n.id === signal.fromNeuron);
      const toNeuron = neurons.find(n => n.id === signal.toNeuron);
      
      if (fromNeuron && toNeuron) {
        const position = fromNeuron.position.clone().lerp(toNeuron.position, signal.progress);
        signalMatrix.setPosition(position);
        
        const scale = 0.3 + signal.strength * 0.2;
        signalMatrix.scale(new THREE.Vector3(scale, scale, scale));
        
        signalMeshRef.current!.setMatrixAt(i, signalMatrix);
        
        // Bright color for signals
        signalColor.setHSL(0.15, 1, 0.8); // Bright yellow-orange
        signalMeshRef.current!.setColorAt(i, signalColor);
      }
    });
    
    signalMeshRef.current.instanceMatrix.needsUpdate = true;
    if (signalMeshRef.current.instanceColor) {
      signalMeshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Neurons */}
      <instancedMesh ref={neuronMeshRef} args={[undefined, undefined, 100]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshBasicMaterial vertexColors />
      </instancedMesh>
      
      {/* Connections */}
      <lineSegments ref={connectionLineRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors opacity={0.4} transparent />
      </lineSegments>
      
      {/* Signals */}
      <instancedMesh ref={signalMeshRef} args={[undefined, undefined, 200]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial vertexColors />
      </instancedMesh>
    </>
  );
}

export default function NeuralNetworkBackground() {
  const [webglSupported, setWebglSupported] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  const handleError = React.useCallback(() => {
    setHasError(true);
  }, []);

  if (!webglSupported || hasError) {
    // Fallback: Animated CSS neural network pattern
    return (
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
        <div className="absolute inset-0 opacity-20">
          <div className="neural-network-fallback">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="neural-node"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .neural-network-fallback {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .neural-node {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #10b981;
            border-radius: 50%;
            animation: pulse 3s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
        onError={handleError}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'default'
        }}
        className="pointer-events-auto"
      >
        <NeuralNetwork />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-sm text-gray-400 pointer-events-none">
        Interactive Neural Network - Click neurons to activate signals
      </div>
    </div>
  );
}