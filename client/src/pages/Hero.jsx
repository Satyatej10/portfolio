import Particles from "../Particles.jsx";
import { useState } from 'react'

function Hero() {
    <>
      
        <Particles
          particleColors={['#0f0019', '#0f0019']}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
    </>
}
export default Hero;