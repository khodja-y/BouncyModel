
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useHelper } from '@react-three/drei'
import { a } from '@react-spring/web'
// import { Button, Alert } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

import Wagon from './components/Wagon'
import Overlay from './components/Overlay.js'
import { useRef } from 'react'
import * as THREE from 'three'

const state = proxy({
  current: null,
  items: {
    Poignet: "#968078",
    InterieurRoues: "#E7A259",
    Carrosserie: "#60E785",
    Escaliers: "#B2483A",
    Fenetre: "#18EFFF",
    Cheminet: "#968078",
    Toit: "#E76B00",
    Roues: "#63271F",
    CarosserieExterne: "#E7A259",
    Porte: "#B2483A",
    ToitExterne: "#B2483A",
    FenetreExterne: "#B2483A",
    Nuages: "#ffffff",
    Background: "#321D46"
  },
})

function Picker() {
  const snap = useSnapshot(state)

  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

const Light = () => {
  const light1 = useRef()
  const light2 = useRef()
  const light3 = useRef()
  const light4 = useRef()
  useHelper(light1, THREE.PointLightHelper, 1);
  useHelper(light2, THREE.PointLightHelper, 1);
  useHelper(light3, THREE.PointLightHelper, 1);
  useHelper(light4, THREE.PointLightHelper, 1);

  return (
    <>
      <pointLight args={[`#ffffff`, 1, 100]} position={[5, 10, 0]} />
      <pointLight args={[`#ffffff`, 0.5, 100]} position={[0, 6, -5]} />
      <pointLight args={[`#ffffff`, 0.5, 100]} position={[0, 6, 5]} />
      <pointLight args={[`#76AFFF`, 0.5, 100]} position={[0, 0, 0]} />
    </>
  )


}

export default function AppWagon() {
  return (
    <>
      <a.main>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 75 }}>
          {/*<ambientLight intensity={0.5} />*/}
          {/*<spotLight position={[0, 0, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />*/}
          <directionalLight intensity={0.5} />
          <Light/>
          {/* <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}> */}
          <Wagon state={state} />
          <OrbitControls
            maxAzimuthAngle={Math.PI}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Math.PI / 2}
            minPolarAngle={0}
            enableZoom={true}
            enablePan={false}
            maxDistance={10}
            minDistance={0}
            maxZoom={10}
            minZoom={-1}
            zoomSpeed={0.5}
          />
          {/* </PresentationControls> */}
          {/*<ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />*/}
          {/*<Environment preset="city" />*/}
        </Canvas>
        <Picker />
        <Overlay />
      </a.main>
      {/*<Button*/}
      {/*  title="Suivant"*/}
      {/*  color="#ff0000"*/}
      {/*  onPress={() => {*/}
      {/*    window.location.replace('https://2nkzth.csb.app/')*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  )
}
