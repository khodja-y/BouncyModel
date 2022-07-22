import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import * as THREE from 'three'

export default function House({ state, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./blacksmith_Textured_V2.glb')

  const snap = useSnapshot(state)

  // Cursor showing current color
  const [hovered, set] = useState(null)
  const customizable = {
    "Texte":1
  }
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => {
        e.stopPropagation();
        if(!(e.object.material.name in customizable))return
        state.current = e.object.material.name
      }}
    position={[0,0,0]}
      rotation={[Math.PI, -1.1, Math.PI]}
    >

      <mesh castShadow receiveShadow geometry={nodes.Lights002.geometry}
            // material={materials.Light}
            material={new THREE.MeshStandardMaterial({ color: snap.items.Light1, name: "Light1", roughness: 0.9, metalness: 0.5, emissive: snap.items.Light1, emissiveIntensity: 5.0})}
            position={[1.88, 1.47, -1.1]} />
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
        // material={materials.Texte}
        material={new THREE.MeshStandardMaterial({ color: snap.items.Texte, name: "Texte", roughness: 0.9, metalness: 0.0, emissive: snap.items.Texte, emissiveIntensity: 2.5})}
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
