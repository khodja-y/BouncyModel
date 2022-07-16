import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Col, Row } from 'react-bootstrap'
import { useGLTF, PresentationControls, Html, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import { Button, Alert } from 'react-native'

import House from './components/House2'
import Overlay from './components/Overlay.js'

export default function App() {
  const [{ background, fill }, set] = useSpring({ background: '#ffffff', fill: '#202020' }, [])

  return (
    <>
      <a.main style={{ background }}>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
          <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <House />
          </PresentationControls>
          {/*<ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />*/}
          {/*<Environment preset="city" />*/}
        </Canvas>
        <Overlay fill={fill} />
      </a.main>
      <Button
        title="Suivant"
        color="#ff0000"
        onPress={() => {
          window.location.replace('https://2nkzth.csb.app/')
        }}
      />
    </>
  )
}

// function House(props) {
//   const ref = useRef()
//   const { nodes, materials } = useGLTF('/roof_Textured.glb')
//   // useFrame((state) => {
//   //   const t = state.clock.getElapsedTime()
//   //   ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
//   //   ref.current.rotation.y = Math.sin(t / 4) / 8
//   //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
//   //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
//   // })
//
//   const propsRoof = useTexture({
//     map: './Textures/RoofBaked.png'
//   })
//
//   console.log(nodes);
//   // console.log(materials.Roof);
//
//
//   return (
//     <group ref={ref} {...props} dispose={null}>
//        <mesh geometry={nodes.Roof.children[0].geometry} scale={50}>
//         <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
//           <div className="annotation">
//             House <span style={{ fontSize: '1.5em' }}>🥲</span>
//           </div>
//         </Html>
//         <meshBasicMaterial color={"#ffffff"} />
//       </mesh>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Roof.children[0].geometry}
//       >
//         <meshStandardMaterial {...propsRoof} />
//       </mesh>
//     </group>
//   )
// }
