'use client'

import React, { Suspense, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Center, Text } from '@react-three/drei'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import * as THREE from 'three'
import { Code, Database, BarChart3, Brain, Cpu, Globe } from 'lucide-react'

// 3D Pie Slice Component
function PieSlice3D({ 
  startAngle, 
  endAngle, 
  radius, 
  color, 
  label, 
  percentage, 
  position,
  onHoverChange 
}: { 
  startAngle: number, 
  endAngle: number, 
  radius: number, 
  color: string, 
  label: string, 
  percentage: number, 
  position: [number, number, number],
  onHoverChange?: (hovered: boolean) => void 
}) {
  const [hovered, setHovered] = useState(false)
  
  // Create proper pie slice geometry
  const sliceGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const indices = []
    const normals = []
    
    const segments = 32
    const angleStep = (endAngle - startAngle) / segments
    const height = 0.5
    
    // Center vertices (top and bottom)
    vertices.push(0, height / 2, 0) // top center
    vertices.push(0, -height / 2, 0) // bottom center
    
    // Edge vertices
    for (let i = 0; i <= segments; i++) {
      const angle = startAngle + i * angleStep
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      
      vertices.push(x, height / 2, z) // top edge
      vertices.push(x, -height / 2, z) // bottom edge
    }
    
    // Top face triangles
    for (let i = 0; i < segments; i++) {
      indices.push(0, 2 + i * 2, 2 + (i + 1) * 2)
    }
    
    // Bottom face triangles
    for (let i = 0; i < segments; i++) {
      indices.push(1, 3 + (i + 1) * 2, 3 + i * 2)
    }
    
    // Side faces
    for (let i = 0; i < segments; i++) {
      const topCurrent = 2 + i * 2
      const bottomCurrent = 3 + i * 2
      const topNext = 2 + (i + 1) * 2
      const bottomNext = 3 + (i + 1) * 2
      
      // Two triangles per side face
      indices.push(topCurrent, bottomCurrent, topNext)
      indices.push(bottomCurrent, bottomNext, topNext)
    }
    
    // Start and end faces
    indices.push(0, 1, 2) // start face triangle 1
    indices.push(1, 3, 2) // start face triangle 2
    
    const lastTop = 2 + segments * 2
    const lastBottom = 3 + segments * 2
    indices.push(0, lastTop, 1) // end face triangle 1
    indices.push(1, lastTop, lastBottom) // end face triangle 2
    
    geometry.setIndex(indices)
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.computeVertexNormals()
    
    return geometry
  }, [startAngle, endAngle, radius])
  
  // Calculate label position - positioned on the slice surface
  const midAngle = (startAngle + endAngle) / 2
  const labelRadius = radius * 0.7
  const labelX = Math.cos(midAngle) * labelRadius
  const labelZ = Math.sin(midAngle) * labelRadius
  
  // Calculate edge position for percentage - positioned outside the pie
  const edgeRadius = radius * 1.5
  const edgeX = Math.cos(midAngle) * edgeRadius
  const edgeZ = Math.sin(midAngle) * edgeRadius
  
  return (
    <group position={position}>
      <mesh
        geometry={sliceGeometry}
        onPointerEnter={() => {
          setHovered(true)
          onHoverChange?.(true)
        }}
        onPointerLeave={() => {
          setHovered(false)
          onHoverChange?.(false)
        }}
        scale={hovered ? [1.5, 1.8, 1.5] : [1, 1, 1]}
        position={hovered ? [0, 0.1, 0] : [0, 0, 0]}
      >
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : color} 
          emissive={hovered ? '#333333' : '#111111'}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Skill name - always visible, scales with slice */}
      <Html
        position={[labelX, hovered ? 0.6 : 0.3, labelZ]}
        center
        distanceFactor={6}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          transform: hovered ? 'scale(1.5)' : 'scale(1)'
        }}
      >
        <div className={`text-white font-sans ${hovered ? 'text-lg' : 'text-sm'} font-bold whitespace-nowrap text-center bg-black bg-opacity-60 px-2 py-1 rounded`}>
          {label}
        </div>
      </Html>
      
      {/* Percentage label - positioned at slice edge, only show on hover */}
      {hovered && (
        <Html
          position={[edgeX, 0, edgeZ]}
          center
          distanceFactor={6}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            transform: 'scale(1.2)'
          }}
        >
          <div className="text-yellow-300 font-sans text-sm font-bold whitespace-nowrap text-center bg-black bg-opacity-90 px-1 py-0.5 rounded shadow-lg">
            {`${percentage}%`}
          </div>
        </Html>
      )}
    </group>
  )
}

