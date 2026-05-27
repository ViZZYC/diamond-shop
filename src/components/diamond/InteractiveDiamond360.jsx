"use client";

import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// Yahan maine 'Center' add kiya hai imports mein
import { useGLTF, Environment, ContactShadows, Html, useProgress, Center } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center className="text-white/70 text-sm">{progress.toFixed(0)} % loaded</Html>;
}

function DiamondModel({ rotationValue }) {
  const { scene } = useGLTF("/assets/dimond.glb"); 

  const rotationInRadians = rotationValue * (Math.PI / 180);

  return (
    
    <group rotation={[0, rotationInRadians, 0]}>
      <Center>
        <primitive 
          object={scene} 
        
          scale={0.02} 
        />
      </Center>
    </group>
  );
}
export default function InteractiveDiamond360() {
  const [rotation, setRotation] = useState(0);

  const handleSliderChange = (e) => {
    setRotation(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-16">
      
      <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-[#e9b0a1]/20 rounded-full blur-[80px]" />
        
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              
              <Environment preset="city" /> 
              
              <DiamondModel rotationValue={rotation} />

              <ContactShadows 
                position={[0, -1.5, 0]} 
                opacity={0.5} 
                scale={10} 
                blur={2} 
                far={4} 
                color="#e9b0a1" 
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col items-center gap-4 z-20">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
          Drag to Rotate 360°
        </span>
        <input 
          type="range" 
          min="-180" 
          max="180" 
          value={rotation} 
          onChange={handleSliderChange}
          className="w-full appearance-none bg-white/10 h-1 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e9b0a1] [&::-webkit-slider-thumb]:cursor-grab active:[&::-webkit-slider-thumb]:cursor-grabbing"
        />
      </div>
    </div>
  );
}

useGLTF.preload("/assets/dimond.glb");