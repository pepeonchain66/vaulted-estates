import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Building3D } from "./Building3D";
import { Suspense } from "react";

export const VirtualCityscape = () => {
  const buildings = [
    { position: [-3, 1, 0] as [number, number, number], height: 2, color: "#1a1a2e", encrypted: true },
    { position: [-1, 1.5, 0] as [number, number, number], height: 3, color: "#16213e", encrypted: false },
    { position: [1, 2, 0] as [number, number, number], height: 4, color: "#0f172a", encrypted: true },
    { position: [3, 1.25, 0] as [number, number, number], height: 2.5, color: "#1e293b", encrypted: false },
    { position: [-2, 0.75, -2] as [number, number, number], height: 1.5, color: "#334155", encrypted: true },
    { position: [0, 1.75, -2] as [number, number, number], height: 3.5, color: "#1a1a2e", encrypted: false },
    { position: [2, 1, -2] as [number, number, number], height: 2, color: "#16213e", encrypted: true },
  ];

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden building-shadow">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={60} />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.5}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00ccff" />
          <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#00ff88" />
          <pointLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Buildings */}
          {buildings.map((building, index) => (
            <Building3D
              key={index}
              position={building.position}
              height={building.height}
              color={building.color}
              encrypted={building.encrypted}
            />
          ))}
          
          {/* Ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              transparent 
              opacity={0.8}
              roughness={0.8}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};