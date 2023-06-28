import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./index.css";

export function Model(props) {
  const { nodes, materials } = useGLTF("/03.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={3.413}>
        <group
          position={[-0.075, 0.021, -0.126]}
          rotation={[0.015, 0.413, 1.51]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-900"].geometry}
            material={materials.Mtla}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-901"].geometry}
            material={materials.Mtlb}
          />
        </group>
        <group position={[0.053, 0.002, 0.057]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-381"].geometry}
            material={materials.Mtl2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-382"].geometry}
            material={materials.Mtl3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-383"].geometry}
            material={materials.Mtl1}
          />
        </group>
        <group
          position={[-0.073, 0.021, -0.127]}
          rotation={[1.555, -0.071, -0.414]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-852"].geometry}
            material={materials.Mtl7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-853"].geometry}
            material={materials.Mtl8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-854"].geometry}
            material={materials.Mtl6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3DGeom-855"].geometry}
            material={materials.Mtl5}
          />
        </group>
      </group>
    </group>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <Canvas
        camera={{
          fov: 45,
          near: 0.01,
          far: 2000,
          aspect: window.innerWidth / window.innerHeight,
          position: [0, 0, 2]
        }}
        styel={"height:100%,width:100%"}
      >
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0, 0, 75]} />
          <Model />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
