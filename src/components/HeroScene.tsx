import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe Icosahedron - represents the intersection of systems
function WireframeIcosahedron({ position = [0, 0, 0] as [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      edgesRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.8, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <group position={position}>
      {/* Solid transparent mesh for subtle fill */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial
          color="#2D3561"
          transparent
          opacity={0.03}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Wireframe edges */}
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color="#2D3561" transparent opacity={0.4} />
      </lineSegments>
    </group>
  );
}

// Orbiting dots - represents data/trust flowing through systems
function OrbitingDots() {
  const groupRef = useRef<THREE.Group>(null);
  const dotsCount = 40;

  const dots = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < dotsCount; i++) {
      const angle = (i / dotsCount) * Math.PI * 2;
      const radius = 2.5 + Math.sin(i * 0.5) * 0.5;
      const y = Math.cos(i * 0.3) * 1.2;
      positions.push([
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02 + Math.random() * 0.02, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#C4956A' : '#2D3561'}
            transparent
            opacity={0.3 + Math.random() * 0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// Connection lines between nodes
function ConnectionLines() {
  const groupRef = useRef<THREE.Group>(null);
  const linesCount = 12;

  const lines = useMemo(() => {
    const result: [number, number, number][][] = [];
    for (let i = 0; i < linesCount; i++) {
      const angle1 = (i / linesCount) * Math.PI * 2;
      const angle2 = ((i + 3) / linesCount) * Math.PI * 2;
      const r1 = 1.5 + Math.random() * 0.5;
      const r2 = 1.5 + Math.random() * 0.5;
      result.push([
        [Math.cos(angle1) * r1, Math.sin(angle1 * 2) * 0.8, Math.sin(angle1) * r1],
        [Math.cos(angle2) * r2, Math.sin(angle2 * 2) * 0.8, Math.sin(angle2) * r2],
      ]);
    }
    return result;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#2D3561"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <WireframeIcosahedron />
      </Float>
      <OrbitingDots />
      <ConnectionLines />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
