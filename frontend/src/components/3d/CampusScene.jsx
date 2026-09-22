import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';

const Building = ({ position, args, color, name }) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Optional subtle animation
  useFrame((state, delta) => {
    if (hovered) {
      meshRef.current.rotation.y += delta * 0.5;
    } else {
      // return to original rotation smoothly
      meshRef.current.rotation.y = meshRef.current.rotation.y * 0.9;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={active ? 1.1 : 1}
        onClick={(e) => { e.stopPropagation(); setActive(!active); }}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHover(false); }}
      >
        <boxGeometry args={args} />
        <meshStandardMaterial color={hovered ? '#e94560' : color} opacity={0.9} transparent />
      </mesh>
      
      {/* Label */}
      <Text
        position={[0, args[1]/2 + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>

      {/* HTML tooltip on hover */}
      {hovered && (
        <Html position={[0, args[1]/2 + 1, 0]} center>
          <div className="bg-game-primary p-2 rounded text-xs whitespace-nowrap border border-game-accent shadow-lg">
            Click to enter {name}
          </div>
        </Html>
      )}
    </group>
  );
};

const CampusScene = () => {
  return (
    <Canvas camera={{ position: [0, 15, 20], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0f3460" />
      </mesh>

      {/* Buildings */}
      <Building position={[-5, 2, -5]} args={[4, 5, 4]} color="#1a1a2e" name="Main Building" />
      <Building position={[5, 1.5, -5]} args={[3, 4, 3]} color="#1a1a2e" name="Classrooms" />
      <Building position={[-6, 1, 4]} args={[3, 3, 3]} color="#1a1a2e" name="Laboratory" />
      <Building position={[4, 1.5, 5]} args={[4, 4, 3]} color="#1a1a2e" name="Library" />
      <Building position={[0, 0.5, 2]} args={[2, 2, 2]} color="#1a1a2e" name="Canteen" />

      {/* Assembly Point Indicator (Gamification Hazard/Safety map demo) */}
      <mesh position={[0, 0.1, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial color="green" opacity={0.5} transparent />
      </mesh>
      <Text position={[0, 0.5, -2]} fontSize={0.3} color="green" rotation={[-Math.PI / 2, 0, 0]}>
        Assembly Point
      </Text>

      <OrbitControls 
        makeDefault 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 2.1} 
        minDistance={5} 
        maxDistance={40} 
      />
    </Canvas>
  );
};

export default CampusScene;
