
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { a } from '@react-spring/web'
// import { Button, Alert } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

import Candy from './components/Candy'
import Overlay from './components/Overlay.js'

const state = proxy({
  current: null,
  items: {
    Red: '#ff0000',
    white: '#ffffff'
  }
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

export default function AppCandy() {
  return (
    <>
      <a.main>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 0, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
          <directionalLight />
          {/* <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}> */}
          <Candy state={state} />
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
