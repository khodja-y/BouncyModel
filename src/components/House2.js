import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function House({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/blacksmith_Textured_V2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Lights002.geometry} material={materials.Light} position={[1.88, 1.47, -1.1]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window001.geometry}
        material={materials.Light}
        position={[-0.05, 0, -0.2]}
        scale={1.12}
      />
      <mesh castShadow receiveShadow geometry={nodes.Ground.geometry} material={materials.Ground} />
      <mesh castShadow receiveShadow geometry={nodes.Rocks.geometry} material={materials.Rocks} position={[0.76, 0, -0.13]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        position={[-1.9, 0, 3.12]}
        rotation={[Math.PI, -0.3, Math.PI]}
        scale={1.21}
      />
      <group position={[-0.11, 0, -0.2]} scale={1.12}>
        <mesh castShadow receiveShadow geometry={nodes.Plane079.geometry} material={materials.Roof2} />
        <mesh castShadow receiveShadow geometry={nodes.Plane079_1.geometry} material={materials.Roof3} />
        <mesh castShadow receiveShadow geometry={nodes.Plane079_2.geometry} material={materials.Roof} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texte.geometry}
        material={materials.Texte}
        position={[1.46, 1.9, 0.3]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poutres.geometry}
        material={materials.Wood2}
        position={[1.39, 0, -2.83]}
        scale={1.29}
      />
      <group position={[-1.63, 0.23, -0.17]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.97}>
        <mesh castShadow receiveShadow geometry={nodes.Cube025.geometry} material={materials.Wall} />
        <mesh castShadow receiveShadow geometry={nodes.Cube025_1.geometry} material={materials.Wall1} />
        <mesh castShadow receiveShadow geometry={nodes.Cube025_2.geometry} material={materials.Wall2} />
      </group>
      <group position={[1.41, 0, -0.2]} scale={0.85}>
        <mesh castShadow receiveShadow geometry={nodes.Plane071.geometry} material={materials.Wood3} />
        <mesh castShadow receiveShadow geometry={nodes.Plane071_1.geometry} material={materials.Wood2} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.AccrocheLampe.geometry} material={materials.Metal} position={[1.41, 1.77, -1.1]} />
      <mesh castShadow receiveShadow geometry={nodes.Lamp.geometry} material={materials.Metal} position={[1.88, 1.47, -1.1]} />
      <mesh castShadow receiveShadow geometry={nodes.Boule.geometry} material={materials.Metal} position={[1.88, 1.77, -1.1]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Crochet.geometry}
        material={materials.Metal}
        position={[1.88, 1.79, -1.1]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.16}
      />
    </group>
  )
}

useGLTF.preload('/blacksmith_Textured_V2.glb')
