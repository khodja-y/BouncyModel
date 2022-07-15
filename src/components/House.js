import { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./blacksmith_Textured.glb')

  // const colorMapGround = useLoader(TextureLoader, './Textures/GroundBaked.png');

  // Animate model
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 50
  //   group.current.rotation.x = Math.cos(t / 4) / 8
  //   group.current.rotation.y = Math.sin(t / 4) / 8
  //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })
  // })

  return (
    <group ref={group} {...props} dispose={null} scale={0.5} rotation={[0, -Math.PI / 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lights002.geometry}
        material={new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow') })}
        position={[1.88, 1.47, -1.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window001.geometry}
        material={new THREE.MeshBasicMaterial({ color: new THREE.Color('white') })}
        position={[-0.05, 0, -0.2]}
        scale={1.12}
      />
      <mesh geometry={nodes.Ground003.geometry} material={materials.Ground} />
      <mesh geometry={nodes.Plane090.geometry} material={materials.Poutre} position={[1.39, 0, -2.83]} scale={1.29} />
      <group position={[1.41, 0, -0.2]} scale={0.85}>
        <mesh geometry={nodes.Plane071.geometry} material={materials.Door} />
        <mesh geometry={nodes.Plane071_1.geometry} material={materials.Door2} />
      </group>
      <mesh
        geometry={nodes.Texte001.geometry}
        material={materials.Texte}
        position={[1.46, 1.9, 0.3]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.26}
      />
      <group position={[3.25, 0.36, -1.2]} rotation={[0, 0.46, 0]} scale={0.92}>
        <mesh geometry={nodes.Plane073.geometry} material={materials.Outils2} />
        <mesh geometry={nodes.Plane073_1.geometry} material={materials.Branch} />
        <mesh geometry={nodes.Plane073_2.geometry} material={materials.Outils} />
      </group>
      <group position={[-0.11, 0, -0.2]} scale={1.12}>
        <mesh geometry={nodes.Plane079.geometry} material={materials.Roof2} />
        <mesh geometry={nodes.Plane079_1.geometry} material={materials.Wood3} />
        <mesh geometry={nodes.Plane079_2.geometry} material={materials.Roof} />
      </group>
      <group position={[-1.63, 0.23, -0.17]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.97}>
        <mesh geometry={nodes.Cube025.geometry} material={materials.Wall} />
        <mesh geometry={nodes.Cube025_1.geometry} material={materials.Wall1} />
        <mesh geometry={nodes.Cube025_2.geometry} material={materials.Wall2} />
      </group>
      <mesh geometry={nodes.AccrocheLampe001.geometry} material={materials.Metal} position={[1.41, 1.77, -1.1]} />
      <mesh geometry={nodes.Plane070.geometry} material={materials.Metal} position={[1.88, 1.47, -1.1]} />
      <mesh geometry={nodes.Roundcube032.geometry} material={materials.Metal} position={[1.88, 1.77, -1.1]} />
      <mesh
        geometry={nodes.Rond001.geometry}
        material={materials.Metal}
        position={[1.88, 1.79, -1.1]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.16}
      />
      <mesh
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        position={[-1.9, 0, 3.12]}
        rotation={[Math.PI, -0.3, Math.PI]}
        scale={1.21}
      />
      <mesh geometry={nodes.Rocks.geometry} material={materials.Rocks} position={[0.76, 0, -0.13]} />
    </group>
  )
}

useGLTF.preload('/blacksmith_Textured.glb')

export default function House() {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  )
}
