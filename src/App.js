import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'
import House from './components/House'
import { Col, Container, Row } from 'react-bootstrap'
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions
} from "react-floating-button-menu";
import { useState } from 'react'
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const state = proxy({
  current: null,
  items: {
    Texte: '#D89B79',
    Light1: '#ffffff',
    Light2: '#ffffff'
  }
})

function Picker() {
  const snap = useSnapshot(state)

  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
      <HexColorPicker className='picker' color={snap.items[snap.current]}
                      onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  document.body.classList.add('home-bg');
  return (
    <>
      <main >
        <Container>
          <Row>
            <Col sm={6} className=''>
              <div className='overlay'>

                <p className='just scroll c-scroll'>
                  <h2 className='just'>LES OISEAUX DE PASSAGE</h2>
                  L’épicerie de Tomek était la dernière maison du village. C’était une petite
                  boutique toute simple avec, au-dessus de la vitrine, l’inscription ÉPICERIE
                  peinte en lettres bleues. Quand on poussait la porte, une clochette tintait
                  joyeusement, ding ding, et Tomek se tenait devant vous, souriant dans son
                  tablier gris d’épicier. C’était un garçon aux yeux rêveurs, assez grand pour
                  son âge, plutôt osseux. Il ne servirait à rien de faire le détail des articles que
                  Tomek vendait dans son épicerie. Un livre entier n’y suffirait pas, alors
                  qu’un seul mot convient pour le dire, et ce mot c’est justement : « tout ».
                  Tomek vendait « tout ». Entendons par là des choses utiles et raisonnables,
                  comme les tapettes à mouches et l’élixir « Contrecoups » de l’abbé
                  Perdrigeon, mais aussi et bien sûr des objets indispensables comme les
                  bouillottes en caoutchouc et les couteaux à ours.<br/>
                  Comme Tomek vivait dans son magasin, ou plutôt dans l’arrièreboutique de son magasin, il ne fermait
                  jamais. Il y avait bien une petite
                  pancarte accrochée à l’entrée, mais elle était toujours tournée du même
                  côté, celui qui indiquait OUVERT. Ce n’était pas pour autant un défilé
                  continuel. Non. Les gens du village étaient respectueux et se gardaient bien
                  de déranger à toute heure. Ils savaient seulement qu’en cas de besoin
                  urgent, Tomek les dépannerait avec gentillesse, même au milieu de la nuit.
                  Il ne faut pas croire non plus que Tomek ne quittait jamais sa boutique. Bien
                  au contraire, il lui arrivait souvent d’aller se dégourdir les jambes ou même
                  de s’absenter pour une demi-journée. Mais dans ce cas-là, le magasin restait
                  ouvert et les clients se servaient tout seuls. À son retour, Tomek trouvait un
                  petit mot sur le comptoir: « Pris un rouleau de ficelle à saucisson. Line »
                  accompagné de l’argent du règlement, ou bien : « Pris mon tabac. Paierai
                  demain. Jak. » <br/>
                  Ainsi tout était pour le mieux dans le meilleur des mondes, comme on
                  dit, et cela aurait pu durer des années et même des siècles sans qu’il arrivât
                  rien de particulier. <br/>
                  Seulement voilà, Tomek avait un secret. Oh, ce n’était rien de mal ni de
                  tellement extraordinaire. Cela lui était venu avec tant de lenteur qu’il ne
                  s’était aperçu de rien. Exactement comme les cheveux qui poussent sans
                  qu’on s’en rende compte: un beau jour ils sont trop longs et voilà. Un beau
                  jour donc, Tomek se retrouva avec cette pensée qui avait poussé à
                  l’intérieur de sa tête au lieu de pousser dessus, et qu’on pouvait résumer
                  ainsi: il s’ennuyait. Mieux que cela, il s’ennuyait… beaucoup. Il avait envie
                  de partir, de voir le monde. <br/>
                  Depuis la petite fenêtre de son arrière-boutique, il regardait souvent la
                  vaste plaine où le blé de printemps se balançait avec grâce, semblable aux
                  vagues de la mer. Et seul le ding ding de la sonnette à la porte de la
                  boutique pouvait l’arracher à sa rêverie. D’autres fois, très tôt, il allait
                  marcher sur les chemins qui se perdaient dans la campagne, dans le bleu si
                  tendre des champs de lin au petit jour, et cela lui arrachait le cœur de devoir
                  rentrer à la maison.<br/>
                  Mais c’est à l’automne surtout, au moment où les oiseaux de passage
                  traversaient le ciel, dans leur grand silence, que Tomek ressentait avec le
                  plus de violence le désir de s’en aller. Les larmes lui en venaient aux yeux
                  tandis qu’il regardait les oies sauvages disparaître à grands coups d’aile à
                  l’horizon.<br/>
                  Malheureusement, on ne part pas comme cela quand on s’appelle Tomek
                  et qu’on est responsable de l’unique épicerie du village, cette épicerie que
                  son père avait tenue avant lui, et son grand-père avant son père. Qu’auraient
                  pensé les gens ? Qu’il les abandonnait ? Qu’il n’était pas bien avec eux ?
                  Qu’il ne se plaisait plus au village ? En tout cas ils n’auraient pas compris.
                  Cela les aurait rendus tristes. Or, Tomek ne supportait pas de faire de la
                  peine à autrui. Il résolut donc de rester et de garder son secret pour lui. Il
                  fallait être patient, se disait-il, l’ennui finirait bien par s’en aller comme il
                  était venu, lentement, avec le temps, sans qu’il s’en aperçoive…
                  Hélas, ce fut tout le contraire qui arriva. Sans compter qu’un événement
                  considérable allait bientôt réduire à néant tous les efforts que Tomek faisait
                  pour être raisonnable. <br/>

                </p>
              </div>
            </Col>
            <Col sm={6}>
              <Canvas className='canvas' dpr={[1, 2]} camera={{ position: [0, 0, 30], fov: 100 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                {/* <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}> */}
                <House state={state} />
                <OrbitControls
                  maxAzimuthAngle={Math.PI}
                  maxPolarAngle={Math.PI}
                  minAzimuthAngle={-Math.PI / 2}
                  minPolarAngle={0}
                  enableZoom={false}
                  enablePan={true}
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
            </Col>
          </Row>
          <FloatingMenu
            slideSpeed={500}
            isOpen={isOpen}
            spacing={20}
            direction={Directions.Up}
            className="menu-btn"
          >
            <MainButton
              isOpen={isOpen}
              iconResting={<MdAdd style={{ fontSize: 20 }} />}
              iconActive={<MdClose style={{ fontSize: 20 }} />}
              background="white"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              size={56}
            />
            <ChildButton
              icon={<ChevronLeftIcon style={{ fontSize: 20 }} />}
              background="grey"
              size={40}
            />
            <ChildButton
              icon={<ChevronRightIcon style={{ fontSize: 20 }} />}
              background="white"
              onClick={()=>window.location.href = "chapitre-2"}
              size={40}
            />
            <ChildButton
              icon={<HomeIcon style={{ fontSize: 20 }} />}
              background="white"
              onClick={()=>window.location.href = "/"}
              size={40}
            />
          </FloatingMenu>
        </Container>
      </main>
    </>
  )
}
