
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { a } from '@react-spring/web'
// import { Button, Alert } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

import House from './components/House'
import Overlay from './components/Overlay.js'

const state = proxy({
  current: null,
  items: {
    Texte: '#0000ff',
    Light1: '#ffffff',
    Light2: '#ffffff',
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

export default function App() {
  return (
    <>
      <a.main>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
          {/* <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}> */}
          <House state={state} />
          <OrbitControls
            maxAzimuthAngle={Math.PI}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Math.PI / 2}
            minPolarAngle={0}
            enableZoom={true}
            enablePan={true}
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
