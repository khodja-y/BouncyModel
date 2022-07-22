
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
      <main className="candy-bg">
        <Container>
          <Row>
            <Col sm={6} className=''>
              <div className='overlay'>
                <h2 className='just'>LES OISEAUX DE PASSAGE</h2>
                <p className='just scroll c-scroll'>
                  C’était la fin de l’été, un soir qu’il avait laissé la porte de sa boutique
                  ouverte pour profiter de la fraîcheur de la nuit. Il était occupé à faire ses
                  comptes sur son grand cahier spécial, à la lumière d’une lampe à huile, et il
                  suçotait, rêveur, son crayon à papier, quand une voix claire le fit presque
                  sursauter:<br/>
                  — Est-ce que vous vendez des sucres d’orge?<br/>
                  Il leva la tête et vit la plus jolie personne qu’on puisse imaginer. C’était
                  une jeune fille de douze ans environ, brune comme on peut l’être, en
                  sandales et dans une robe en piteux état. À sa ceinture pendait une gourde
                  de cuir. Elle était entrée sans bruit par la porte ouverte, si bien qu’on aurait
                  dit une apparition, et maintenant elle fixait Tomek de ses yeux noirs et
                  tristes:<br/>
                  — Est-ce que vous vendez des sucres d’orge?<br/>
                  Alors Tomek fit deux choses en même temps. La première, ce fut de
                  répondre:<br/>
                  — Oui, je vends des sucres d’orge.<br/>
                  Et la seconde chose que fit Tomek, lui qui de toute sa vie ne s’était pas
                  retourné trois fois sur une fille, ce fut de tomber amoureux de ce petit brin
                  de femme, d’en tomber amoureux instantanément, complètement et
                  définitivement.<br/>
                  Il prit un sucre d’orge dans un bocal et le lui tendit. Elle le cacha
                  aussitôt dans une poche de sa robe. Mais elle ne semblait pas vouloir s’en
                  aller. Elle restait là à regarder les rayons et les rangées de petits tiroirs qui
                  occupaient un mur tout entier.<br/>
                  — Qu’ayez-vous dans tous ces petits tiroirs ?<br/>
                  — J’ai… tout, répondit Tomek. Enfin tout le nécessaire…
                  — Des élastiques à chapeau?<br/>
                  — Oui, bien sûr.<br/>
                  Tomek escalada son échelle et ouvrit un tiroir tout en haut:<br/>
                  — Voilà.<br/>
                  — Et des cartes à jouer ?<br/>
                  Il redescendit et ouvrit un autre tiroir:<br/>
                  — Voilà.<br/>
                  Elle hésita, puis un sourire timide se forma sur ses lèvres. Cela l’amusait
                  visiblement:<br/>
                  — Et des images… de kangourou?<br/>
                  Tomek dut réfléchir quelques secondes puis il se précipita vers un tiroir
                  sur la gauche:<br/>
                  — Voilà.<br/>
                  Cette fois, les yeux sombres de la petite s’éclairèrent tout à fait. C’était
                  si charmant de la voir heureuse que le cœur de Tomek se mit à faire des
                  bonds dans sa poitrine.<br/>
                  — Et du sable du désert? Du sable qui serait encore chaud?<br/>
                  Tomek gravit encore une fois son échelle et prit dans un tiroir une petite
                  fiole de sable orange. Il redescendit, fit couler le sable sur son cahier spécial
                  pour que la jeune fille puisse le toucher. Elle le caressa avec le dos de la
                  main puis promena dessus le bout de ses doigts agiles.<br/>
                  — Il est tout chaud…<br/>
                  Comme elle s’était approchée très près du comptoir, Tomek sentit sa
                  chaleur à elle, et plus que sur le sable chaud, c’est sur son bras doré qu’il
                  aurait voulu poser sa main. Elle le devina sans doute et reprit:
                  — Il est aussi chaud que mon bras…<br/>
                  Et de sa main libre elle prit la main de Tomek et la posa sur son bras.
                  Les reflets de la lampe à huile jouaient sur son visage. Cela dura quelques
                  secondes, au bout desquelles elle se dégagea en un mouvement léger,
                  virevolta dans la boutique puis pointa enfin son doigt au hasard vers l’un
                  des trois cents petits tiroirs:<br/>
                  — Et dans celui-ci, qu’avez-vous dans celui-ci ?<br/>
                  — Oh, ce ne sont que des dés à coudre… répondit Tomek en versant le
                  sable dans la fiole grâce à un entonnoir.<br/>
                  — Et dans celui-ci ?<br/>
                  — Des dents de Sainte Vierge… ce sont des coquillages assez rares…
                  — Ah, fit la petite, déçue. Et dans celui-là ?<br/>
                  — Des graines de séquoia… Je peux vous en donner quelques-unes si
                  vous voulez, je vous les offre, mais ne les semez pas n’importe où, car les
                  séquoias peuvent devenir très grands…<br/>
                  Tomek avait cru lui faire plaisir en disant cela. Mais ce fut tout le
                  contraire. Elle redevint grave et songeuse. À nouveau ce fut le silence.
                  Tomek n’osait plus rien dire. Un chat fit mine d’entrer par la porte restée
                  ouverte. Il s’avança avec lenteur, mais Tomek le chassa d’un geste brusque
                  de la main. Il ne voulait pas être dérangé.<br/>
                  — Ainsi vous avez tout dans votre magasin? Vraiment tout? dit la jeune
                  fille en levant les yeux vers lui.<br/>
                  Tomek se trouva un peu embarrassé.<br/>
                  — Oui… enfin tout le nécessaire… répondit-il avec ce qu’il fallait de
                  modestie.<br/>
                  — Alors, dit la petite voix fragile et hésitante, mais soudain pleine d’un
                  fol espoir, sembla-t-il à Tomek, alors vous aurez peut-être… de l’eau de la
                  rivière Qjar?<br/>
                  Tomek ignorait ce qu’était cette eau. Il ignorait aussi où pouvait se
                  trouver cette rivière Qjar. La jeune fille le vit bien, une ombre passa dans
                  ses yeux et elle répondit sans qu’il eût à le demander:<br/>
                  — C’est l’eau qui empêche de mourir, vous ne le saviez pas?<br/>
                  Tomek secoua doucement la tête, non, il ne le savait pas.<br/>
                  — J’en ai besoin… fit la petite.<br/>
                  Puis elle tapota la gourde qui pendait à sa ceinture et ajouta :<br/>
                  — Je la trouverai et je la mettrai là…<br/>
                  Tomek aurait bien voulu qu’elle lui en dise plus, mais déjà elle
                  s’avançait vers lui en dépliant un mouchoir dans lequel elle tenait quelques
                  pièces de monnaie.<br/>
                  — Je vous dois combien pour le sucre d’orge?<br/>
                  — Un sou… s’entendit murmurer Tomek.<br/>
                  La jeune fille posa la pièce sur le comptoir, regarda encore une fois les
                  trois cents petits tiroirs et fit à Tomek un dernier sourire.<br/>
                  — Au revoir.<br/>
                  Puis elle sortit de la boutique.<br/>
                  — Au revoir… bredouilla Tomek.<br/>
                  La lampe à huile faiblissait. Il reprit place sur sa chaise, derrière le
                  comptoir. Sur son grand cahier spécial encore ouvert, il y avait le sou de
                  l’inconnue et quelques grains de sable orange.<br/>
                  <h2 className='just'>Grand-Père Hicham</h2>
                    Le lendemain et les jours qui suivirent, Tomek s’en voulut terriblement
                    d’avoir accepté l’argent de sa visiteuse. Elle ne devait pas en avoir
                    beaucoup. Il se surprit plusieurs fois à parler tout seul. Il disait par exemple : <br/>
                    — Rien du tout, vous ne me devez rien du tout… <br/>
                    Ou bien : <br/>
                    — Je vous en prie… Pour un sucre d’orge… <br/>
                    Mais Tomek pouvait bien inventer toutes les gentillesses du monde,
                    c’était trop tard. Elle avait payé et elle était partie, le laissant à ses regrets.
                    Ce qui le tracassait aussi, c’était cette eau dont elle avait parlé, cette rivière
                    au nom étrange qu’il n’arrivait pas à retrouver. Et puis qui était-elle, cette
                    drôle de fille ? D’où venait-elle ? Était-elle toute seule ? Est-ce que
                    quelqu’un l’attendait près de la boutique ? Et où était-elle allée ensuite ?
                    Mille questions sans réponses… Il tâcha d’en savoir plus par les clients. Il
                    les questionnait sans en avoir l’air : <br/>
                    — Alors, rien de neuf au village ? <br/>
                    Ou bien : <br/>
                    — Pas beaucoup de passage, hein ? <br/>
                    Dans l’espoir que l’un d’eux finirait par dire : <br/>
                    — Non, pas beaucoup de passage, juste cette fillette l’autre soir…<br/>
                    Mais personne n’y fit la moindre allusion. À croire que Tomek était le
                    seul à l’avoir vue. Quelques jours passèrent ainsi, puis un après-midi Tomek
                    n’y tint plus. L’idée de ne jamais revoir la jeune fille lui sembla
                    insupportable. Et de ne pouvoir parler d’elle à quiconque lui était bien cruel
                    aussi. Il laissa donc tout en plan dans la boutique, fourra dans sa poche une
                    barre de pâte de fruits et courut à grandes enjambées à l’autre bout du
                    village, où se trouvait le vieil Icham.<br/>
                    Le vieil Icham était écrivain public, c’est-à-dire qu’il écrivait pour ceux
                    qui ne savaient pas le faire. Il lisait aussi, bien sûr. Quand Tomek arriva, il
                    était justement en train de déchiffrer une lettre pour une petite dame qui
                    l’écoutait attentivement. Par discrétion, Tomek se tint à distance le temps
                    qu’ils en aient terminé, puis il s’avança vers son ami.<br/>
                    — Bonjour, grand-père, lança-t-il en portant la main à sa poitrine.<br/>
                    — Bonjour, mon fils, répondit Icham en lui tendant ses deux mains
                    ouvertes.<br/>
                    Ils n’étaient ni le grand-père ni le fils l’un de l’autre, mais comme Icham
                    vivait seul et que Tomek était orphelin, ils s’étaient toujours appelés comme
                    cela. Ils s’aimaient beaucoup.<br/>
                    L’été, Icham travaillait dans une minuscule échoppe adossée au mur de
                    la rue. Il s’y tenait assis en tailleur, au milieu des livres. Pour le rejoindre, il
                    fallait grimper trois marches de bois et s’asseoir par terre. Aussi ses clients
                    préféraient-ils le plus souvent rester debout dans la rue pour dicter leurs
                    lettres ou pour écouter Icham les lire.<br/>
                    — Monte, mon fils.<br/>
                    Tomek franchit les trois marches d’un bond et s’assit lui aussi en
                    tailleur, au côté du vieil homme.<br/>
                    — Est-ce que tu vas bien, grand-père ? commença Tomek en tirant de sa
                    poche la pâte de fruits. Tu as beaucoup de travail ?<br/>
                    — Merci, mon garçon, répondit Icham en prenant la friandise. Je n’ai
                    jamais de travail, je te l’ai déjà dit. Jamais de repos non plus. Tout ça, c’est
                    juste la vie qui passe…<br/>
                    Tomek s’amusait beaucoup de ces phrases un peu énigmatiques. On
                    aurait pu prendre Icham pour un grand philosophe s’il n’avait pas été aussi
                    gourmand. Il adorait les sucreries, et il était capable de bouder comme un
                    enfant de trois ans quand Tomek oubliait de lui apporter un caramel mou,
                    un nougat tendre, une boule de gomme ou un bâton de réglisse. Sa
                    préférence allait aux petits pains d’épice en forme de coeur, mais tout lui
                    était bon pourvu que ce ne soit pas trop dur à mâcher. À cause des dents,
                    bien entendu.<br/>
                    Tomek ne voulait pas s’absenter trop longtemps, et comme la curiosité
                    le poussait, il en vint immédiatement à ce qui l’intéressait :<br/>
                    — Dis-moi, grand-père Icham, as-tu déjà entendu parler de la rivière
                    Tchar, ou Djar… ?<br/>
                    Le vieil homme, qui mâchouillait déjà sa barre de pâte de fruits, prit le
                    temps d’y réfléchir, puis il répondit lentement :<br/>
                    — Je connais une rivière… Qjar.<br/>
                    — C’est ça ! s’exclama Tomek. Qjar ! La rivière Qjar !<br/>
                    Et en le répétant, il lui sembla entendre la jeune fille le dire : « … de
                    l’eau de la rivière Qjar. »<br/>
                    — Celle qui coule à l’envers… continua Icham.<br/>
                    — Celle qui… quoi ? bredouilla Tomek, qui n’avait jamais entendu
                    parler d’une chose pareille.<br/>
                    — Qui coule à l’envers, articula Icham. La rivière Qjar coule à l’envers.<br/>
                    — À l’envers ? Qu’est-ce que tu veux dire ? fit Tomek, les yeux
                    écarquillés.<br/>
                    — Je veux dire que l’eau de cette rivière monte au lieu de descendre,
                    mon petit Tomek. Ça t’en bouche un coin, ça !<br/>
                    Icham éclata de rire en voyant la tête que faisait son jeune ami, puis il
                    eut pitié de lui et commença à expliquer :<br/>
                    — Cette rivière prend sa source dans l’océan, tu comprends ? Au lieu de
                    s’y jeter, elle en sort. Un peu comme si elle aspirait l’eau de la mer. À son
                    début, elle est large comme un fleuve. On dit qu’à cet endroit-là des arbres
                    étranges poussent sur ses rives. Des arbres qui s’étirent le matin et poussent
                    des soupirs le soir. Et il y aurait là des variétés d’animaux tout à fait
                    inconnues ailleurs.<br/>
                    — De quelle sorte par exemple ? voulut savoir Tomek. Des animaux
                    dangereux ?<br/>
                    Mais le vieil Icham secoua la tête. Il ne savait pas.<br/>
                    — En tout cas, continua-t-il, le plus étonnant est bien cette eau qui ne
                    coule pas dans la bonne direction…<br/>
                    — Mais alors, l’interrompit Tomek, qui avait l’esprit curieux, si cette
                    rivière, enfin ce fleuve, aspire l’eau de la mer, le niveau de la mer devrait
                    baisser…<br/>
                    — Il devrait, mais il ne le fait pas à cause des dizaines d’autres fleuves
                    qui se déversent dans l’océan en même temps, et dans le bon sens, eux.<br/>
                    — Évidemment, dut reconnaître Tomek, évidemment.<br/>
                    — Ensuite, reprit Icham, la rivière Qjar remonte à l’intérieur des terres.
                    Sur des centaines de kilomètres, dit-on. Elle devient de plus en plus étroite.
                    Elle perd de l’eau au lieu d’en gagner comme toutes les rivières du monde.<br/>
                    — Mais où cette eau s’en va-t-elle ? demanda Tomek. Il faut bien qu’elle
                    aille quelque part !<br/>
                    Une fois de plus, le vieil Icham dut avouer son ignorance :<br/>
                    — On ne sait pas où cette eau s’en va. Il n’y a pas d’affluents. C’est un
                    grand mystère. Est-ce que tu m’as aussi apporté un morceau de nougat ?<br/>
                    Tomek mit quelques secondes à réagir. Il était à mille lieues de penser à
                    du nougat. Il fouilla dans ses poches en vain.<br/>
                    — Non, grand-père, mais je t’en apporterai tout à l’heure si tu veux.
                    C’est promis. Parle-moi encore de cette rivière, s’il te plaît.
                    Le vieil Icham, sans doute déçu, grommela quelques mots
                    incompréhensibles puis se décida à poursuivre.<br/>
                    — Quoi qu’il en soit, la rivière finit par arriver au pied d’une montagne
                    qui s’appelle la Montagne Sacrée.<br/>
                    — La Montagne Sacrée ? fit Tomek, que ce nom-là impressionnait.<br/>
                    — Oui. Ceux qui ont approché cette montagne disent qu’on n’a jamais
                    vu quelque chose d’aussi imposant. Ses sommets dépassent les nuages.
                    Mais figure-toi que notre petite rivière ne se laisse pas démonter comme
                    cela. Elle l’escalade tout simplement. Et plus elle monte, plus elle se
                    rétrécit. Elle redevient torrent. Puis simple ruisseau. Tout en coulant à
                    l’envers, bien sûr, ne l’oublie jamais. Et quand elle arrive tout en haut, elle
                    n’est plus qu’un mince filet d’eau pas plus gros que mon pouce. Et là, elle
                    s’immobilise enfin et cela forme dans le creux d’une pierre un minuscule
                    bassin de la taille d’un demi-lavabo. Et cette eau est d’une pureté
                    incroyable. Et elle est magique, Tomek…<br/>
                    — Magique ? reprit le garçon.<br/>
                    — Oui. Elle empêche de mourir…<br/>
                    De nouveau, Tomek entendit la voix claire de la jeune fille : « Elle
                    empêche de mourir, vous ne le saviez pas ? » Icham avait utilisé exactement
                    les mêmes mots.<br/>
                    — Seulement, poursuivit le vieil homme, personne n’en a jamais
                    rapporté, mon garçon, personne…<br/>
                    — Mais pourtant, s’exclama Tomek, il suffirait de suivre cette rivière
                    jusqu’à sa source, enfin jusque là-haut, de remplir une gourde de cette
                    fameuse eau et de redescendre !<br/>
                    — Il suffirait… Mais il se trouve que personne n’est jamais arrivé
                    jusque là-haut. Et si quelqu’un y est arrivé, il n’a pas réussi à redescendre et
                    on n’en a rien su. Et si quelqu’un est arrivé à redescendre, il a perdu sa
                    provision d’eau en route. Et puis il y a quelque chose qui rend l’entreprise
                    encore plus difficile…<br/>
                    — Quoi donc, grand-père ?<br/>
                    — Eh bien, c’est que cette rivière n’existe sans doute pas et cette
                    montagne non plus.<br/>
                    Il y eut un long silence et ce fut le vieil Icham qui finit par le rompre :<br/>
                    — Au fait, mon garçon, qui t’a parlé de cette rivière ?
                    Tomek se rappela soudain qu’il était d’abord venu pour raconter à son
                    vieil ami la visite de la jeune fille. Maintenant il allait enfin pouvoir confier
                    son secret, en savoir plus peut-être.<br/>
                    Il prit une profonde inspiration et s’efforça d’expliquer en détail tout ce
                    qui était arrivé ce soir-là dans sa boutique. Il n’oublia rien, ni les images de
                    kangourous, ni le sable orange dans la petite fiole, ni le chat qui avait voulu
                    entrer. Il évita seulement d’évoquer sa main sur le bras de la jeune fille.
                    Cela, il n’était pas utile de le crier sur tous les toits.<br/>
                    Le vieil Icham le laissa parler jusqu’au bout, puis il le regarda avec un
                    sourire que Tomek ne lui avait jamais vu, un sourire à la fois amusé et plein
                    de tendresse :<br/>
                    — Dis-moi, mon fils, tu ne serais pas amoureux, toi ?<br/>
                    Tomek rougit jusqu’aux oreilles. Il était furieux contre lui-même et
                    contre Icham qui se moquait de lui. Celui-là, il pourrait toujours courir pour
                    le nougat. Il s’apprêtait à partir quand le vieil homme le rattrapa par la
                    manche et le força à se rasseoir.<br/>
                    — Attends un peu, voyons…<br/>
                    Tomek se laissa faire. Il ne parvenait jamais à être en colère bien
                    longtemps contre Icham.<br/>
                    — Elle avait une gourde, as-tu dit ?<br/>
                    — Oui, elle en avait une. Elle a dit qu’elle trouverait l’eau et qu’elle la
                    mettrait dedans.<br/>
                    Cette fois Icham ne souriait plus du tout.<br/>
                    — Vois-tu, Tomek, je ne sais pas si cette rivière existe ou non, mais je
                    sais que les hommes la cherchent depuis des milliers d’années et que
                    personne, je te dis bien personne, n’est jamais revenu avec la moindre
                    goutte de cette fameuse eau. Des expéditions entières d’hommes dans la
                    force de l’âge, équipés des pieds à la tête et bien décidés à réussir, ont péri
                    avant seulement d’apercevoir la Montagne Sacrée. Alors ta petite
                    bohémienne peut bien tapoter sur sa gourde et dire qu’elle la remplira, c’est
                    aussi impossible que de faire pousser du blé sur le dos de ma main.<br/>
                    — Mais alors, murmura Tomek au bout d’un moment, que va-t-il lui
                    arriver ?<br/>
                    Icham lui sourit :<br/>
                    — Je crois que tu devrais oublier tout ça, mon garçon. Penser à autre
                    chose. Il y a assez de jolies filles dans le village, non ? Allez, file. Tu as
                    peut-être des clients qui t’attendent…<br/>
                    — Tu as sans doute raison, grand-père, fit Tomek en hochant tristement
                    la tête.<br/>
                    Puis il se leva, pressa les mains du vieil Icham et s’en retourna à pas
                    lents vers sa boutique.<br/>
                </p>

              </div>
            </Col>
            <Col sm={6}>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 10, 5], fov: 75 }}>
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
