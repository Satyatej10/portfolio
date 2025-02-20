import { useState } from 'react'
import './App.css'
import Particles from './Particles.jsx';

function App() {
  return (
    <>
      <div style={{ 
        width: '100%', 
        height: '600px', 
        position: 'relative', 
        background: 'black'
      }} className='flex min-h-screen flex-col items-center justify-center'>
        
        {/* Particles background layer - keep at lower z-index */}
        <Particles 
          className='absolute top-0 left-0 z--10'
          particleColors={['#0f0019', '#0f0019']}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        
        {/* Content layer - higher z-index to appear above particles */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-100">Welcome to your new app!</h1>
        </div>
      </div>
    </>
  )
}

export default App