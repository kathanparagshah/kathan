'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { Calculator, BarChart3, TrendingUp, Grid3X3 } from 'lucide-react'

// Statistical Calculator Component
const StatisticalCalculator = () => {
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
  const [results, setResults] = useState<any>(null)

  // Calculate statistics
  const calculateStatistics = useCallback(() => {
    const flatMatrix = matrix.flat()
    const rows = matrix.length
    const cols = matrix[0].length
    
    // Mean calculations
    const mean = flatMatrix.reduce((sum, val) => sum + val, 0) / flatMatrix.length
    const rowMeans = matrix.map(row => row.reduce((sum, val) => sum + val, 0) / row.length)
    const colMeans = Array.from({ length: cols }, (_, i) => 
      matrix.reduce((sum, row) => sum + row[i], 0) / rows
    )
    
    // Variance calculations
    const variance = flatMatrix.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / flatMatrix.length
    const rowVariances = matrix.map((row, i) => 
      row.reduce((sum, val) => sum + Math.pow(val - rowMeans[i], 2), 0) / row.length
    )
    const colVariances = Array.from({ length: cols }, (_, i) => {
      const colMean = colMeans[i]
      return matrix.reduce((sum, row) => sum + Math.pow(row[i] - colMean, 2), 0) / rows
    })
    
    // Standard deviation calculations
    const std = Math.sqrt(variance)
    const rowStds = rowVariances.map(v => Math.sqrt(v))
    const colStds = colVariances.map(v => Math.sqrt(v))
    
    return {
      mean: mean.toFixed(2),
      variance: variance.toFixed(2),
      std: std.toFixed(2),
      rowMeans: rowMeans.map(m => m.toFixed(2)),
      colMeans: colMeans.map(m => m.toFixed(2)),
      rowVariances: rowVariances.map(v => v.toFixed(2)),
      colVariances: colVariances.map(v => v.toFixed(2)),
      rowStds: rowStds.map(s => s.toFixed(2)),
      colStds: colStds.map(s => s.toFixed(2))
    }
  }, [matrix])

  useEffect(() => {
    setResults(calculateStatistics())
  }, [calculateStatistics])

  const handleMatrixChange = (row: number, col: number, value: string) => {
    const numValue = parseFloat(value) || 0
    const newMatrix = matrix.map((r, i) => 
      r.map((c, j) => (i === row && j === col) ? numValue : c)
    )
    setMatrix(newMatrix)
  }

  const generateRandomMatrix = () => {
    const newMatrix = Array.from({ length: 3 }, () => 
      Array.from({ length: 3 }, () => Math.floor(Math.random() * 20) + 1)
    )
    setMatrix(newMatrix)
  }

  // 3D Visualization Component
  const StatVisualization = () => {
    const meshRefs = useRef<THREE.Mesh[]>([])
    
    useFrame((state) => {
      meshRefs.current.forEach((mesh, index) => {
        if (mesh) {
          mesh.rotation.y = state.clock.elapsedTime * 0.5 + index * 0.2
          mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2
        }
      })
    })

    return (
      <>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4f46e5" />
        
        {/* Matrix visualization as 3D cubes */}
        {matrix.map((row, i) => 
          row.map((value, j) => {
            const height = Math.abs(value) * 0.2 + 0.1
            const color = value > results?.mean ? '#10b981' : '#ef4444'
            
            return (
              <mesh
                key={`${i}-${j}`}
                ref={(el) => {
                  if (el) meshRefs.current[i * 3 + j] = el
                }}
                position={[(j - 1) * 2, height / 2, (i - 1) * 2]}
              >
                <boxGeometry args={[0.8, height, 0.8]} />
                <meshStandardMaterial 
                  color={color} 
                  transparent 
                  opacity={0.8}
                  emissive={color}
                  emissiveIntensity={0.1}
                />
              </mesh>
            )
          })
        )}
        
        {/* Statistical indicators */}
        <Text
          position={[0, 3, 0]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Mean: {results?.mean}
        </Text>
        
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.3}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          Std Dev: {results?.std}
        </Text>
        
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </>
    )
  }

  const [webglSupported, setWebglSupported] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
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

  return (
    <div className="space-y-6">
      {/* Two-column layout for matrix input and 3D visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column: Matrix Input */}
        <div className="rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-100">3x3 Matrix Input</h4>
            <button
              onClick={generateRandomMatrix}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Random Matrix
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            {matrix.map((row, i) => 
              row.map((value, j) => (
                <input
                  key={`${i}-${j}`}
                  type="text"
                  value={value}
                  onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                  className="w-16 h-16 text-center bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              ))
            )}
          </div>
        </div>

        {/* Right column: 3D Visualization */}
        <div className="h-96 rounded-lg overflow-hidden">
          {!webglSupported || hasError ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-gray-400 mb-4">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p>3D visualization unavailable</p>
                  <p className="text-sm mt-2">WebGL not supported in this environment</p>
                </div>
              </div>
            </div>
          ) : (
            <Canvas 
              camera={{ position: [5, 5, 5], fov: 50 }}
              onError={handleError}
              gl={{ 
                antialias: true,
                alpha: true,
                powerPreference: 'default'
              }}
            >
              <StatVisualization />
            </Canvas>
          )}
        </div>
      </div>

      {/* Results Display */}
      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-400 mb-2">Overall Statistics</h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Mean:</span>
                <span className="text-white font-mono">{results.mean}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Variance:</span>
                <span className="text-white font-mono">{results.variance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Std Dev:</span>
                <span className="text-white font-mono">{results.std}</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-400 mb-2">Row Statistics</h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Means:</span>
                <span className="text-white font-mono">[{results.rowMeans.join(', ')}]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Variances:</span>
                <span className="text-white font-mono">[{results.rowVariances.join(', ')}]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Std Devs:</span>
                <span className="text-white font-mono">[{results.rowStds.join(', ')}]</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-400 mb-2">Column Statistics</h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Means:</span>
                <span className="text-white font-mono">[{results.colMeans.join(', ')}]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Variances:</span>
                <span className="text-white font-mono">[{results.colVariances.join(', ')}]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Std Devs:</span>
                <span className="text-white font-mono">[{results.colStds.join(', ')}]</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Wheel Strategy Options Trading Demo
const WheelStrategyDemo = () => {
  const [stockPrice, setStockPrice] = useState(100)
  const [strikePrice, setStrikePrice] = useState(95)
  const [premium, setPremium] = useState(2.5)
  const [daysToExpiration, setDaysToExpiration] = useState(30)
  
  const calculateProfitLoss = useCallback(() => {
    const scenarios = []
    for (let price = stockPrice * 0.8; price <= stockPrice * 1.2; price += stockPrice * 0.05) {
      let profitLoss = premium // Start with premium collected
      
      if (price < strikePrice) {
        // Put assigned - we buy stock at strike price
        profitLoss += (price - strikePrice) // Loss from buying above market
      }
      
      scenarios.push({
        stockPrice: price,
        profitLoss: profitLoss,
        breakeven: strikePrice - premium
      })
    }
    return scenarios
  }, [stockPrice, strikePrice, premium])

  const scenarios = calculateProfitLoss()
  const maxProfit = premium
  const breakeven = strikePrice - premium
  const annualizedReturn = ((premium / strikePrice) * (365 / daysToExpiration) * 100).toFixed(2)

  return (
    <div className="space-y-6">
      {/* Two-column layout for parameters/metrics and chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column: Strategy Parameters and Metrics */}
        <div className="space-y-6">
          <div className="rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Strategy Parameters</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Current Stock Price</label>
                <input
                  type="text"
                  value={stockPrice}
                  onChange={(e) => setStockPrice(parseFloat(e.target.value) || 100)}
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Put Strike Price</label>
                <input
                  type="text"
                  value={strikePrice}
                  onChange={(e) => setStrikePrice(parseFloat(e.target.value) || 95)}
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Premium Received</label>
                <input
                  type="text"
                  step="0.1"
                  value={premium}
                  onChange={(e) => setPremium(parseFloat(e.target.value) || 2.5)}
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Days to Expiration</label>
                <input
                  type="text"
                  value={daysToExpiration}
                  onChange={(e) => setDaysToExpiration(parseInt(e.target.value) || 30)}
                  className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Strategy Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Max Profit:</span>
                <span className="text-green-400 font-mono">${maxProfit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Breakeven:</span>
                <span className="text-yellow-400 font-mono">${breakeven.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Annualized Return:</span>
                <span className="text-blue-400 font-mono">{annualizedReturn}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Assignment Risk:</span>
                <span className={`font-mono ${stockPrice < strikePrice ? 'text-red-400' : 'text-green-400'}`}>
                  {stockPrice < strikePrice ? 'High' : 'Low'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Profit/Loss Chart */}
        <div className="rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">Profit/Loss at Expiration</h4>
          <div className="h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Axes */}
              <line x1="0" y1="100" x2="400" y2="100" stroke="#6b7280" strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="200" stroke="#6b7280" strokeWidth="1" />
              
              {/* Profit/Loss line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                points={scenarios.map((scenario, index) => {
                  const x = (index / (scenarios.length - 1)) * 400
                  const y = 100 - (scenario.profitLoss * 10) // Scale for visibility
                  return `${x},${y}`
                }).join(' ')}
              />
              
              {/* Breakeven line */}
              <line 
                x1="0" 
                y1="100" 
                x2="400" 
                y2="100" 
                stroke="#fbbf24" 
                strokeWidth="1" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}


// Interest Calculator Component
const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(5)
  const [time, setTime] = useState(10)
  const [compounding, setCompounding] = useState(12)
  const [showChart, setShowChart] = useState(false)

  const calculateCompoundInterest = () => {
    const amount = principal * Math.pow(1 + rate / 100 / compounding, compounding * time)
    return amount
  }

  const generateGrowthData = () => {
    const data = []
    for (let year = 0; year <= time; year++) {
      const amount = principal * Math.pow(1 + rate / 100 / compounding, compounding * year)
      data.push({ year, amount })
    }
    return data
  }

  const GrowthChart3D = () => {
    const [webglSupported, setWebglSupported] = React.useState(true)
    const [hasError, setHasError] = React.useState(false)
    const data = generateGrowthData()
    const maxAmount = Math.max(...data.map(d => d.amount))
    
    React.useEffect(() => {
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
      return (
        <div className="h-full flex items-center justify-center rounded-lg">
          <div className="text-center p-8">
            <div className="text-gray-400 mb-4">
              <BarChart3 className="w-16 h-16 mx-auto mb-4" />
              <p>3D visualization unavailable</p>
              <p className="text-sm mt-2">WebGL not supported in this environment</p>
            </div>
            <div className="bg-dark-bg p-4 rounded-lg">
              <p className="text-gray-300 text-sm">
                Final Amount: ${generateGrowthData().slice(-1)[0]?.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>
      )
    }
    
    return (
      <Canvas 
        camera={{ position: [15, 10, 15], fov: 50 }}
        onError={handleError}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'default'
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Base plane */}
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[time + 2, 8]} />
          <meshBasicMaterial color="#1f2937" transparent opacity={0.3} />
        </mesh>
        
        {/* Growth bars */}
        {data.map((point, index) => {
          const height = (point.amount / maxAmount) * 6
          return (
            <group key={index} position={[point.year - time / 2, height / 2, 0]}>
              <mesh>
                <boxGeometry args={[0.6, height, 0.6]} />
                <meshLambertMaterial 
                  color={`hsl(${120 + (index / data.length) * 60}, 70%, 50%)`} 
                />
              </mesh>
              <Text
                position={[0, -height / 2 - 0.5, 0]}
                fontSize={0.3}
                color="#9ca3af"
                anchorX="center"
                anchorY="middle"
              >
                {point.year}
              </Text>
            </group>
          )
        })}
        
        {/* Labels */}
        <Text
          position={[0, 7, 0]}
          fontSize={0.5}
          color="#10b981"
          anchorX="center"
          anchorY="middle"
        >
          Compound Interest Growth
        </Text>
        
        <OrbitControls />
      </Canvas>
    )
  }

  const finalAmount = calculateCompoundInterest()
  const totalInterest = finalAmount - principal

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Principal Amount ($)
            </label>
            <input
              type="text"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full px-3 py-2 bg-dark-surface border border-gray-600 rounded-lg text-gray-100 focus:border-primary-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="text"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-3 py-2 bg-dark-surface border border-gray-600 rounded-lg text-gray-100 focus:border-primary-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Time Period (years)
            </label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full px-3 py-2 bg-dark-surface border border-gray-600 rounded-lg text-gray-100 focus:border-primary-400 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Compounding Frequency (per year)
            </label>
            <select
              value={compounding}
              onChange={(e) => setCompounding(Number(e.target.value))}
              className="w-full px-3 py-2 bg-dark-surface border border-gray-600 rounded-lg text-gray-100 focus:border-primary-400 focus:outline-none"
            >
              <option value={1}>Annually</option>
              <option value={2}>Semi-annually</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
              <option value={365}>Daily</option>
            </select>
          </div>
        </div>
        
        {/* Results */}
        <div className="bg-dark-surface rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Calculation Results</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Principal:</span>
              <span className="text-gray-100 font-medium">${principal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Interest:</span>
              <span className="text-green-400 font-medium">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-600 pt-3">
              <span className="text-gray-300 font-medium">Final Amount:</span>
              <span className="text-primary-400 font-bold text-xl">${finalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>
            
            <div className="mt-4">
              <div className="text-sm text-gray-400 mb-2">Growth Multiplier:</div>
              <div className="text-accent-cyan font-semibold">{(finalAmount / principal).toFixed(2)}x</div>
            </div>
          </div>
          
          <button
            onClick={() => setShowChart(!showChart)}
            className="w-full mt-6 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
          >
            {showChart ? 'Hide' : 'Show'} 3D Growth Chart
          </button>
        </div>
      </div>
      
      {/* 3D Chart */}
      {showChart && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 400 }}
          exit={{ opacity: 0, height: 0 }}
          className="rounded-lg overflow-hidden"
        >
          <GrowthChart3D />
        </motion.div>
      )}
    </div>
  )
}

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('statistics')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const demos = [
    {
      id: 'statistics',
      title: 'Statistical Calculator',
      description: 'Mean, Variance & Standard Deviation',
      icon: <Calculator className="w-5 h-5" />
    },
    {
      id: 'wheel-strategy',
      title: 'Wheel Strategy',
      description: 'Options trading simulator',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  return (
    <section id="demos" className="py-20" style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Demo Selector */}
        <div className="flex justify-center gap-8 mb-8">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'text-primary-400'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {demo.icon}
              <div className="text-left">
                <div className="font-medium">{demo.title}</div>
                <div className="text-xs opacity-75">{demo.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          {activeDemo === 'statistics' && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Statistical Calculator</h3>
                <p className="text-gray-400">
                  Interactive 3x3 matrix calculator with real-time statistical analysis and 3D visualization.
                </p>
              </div>
              <StatisticalCalculator />
            </div>
          )}
          
          {activeDemo === 'wheel-strategy' && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Wheel Strategy Options Trading</h3>
                <p className="text-gray-400">
                  Simulate the wheel options trading strategy with real-time profit/loss calculations.
                </p>
              </div>
              <WheelStrategyDemo />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveDemo