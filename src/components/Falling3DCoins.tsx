import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Cylinder } from '@react-three/drei';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface CoinProps {
  position: [number, number, number];
  initialRotation: [number, number, number];
  fallSpeed: number;
  rotationSpeed: [number, number, number];
}

const Coin = ({ position, initialRotation, fallSpeed, rotationSpeed }: CoinProps) => {
  const groupRef = useRef<Group>(null);
  const coinRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !coinRef.current) return;

    // 缓慢下落
    groupRef.current.position.y -= fallSpeed;
    
    // 旋转效果
    groupRef.current.rotation.x += rotationSpeed[0];
    groupRef.current.rotation.y += rotationSpeed[1];
    groupRef.current.rotation.z += rotationSpeed[2];

    // 重置位置当硬币掉出视野
    if (groupRef.current.position.y < -10) {
      groupRef.current.position.y = 8;
      groupRef.current.position.x = (Math.random() - 0.5) * 10;
      groupRef.current.position.z = (Math.random() - 0.5) * 5;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={initialRotation}>
      {/* 硬币主体 */}
      <Cylinder ref={coinRef} args={[1, 1, 0.1, 32]}>
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* 硬币边缘装饰圆点 */}
      {Array.from({ length: 32 }, (_, i) => {
        const angle = (i / 32) * Math.PI * 2;
        const x = Math.cos(angle) * 0.85;
        const z = Math.sin(angle) * 0.85;
        return (
          <mesh key={i} position={[x, 0.06, z]}>
            <sphereGeometry args={[0.03]} />
            <meshStandardMaterial color="#DAA520" />
          </mesh>
        );
      })}

      {/* 乌贼图案 - 简化为几何形状 */}
      <group position={[0, 0.06, 0]}>
        {/* 乌贼身体 */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.02]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>
        
        {/* 乌贼头部 */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>

        {/* 乌贼触手 */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * 0.2;
          const z = Math.sin(angle) * 0.2;
          return (
            <mesh key={i} position={[x, -0.3, z]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#B8860B" />
            </mesh>
          );
        })}
      </group>

      {/* 几何形状符号 */}
      <group position={[0, -0.06, 0]} rotation={[Math.PI, 0, 0]}>
        {/* 三角形 */}
        <mesh position={[-0.3, 0, -0.3]}>
          <coneGeometry args={[0.1, 0.15, 3]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>

        {/* 正方形 */}
        <mesh position={[0, 0, -0.3]}>
          <boxGeometry args={[0.15, 0.15, 0.02]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>

        {/* 圆形 */}
        <mesh position={[0.3, 0, -0.3]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>
      </group>
    </group>
  );
};

export const Falling3DCoins = () => {
  // 创建多个硬币的随机属性
  const coins = Array.from({ length: 8 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      Math.random() * 16 - 2,
      (Math.random() - 0.5) * 5
    ] as [number, number, number],
    initialRotation: [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    ] as [number, number, number],
    fallSpeed: 0.005 + Math.random() * 0.01,
    rotationSpeed: [
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02,
      (Math.random() - 0.5) * 0.02
    ] as [number, number, number]
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* 环境光 */}
        <ambientLight intensity={0.5} />
        
        {/* 主光源 */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
        />
        
        {/* 侧光源 */}
        <pointLight position={[-5, 3, 2]} intensity={0.5} color="#FFD700" />

        {/* 渲染所有硬币 */}
        {coins.map((coin, index) => (
          <Coin
            key={index}
            position={coin.position}
            initialRotation={coin.initialRotation}
            fallSpeed={coin.fallSpeed}
            rotationSpeed={coin.rotationSpeed}
          />
        ))}
      </Canvas>
    </div>
  );
};