// Programming & Data Science 3D Pie Chart
function ProgrammingSkills3DPie() {
  const [isAnySliceHovered, setIsAnySliceHovered] = useState(false)
  
  const skillsData = [
    { name: 'Python', percentage: 15 },
    { name: 'SQL', percentage: 12 },
    { name: 'Pandas', percentage: 12 },
    { name: 'NumPy', percentage: 10 },
    { name: 'Scikit-learn', percentage: 10 },
    { name: 'Machine Learning', percentage: 10 },
    { name: 'Data Structures & Algorithms', percentage: 8 },
    { name: 'Data Cleaning', percentage: 7 },
    { name: 'Deep Learning', percentage: 6 },
    { name: 'Generative AI', percentage: 4 },
    { name: 'Web Scraping', percentage: 3 },
    { name: 'API Integration', percentage: 3 }
  ]
  
  // Calculate total and angles for pie slices
  const total = skillsData.reduce((sum, skill) => sum + skill.percentage, 0)
  let currentAngle = 0
  
  const pieSlices = skillsData.map((skill, index) => {
    const sliceAngle = (skill.percentage / total) * Math.PI * 2
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle
    
    // Brighter Color palette
    const colors = [
      '#22d3ee', '#a855f7', '#fbbf24', '#f87171', 
      '#84cc16', '#fb923c', '#818cf8', '#34d399',
      '#f472b6', '#06d6a0', '#ffbe0b', '#8338ec'
    ]
    
    return {
      ...skill,
      startAngle,
      endAngle,
      color: colors[index % colors.length]
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={0.4} />
      <pointLight position={[0, 15, 0]} color="#10b981" intensity={0.3} />
      
      {pieSlices.map((slice, index) => (
        <PieSlice3D
          key={slice.name}
          startAngle={slice.startAngle}
          endAngle={slice.endAngle}
          radius={3}
          color={slice.color}
          label={slice.name}
          percentage={slice.percentage}
          position={[0, 0, 0]}
          onHoverChange={setIsAnySliceHovered}
        />
      ))}
      
      <OrbitControls 
        enableZoom={true} 
        autoRotate={!isAnySliceHovered}
        autoRotateSpeed={1} 
        minDistance={3}
        maxDistance={20}
      />
    </>
  )
}

// Analytics & Visualization 3D Pie Chart
function AnalyticsSkills3DPie() {
  const [isAnySliceHovered, setIsAnySliceHovered] = useState(false)
  
  const skillsData = [
    { name: 'Statistical Analysis', percentage: 10 },
    { name: 'Predictive Modeling', percentage: 10 },
    { name: 'Matplotlib & Seaborn', percentage: 10 },
    { name: 'Regression Analysis', percentage: 8 },
    { name: 'Business Intelligence', percentage: 8 },
    { name: 'Data Storytelling', percentage: 8 },
    { name: 'Tableau', percentage: 8 },
    { name: 'Excel (Advanced)', percentage: 8 },
    { name: 'Jupyter Notebooks', percentage: 8 },
    { name: 'Power BI', percentage: 6 },
    { name: 'A/B Testing', percentage: 4 },
    { name: 'Time Series Analysis', percentage: 4 },
    { name: 'Hypothesis Testing', percentage: 4 },
    { name: 'Communication', percentage: 4 }
  ]
  
  const total = skillsData.reduce((sum, skill) => sum + skill.percentage, 0)
  let currentAngle = 0
  
  const pieSlices = skillsData.map((skill, index) => {
    const sliceAngle = (skill.percentage / total) * Math.PI * 2
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle
    
    // Brighter Color palette for Analytics
    const colors = [
      '#22d3ee', '#a855f7', '#fbbf24', '#f87171', 
      '#84cc16', '#fb923c', '#818cf8', '#34d399',
      '#f472b6', '#06d6a0', '#ffbe0b', '#8338ec',
      '#22d3ee', '#f87171'
    ]
    
    return {
      ...skill,
      startAngle,
      endAngle,
      color: colors[index % colors.length]
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={0.4} />
      <pointLight position={[0, 15, 0]} color="#10b981" intensity={0.3} />
      
      {pieSlices.map((slice, index) => (
        <PieSlice3D
          key={slice.name}
          startAngle={slice.startAngle}
          endAngle={slice.endAngle}
          radius={3}
          color={slice.color}
          label={slice.name}
          percentage={slice.percentage}
          position={[0, 0, 0]}
          onHoverChange={setIsAnySliceHovered}
        />
      ))}
      
      <OrbitControls 
        enableZoom={true} 
        autoRotate={!isAnySliceHovered}
        autoRotateSpeed={1} 
        minDistance={3}
        maxDistance={20}
      />
    </>
  )
}

// Databases & Cloud 3D Pie Chart
function DatabasesSkills3DPie() {
  const [isAnySliceHovered, setIsAnySliceHovered] = useState(false)
  
  const skillsData = [
    { name: 'Data Engineering', percentage: 18 },
    { name: 'ETL Processes', percentage: 18 },
    { name: 'Cloud Architecture', percentage: 12 },
    { name: 'AWS', percentage: 12 },
    { name: 'Docker', percentage: 12 },
    { name: 'PostgreSQL', percentage: 8 },
    { name: 'MySQL', percentage: 8 },
    { name: 'MongoDB', percentage: 6 },
    { name: 'BigQuery', percentage: 6 }
  ]
  
  const total = skillsData.reduce((sum, skill) => sum + skill.percentage, 0)
  let currentAngle = 0
  
  const pieSlices = skillsData.map((skill, index) => {
    const sliceAngle = (skill.percentage / total) * Math.PI * 2
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle
    
    // Brighter Color palette for Databases & Cloud
    const colors = [
      '#fbbf24', '#f87171', '#84cc16', '#fb923c', 
      '#818cf8', '#f472b6', '#06d6a0', '#22d3ee',
      '#34d399'
    ]
    
    return {
      ...skill,
      startAngle,
      endAngle,
      color: colors[index % colors.length]
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={0.4} />
      <pointLight position={[0, 15, 0]} color="#10b981" intensity={0.3} />
      
      {pieSlices.map((slice, index) => (
        <PieSlice3D
          key={slice.name}
          startAngle={slice.startAngle}
          endAngle={slice.endAngle}
          radius={3}
          color={slice.color}
          label={slice.name}
          percentage={slice.percentage}
          position={[0, 0, 0]}
          onHoverChange={setIsAnySliceHovered}
        />
      ))}
      
      <OrbitControls 
        enableZoom={true} 
        autoRotate={!isAnySliceHovered}
        autoRotateSpeed={1} 
        minDistance={3}
        maxDistance={20}
      />
    </>
  )
}

// Programming & Data Science 2D Bar Chart
function ProgrammingSkills2DBar() {
  const skillsData = [
    { name: 'Python', percentage: 15 },
    { name: 'SQL', percentage: 12 },
    { name: 'Pandas', percentage: 12 },
    { name: 'NumPy', percentage: 10 },
    { name: 'Scikit-learn', percentage: 10 },
    { name: 'Machine Learning', percentage: 10 },
    { name: 'Data Structures & Algorithms', percentage: 8 },
    { name: 'Data Cleaning', percentage: 7 },
    { name: 'Deep Learning', percentage: 6 },
    { name: 'Generative AI', percentage: 4 },
    { name: 'Web Scraping', percentage: 3 },
    { name: 'API Integration', percentage: 3 }
  ]

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
        <XAxis 
          dataKey="name" 
          stroke="#9CA3AF" 
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis stroke="#9CA3AF" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1F2937', 
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#F3F4F6'
          }}
          formatter={(value) => [`${value}%`, 'Proficiency']}
        />
        <Bar 
          dataKey="percentage" 
          fill="url(#programmingGradient)" 
          radius={[4, 4, 0, 0]}
        />
        <defs>
          <linearGradient id="programmingGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}

// Analytics & Visualization 2D Bar Chart
function AnalyticsSkills2DBar() {
  const skillsData = [
    { name: 'Statistical Analysis', percentage: 10 },
    { name: 'Predictive Modeling', percentage: 10 },
    { name: 'Matplotlib & Seaborn', percentage: 10 },
    { name: 'Power BI', percentage: 8 },
    { name: 'Jupyter Notebooks', percentage: 8 },
    { name: 'Excel (Advanced)', percentage: 8 },
    { name: 'Tableau', percentage: 8 },
    { name: 'Data Storytelling', percentage: 8 },
    { name: 'Business Intelligence', percentage: 8 },
    { name: 'Regression Analysis', percentage: 8 },
    { name: 'A/B Testing', percentage: 6 },
    { name: 'Communication', percentage: 4 },
    { name: 'Hypothesis Testing', percentage: 4 },
    { name: 'Time Series Analysis', percentage: 4 }
  ]

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
        <XAxis 
          dataKey="name" 
          stroke="#9CA3AF" 
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis stroke="#9CA3AF" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1F2937', 
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#F3F4F6'
          }}
          formatter={(value) => [`${value}%`, 'Proficiency']}
        />
        <Bar 
          dataKey="percentage" 
          fill="url(#analyticsGradient)" 
          radius={[4, 4, 0, 0]}
        />
        <defs>
          <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}

// Databases & Cloud 2D Bar Chart
function DatabasesSkills2DBar() {
  const skillsData = [
    { name: 'Data Engineering', percentage: 18 },
    { name: 'ETL Processes', percentage: 18 },
    { name: 'Docker', percentage: 12 },
    { name: 'Cloud Architecture', percentage: 12 },
    { name: 'AWS', percentage: 12 },
    { name: 'PostgreSQL', percentage: 8 },
    { name: 'MySQL', percentage: 8 },
    { name: 'MongoDB', percentage: 6 },
    { name: 'BigQuery', percentage: 6 }
  ]

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
        <XAxis 
          dataKey="name" 
          stroke="#9CA3AF" 
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis stroke="#9CA3AF" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1F2937', 
            border: '1px solid #374151',
            borderRadius: '8px',
            color: '#F3F4F6'
          }}
          formatter={(value) => [`${value}%`, 'Proficiency']}
        />
        <Bar 
          dataKey="percentage" 
          fill="url(#databasesGradient)" 
          radius={[4, 4, 0, 0]}
        />
        <defs>
          <linearGradient id="databasesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-surface border border-gray-700/50 rounded-lg p-3 shadow-lg">
        <p className="text-gray-200 font-medium">{`${label}: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

// Skills 3D Chart with WebGL Error Handling
const Skills3DChart = ({ 
  skillCategory, 
  ProgrammingSkills3DPie, 
  AnalyticsSkills3DPie, 
  DatabasesSkills3DPie 
}: {
  skillCategory: string
  ProgrammingSkills3DPie: React.ComponentType
  AnalyticsSkills3DPie: React.ComponentType
  DatabasesSkills3DPie: React.ComponentType
}) => {
  const [webglSupported, setWebglSupported] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
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

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  if (!webglSupported || hasError) {
    // Fallback to 2D charts when WebGL is not supported
    return (
      <>
        <div className="h-[500px] w-full">
          {skillCategory === 'programming' && <ProgrammingSkills2DBar />}
          {skillCategory === 'analytics' && <AnalyticsSkills2DBar />}
          {skillCategory === 'databases' && <DatabasesSkills2DBar />}
        </div>

      </>
    )
  }

  return (
    <>
      <div className="h-[500px] w-full">
        <Canvas 
          camera={{ position: [0, 6, 10], fov: 60 }}
          onError={handleError}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: 'default'
          }}
        >
          <Suspense fallback={null}>
            {skillCategory === 'programming' && <ProgrammingSkills3DPie />}
            {skillCategory === 'analytics' && <AnalyticsSkills3DPie />}
            {skillCategory === 'databases' && <DatabasesSkills3DPie />}
          </Suspense>
        </Canvas>
      </div>
      <p className="text-gray-400 text-center mt-4">
        Drag to rotate • Scroll to zoom • Hover over slices for details
      </p>
    </>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [chartType, setChartType] = useState('3d')
  const [skillCategory, setSkillCategory] = useState('programming')



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-cyan">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and economic knowledge, 
              visualized through interactive 3D charts and detailed breakdowns.
            </p>
          </motion.div>

          {/* Skill Category Toggle */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center">
              <div className="rounded-lg p-1">
                <button
                  onClick={() => setSkillCategory('programming')}
                  className={`px-4 py-3 rounded-md font-medium transition-all duration-300 border ${
                    skillCategory === 'programming'
                      ? 'border-primary-500 text-primary-500'
                      : 'border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  Programming & Data Science
                </button>
                <button
                  onClick={() => setSkillCategory('analytics')}
                  className={`px-4 py-3 rounded-md font-medium transition-all duration-300 border ${
                    skillCategory === 'analytics'
                      ? 'border-accent-cyan text-accent-cyan'
                      : 'border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  Analytics & Visualization
                </button>
                <button
                  onClick={() => setSkillCategory('databases')}
                  className={`px-4 py-3 rounded-md font-medium transition-all duration-300 border ${
                    skillCategory === 'databases'
                      ? 'border-yellow-500 text-yellow-500'
                      : 'border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  Databases & Cloud
                </button>
              </div>
            </div>
          </motion.div>

          {/* Chart Type Toggle */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center">
              <div className="rounded-lg p-1">
                <button
                  onClick={() => setChartType('3d')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 border ${
                    chartType === '3d'
                      ? 'border-primary-500 text-primary-500'
                      : 'border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  3D Pie Chart
                </button>
                <button
                  onClick={() => setChartType('2d')}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 border ${
                    chartType === '2d'
                      ? 'border-accent-cyan text-accent-cyan'
                      : 'border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
                >
                  2D Bar Chart
                </button>
              </div>
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
                {skillCategory === 'programming' && 'Programming & Data Science Skill Weighting'}
                {skillCategory === 'analytics' && 'Analytics & Visualization Skill Weighting'}
                {skillCategory === 'databases' && 'Databases & Cloud Skill Weighting'}
              </h3>
              
              {chartType === '3d' ? (
                <Skills3DChart 
                  skillCategory={skillCategory}
                  ProgrammingSkills3DPie={ProgrammingSkills3DPie}
                  AnalyticsSkills3DPie={AnalyticsSkills3DPie}
                  DatabasesSkills3DPie={DatabasesSkills3DPie}
                />
              ) : (
                <>
                  <div className="h-[500px] w-full">
                    {skillCategory === 'programming' && <ProgrammingSkills2DBar />}
                    {skillCategory === 'analytics' && <AnalyticsSkills2DBar />}
                    {skillCategory === 'databases' && <DatabasesSkills2DBar />}
                  </div>
                  <p className="text-gray-400 text-center mt-4">
                    Hover over bars for detailed information
                  </p>
                </>
              )}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

export default Skills