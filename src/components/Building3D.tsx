import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from "three";

interface Building3DProps {
  position: [number, number, number];
  height: number;
  color: string;
  encrypted?: boolean;
}

export const Building3D = ({ position, height, color, encrypted = false }: Building3DProps) => {
  const buildingRef = useRef<THREE.Mesh>(null);
  const windowsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y += 0.001;
    }
    
    if (windowsRef.current && encrypted) {
      windowsRef.current.children.forEach((window, index) => {
        const mesh = window as THREE.Mesh;
        const material = mesh.material as THREE.MeshBasicMaterial;
        const time = state.clock.elapsedTime;
        material.opacity = 0.3 + Math.sin(time * 2 + index) * 0.3;
      });
    }
  });

  const windows = [];
  const windowsPerFloor = 4;
  const floors = Math.floor(height * 5);

  for (let floor = 0; floor < floors; floor++) {
    for (let i = 0; i < windowsPerFloor; i++) {
      const x = (i - 1.5) * 0.3;
      const y = (floor - floors/2) * 0.4 + 0.2;
      const z = 0.51;
      
      windows.push(
        <Box
          key={`window-${floor}-${i}`}
          args={[0.2, 0.15, 0.02]}
          position={[x, y, z]}
        >
          <meshBasicMaterial 
            color={encrypted ? "#00ff88" : "#00ccff"}
            transparent
            opacity={encrypted ? 0.6 : 0.8}
          />
        </Box>
      );
    }
  }

  return (
    <group position={position}>
      {/* Main building */}
      <Box ref={buildingRef} args={[1, height, 1]}>
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </Box>
      
      {/* Windows */}
      <group ref={windowsRef}>
        {windows}
      </group>
      
      {/* Base */}
      <Box args={[1.2, 0.1, 1.2]} position={[0, -height/2 - 0.05, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
    </group>
  );
};