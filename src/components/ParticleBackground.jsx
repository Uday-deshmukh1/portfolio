import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef(null);
  const particleCount = 1200;

  const { positions, colors } = useMemo(() => {
    const positionArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color("#00d1b2"),
      new THREE.Color("#4f8cff"),
      new THREE.Color("#8bd5ff"),
      new THREE.Color("#f59e0b"),
    ];

    for (let index = 0; index < particleCount; index += 1) {
      const i3 = index * 3;
      positionArray[i3] = (Math.random() - 0.5) * 95;
      positionArray[i3 + 1] = (Math.random() - 0.5) * 70;
      positionArray[i3 + 2] = (Math.random() - 0.5) * 55;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colorArray[i3] = color.r;
      colorArray[i3 + 1] = color.g;
      colorArray[i3 + 2] = color.b;
    }

    return { positions: positionArray, colors: colorArray };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    const elapsed = clock.getElapsedTime();
    pointsRef.current.rotation.x = pointer.y * 0.1 + elapsed * 0.015;
    pointsRef.current.rotation.y = pointer.x * 0.13 + elapsed * 0.02;
    pointsRef.current.rotation.z = elapsed * 0.004;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.13} vertexColors transparent opacity={0.74} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 34], fov: 72 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}

export default ParticleBackground;
