
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { a } from '@react-spring/web'
// import { Button, Alert } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

import Candy from './components/Candy'
import Overlay from './components/Overlay.js'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ChildButton, Directions, FloatingMenu, MainButton } from 'react-floating-button-menu'
import MdAdd from '@material-ui/icons/Add'
import MdClose from '@material-ui/icons/Clear'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main>
        <Container>
          <Row>
            <Col sm={6} className=''>
              <div className='overlay'>
                <h2 className='just'>LES OISEAUX DE PASSAGE</h2>
                <p className='just scroll'>
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
                  bouillottes en caoutchouc et les couteaux à ours.
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
                  demain. Jak. »
                  Ainsi tout était pour le mieux dans le meilleur des mondes, comme on
                  dit, et cela aurait pu durer des années et même des siècles sans qu’il arrivât
                  rien de particulier.
                  Seulement voilà, Tomek avait un secret. Oh, ce n’était rien de mal ni de
                  tellement extraordinaire. Cela lui était venu avec tant de lenteur qu’il ne
                  s’était aperçu de rien. Exactement comme les cheveux qui poussent sans
                  qu’on s’en rende compte: un beau jour ils sont trop longs et voilà. Un beau
                  jour donc, Tomek se retrouva avec cette pensée qui avait poussé à
                  l’intérieur de sa tête au lieu de pousser dessus, et qu’on pouvait résumer
                  ainsi: il s’ennuyait. Mieux que cela, il s’ennuyait… beaucoup. Il avait envie
                  de partir, de voir le monde.
                  Depuis la petite fenêtre de son arrière-boutique, il regardait souvent la
                  vaste plaine où le blé de printemps se balançait avec grâce, semblable aux
                  vagues de la mer. Et seul le ding ding de la sonnette à la porte de la
                  boutique pouvait l’arracher à sa rêverie. D’autres fois, très tôt, il allait
                  marcher sur les chemins qui se perdaient dans la campagne, dans le bleu si
                  tendre des champs de lin au petit jour, et cela lui arrachait le cœur de devoir
                  rentrer à la maison.
                  Mais c’est à l’automne surtout, au moment où les oiseaux de passage
                  traversaient le ciel, dans leur grand silence, que Tomek ressentait avec le
                  plus de violence le désir de s’en aller. Les larmes lui en venaient aux yeux
                  tandis qu’il regardait les oies sauvages disparaître à grands coups d’aile à
                  l’horizon.
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
                  pour être raisonnable.
                  C’était la fin de l’été, un soir qu’il avait laissé la porte de sa boutique
                  ouverte pour profiter de la fraîcheur de la nuit. Il était occupé à faire ses
                  comptes sur son grand cahier spécial, à la lumière d’une lampe à huile, et il
                  suçotait, rêveur, son crayon à papier, quand une voix claire le fit presque
                  sursauter:
                  — Est-ce que vous vendez des sucres d’orge?
                  Il leva la tête et vit la plus jolie personne qu’on puisse imaginer. C’était
                  une jeune fille de douze ans environ, brune comme on peut l’être, en
                  sandales et dans une robe en piteux état. À sa ceinture pendait une gourde
                  de cuir. Elle était entrée sans bruit par la porte ouverte, si bien qu’on aurait
                  dit une apparition, et maintenant elle fixait Tomek de ses yeux noirs et
                  tristes:
                  — Est-ce que vous vendez des sucres d’orge?
                  Alors Tomek fit deux choses en même temps. La première, ce fut de
                  répondre:
                  — Oui, je vends des sucres d’orge.
                  Et la seconde chose que fit Tomek, lui qui de toute sa vie ne s’était pas
                  retourné trois fois sur une fille, ce fut de tomber amoureux de ce petit brin
                  de femme, d’en tomber amoureux instantanément, complètement et
                  définitivement.
                  Il prit un sucre d’orge dans un bocal et le lui tendit. Elle le cacha
                  aussitôt dans une poche de sa robe. Mais elle ne semblait pas vouloir s’en
                  aller. Elle restait là à regarder les rayons et les rangées de petits tiroirs qui
                  occupaient un mur tout entier.
                  — Qu’ayez-vous dans tous ces petits tiroirs ?
                  — J’ai… tout, répondit Tomek. Enfin tout le nécessaire…
                  — Des élastiques à chapeau?
                  — Oui, bien sûr.
                  Tomek escalada son échelle et ouvrit un tiroir tout en haut:
                  — Voilà.
                  — Et des cartes à jouer ?
                  Il redescendit et ouvrit un autre tiroir:
                  — Voilà.
                  Elle hésita, puis un sourire timide se forma sur ses lèvres. Cela l’amusait
                  visiblement:
                  — Et des images… de kangourou?
                  Tomek dut réfléchir quelques secondes puis il se précipita vers un tiroir
                  sur la gauche:
                  — Voilà.
                  Cette fois, les yeux sombres de la petite s’éclairèrent tout à fait. C’était
                  si charmant de la voir heureuse que le cœur de Tomek se mit à faire des
                  bonds dans sa poitrine.
                  — Et du sable du désert? Du sable qui serait encore chaud?
                  Tomek gravit encore une fois son échelle et prit dans un tiroir une petite
                  fiole de sable orange. Il redescendit, fit couler le sable sur son cahier spécial
                  pour que la jeune fille puisse le toucher. Elle le caressa avec le dos de la
                  main puis promena dessus le bout de ses doigts agiles.
                  — Il est tout chaud…
                  Comme elle s’était approchée très près du comptoir, Tomek sentit sa
                  chaleur à elle, et plus que sur le sable chaud, c’est sur son bras doré qu’il
                  aurait voulu poser sa main. Elle le devina sans doute et reprit:
                  — Il est aussi chaud que mon bras…
                  Et de sa main libre elle prit la main de Tomek et la posa sur son bras.
                  Les reflets de la lampe à huile jouaient sur son visage. Cela dura quelques
                  secondes, au bout desquelles elle se dégagea en un mouvement léger,
                  virevolta dans la boutique puis pointa enfin son doigt au hasard vers l’un
                  des trois cents petits tiroirs:
                  — Et dans celui-ci, qu’avez-vous dans celui-ci ?
                  — Oh, ce ne sont que des dés à coudre… répondit Tomek en versant le
                  sable dans la fiole grâce à un entonnoir.
                  — Et dans celui-ci ?
                  — Des dents de Sainte Vierge… ce sont des coquillages assez rares…
                  — Ah, fit la petite, déçue. Et dans celui-là ?
                  — Des graines de séquoia… Je peux vous en donner quelques-unes si
                  vous voulez, je vous les offre, mais ne les semez pas n’importe où, car les
                  séquoias peuvent devenir très grands…
                  Tomek avait cru lui faire plaisir en disant cela. Mais ce fut tout le
                  contraire. Elle redevint grave et songeuse. À nouveau ce fut le silence.
                  Tomek n’osait plus rien dire. Un chat fit mine d’entrer par la porte restée
                  ouverte. Il s’avança avec lenteur, mais Tomek le chassa d’un geste brusque
                  de la main. Il ne voulait pas être dérangé.
                  — Ainsi vous avez tout dans votre magasin? Vraiment tout? dit la jeune
                  fille en levant les yeux vers lui.
                  Tomek se trouva un peu embarrassé.
                  — Oui… enfin tout le nécessaire… répondit-il avec ce qu’il fallait de
                  modestie.
                  — Alors, dit la petite voix fragile et hésitante, mais soudain pleine d’un
                  fol espoir, sembla-t-il à Tomek, alors vous aurez peut-être… de l’eau de la
                  rivière Qjar?
                  Tomek ignorait ce qu’était cette eau. Il ignorait aussi où pouvait se
                  trouver cette rivière Qjar. La jeune fille le vit bien, une ombre passa dans
                  ses yeux et elle répondit sans qu’il eût à le demander:
                  — C’est l’eau qui empêche de mourir, vous ne le saviez pas?
                  Tomek secoua doucement la tête, non, il ne le savait pas.
                  — J’en ai besoin… fit la petite.
                  Puis elle tapota la gourde qui pendait à sa ceinture et ajouta :
                  — Je la trouverai et je la mettrai là…
                  Tomek aurait bien voulu qu’elle lui en dise plus, mais déjà elle
                  s’avançait vers lui en dépliant un mouchoir dans lequel elle tenait quelques
                  pièces de monnaie.
                  — Je vous dois combien pour le sucre d’orge?
                  — Un sou… s’entendit murmurer Tomek.
                  La jeune fille posa la pièce sur le comptoir, regarda encore une fois les
                  trois cents petits tiroirs et fit à Tomek un dernier sourire.
                  — Au revoir.
                  Puis elle sortit de la boutique.
                  — Au revoir… bredouilla Tomek.
                  La lampe à huile faiblissait. Il reprit place sur sa chaise, derrière le
                  comptoir. Sur son grand cahier spécial encore ouvert, il y avait le sou de
                  l’inconnue et quelques grains de sable orange.
                </p>
              </div>
            </Col>
            <Col sm={6}>
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
              background="white"
              onClick={()=>window.location.href = "chapitre-1"}
              size={40}
            />
            <ChildButton
              icon={<ChevronRightIcon style={{ fontSize: 20 }} />}
              background="white"
              onClick={()=>window.location.href = "chapitre-3"}
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
