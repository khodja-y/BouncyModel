
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useHelper } from '@react-three/drei'
import { a } from '@react-spring/web'
// import { Button, Alert } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

import Wagon from './components/Wagon'
import Overlay from './components/Overlay.js'
import { useRef, useState } from 'react'
import * as THREE from 'three'
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col sm={6} className=''>
              <div className='overlay'>
                <h2 className='just'>Le départ</h2>
                <p className='just scroll'>
                  À compter de ce jour, l’idée de partir ne quitta plus Tomek. Une nuit, il fit
                  un rêve étrange où la jeune fille était poursuivie par des tigres qui couraient
                  sur leurs deux pattes de derrière, comme des hommes. Elle l’appelait :
                  « Tomek ! Tomek ! » Il la prenait par la main et tous deux fuyaient à toutes
                  jambes. Ils entendaient claquer derrière eux les mâchoires des hommestigres,
                  mais ils leur échappaient au dernier moment en se cachant sous un
                  rocher. Là, Tomek demandait à la petite comment elle pouvait bien
                  connaître son nom et elle répondait en haussant les épaules : « Mais tout le
                  monde te connaît, Tomek ! » Dans un autre rêve, il était penché au-dessus
                  du bassin d’eau pure, tout en haut de la Montagne Sacrée. Quelque chose
                  brillait au fond de l’eau, c’était le sou de la petite, celui avec lequel elle
                  avait payé le sucre d’orge. Il le prenait dans sa main et quand il se
                  retournait, elle était là, souriante, dans une robe de princesse. Et derrière
                  elle, domptés, les hommes-tigres montaient la garde.<br/>
                  Tomek fixa son départ un matin à l’aube. Ainsi on ne remarquerait pas
                  tout de suite son absence, et quand le vieil Icham trouverait sa lettre, dans
                  son échoppe, il serait déjà loin.<br/>
                  Les derniers jours, il eut bien du mal à cacher son agitation et il lui
                  sembla qu’on le regardait drôlement dans son épicerie. Comme s’il avait
                  porté sur lui la marque de son grand projet, comme si quelque chose le
                  trahissait, une lumière particulière dans les yeux, peut-être. Il s’interrogea
                  longuement sur les habits qu’il devait prendre. Ce n’était pas commode car
                  il n’avait aucune idée de ce qui l’attendait en chemin. Ferait-il froid ou
                  chaud dans ces contrées lointaines ? Fallait-il se munir de chaussettes de
                  laine, d’un épais pull-over et d’un passe-montagne ? Ou bien fallait-il au
                  contraire être le plus léger possible pour ne pas être embarrassé ? Il ne savait
                  pas non plus quel matériel emporter avec lui. Il chercha des réponses dans
                  les quelques livres d’aventures qu’il aimait, mais il n’en trouva guère. La
                  plupart des aventuriers ne possédaient rien et son préféré, Robinson Crusoé,
                  encore moins que les autres puisqu’il avait tout perdu au cours de son
                  naufrage. La jeune fille aux sucres d’orge n’avait rien non plus, semblait-il.
                  Aussi Tomek décida-t-il de suivre leur exemple et de n’emporter avec lui
                  que l’indispensable.<br/>
                  Il lui fallait d’abord une bonne couverture de laine car il devrait sans
                  doute dormir à la belle étoile et les nuits seraient vite fraîches.
                  Il avait également besoin d’une gourde. Or, il en avait justement une en
                  peau de loutre. Il la fixerait solidement à sa ceinture et elle lui servirait pour
                  son usage personnel. Et aussi pour rapporter l’eau de la rivière Qjar. Si
                  jamais il la trouvait, naturellement.<br/>
                  Il confectionna lui-même, dans un tissu très résistant, une pochette de
                  quelques centimètres, pas plus, dans laquelle il logea la pièce de la jeune
                  fille. Ainsi il pourrait la lui rendre dès qu’il la trouverait. Au cas bien sûr où
                  il la retrouverait… D’ici là, la pochette resterait cachée sous sa chemise,
                  attachée à son cou par un cordon, et bien malin qui irait la lui prendre.
                  Dans les poches de son pantalon, il mit seulement un couteau à ours, au
                  cas où il aurait à se défendre, et deux mouchoirs sur lesquels sa mère avait
                  autrefois brodé le T de son prénom à lui, Tomek.<br/>
                  Le dernier soir, après avoir vérifié que ses affaires étaient prêtes, il
                  s’assit derrière son comptoir, alluma sa lampe à huile et il écrivit pour
                  Icham la lettre que voici.<br/>
                  Cher grand-père Icham,<br/>
                  Tu lis toujours les lettres des autres mais celle-ci est pour toi et tu
                  n’auras pas besoin de la lire à haute voix. Je sais que je vais te faire de
                  la peine et je te demande de me pardonner. Je suis parti ce matin pour
                  la rivière Qjar. Si j’y arrive, je te rapporterai de son eau. J’espère
                  retrouver en chemin la jeune fille dont je t’ai parlé, puisqu’elle va làbas
                  aussi. Je te laisse la clef du magasin car là où je vais je risquerais
                  de la perdre. Je reviendrai le plus tôt possible.<br/>
                  À bientôt. Tomek.<br/>
                  Il eut du mal à retenir ses larmes en glissant la lettre dans l’enveloppe.
                  Icham avait bien vieilli ces derniers mois. Ses joues s’étaient creusées. Ses
                  mains ressemblaient à de vieux parchemins. Serait-il encore vivant quand
                  Tomek reviendrait ? Et d’ailleurs, reviendrait-il un jour ? Il n’en était pas sûr
                  du tout.<br/>
                  Il se coucha tout habillé sur son lit et dormit quelques heures d’un
                  sommeil sans rêves. Quand il se réveilla, il faisait encore nuit et un rayon de
                  lune éclairait faiblement l’arrière-boutique. Il sauta sur ses deux pieds, le
                  coeur plein de joie. Ainsi c’était aujourd’hui ! Il lui sembla qu’il avait
                  patienté une éternité et que le plus beau jour de sa vie était enfin arrivé. Un
                  immense espoir l’envahit. Il trouverait la rivière Qjar, c’était certain. Il
                  escaladerait la Montagne Sacrée. Il rapporterait l’eau. Il reverrait aussi la
                  jeune fille, bien sûr, et il lui rendrait son argent !<br/>
                  Il but un grand bol de chocolat et mangea de bon appétit plusieurs
                  tartines de beurre et de confiture. Ensuite il s’habilla chaudement, vérifia
                  que la gourde était bien fixée à sa ceinture, que la pochette était bien à sa
                  place sous sa chemise et qu’il avait dans ses poches tout ce qu’il avait prévu
                  d’y mettre. Il y ajouta au dernier moment un bon morceau de pain. Pour
                  finir, il roula bien serré sa couverture de laine et l’attacha sur ses épaules,
                  puis il alla à la porte de la boutique et là, il fit ce qu’il n’avait jamais fait de
                  toute sa vie : il retourna la petite pancarte qui y était accrochée. Désormais
                  elle indiquait : FERMÉ.<br/>
                  Tomek traversa les rues silencieuses du village jusqu’à l’échoppe du
                  vieil Icham. La toile était tirée. Il l’écarta sans bruit. Sur le pupitre
                  qu’Icham utilisait pour écrire, Tomek déposa la clef de l’épicerie,
                  l’enveloppe contenant sa lettre d’adieu et un gros morceau de nougat.
                  « Au revoir, grand-père… » murmura-t-il encore, comme si le vieil
                  homme pouvait l’entendre. Puis il revint sur ses pas et jeta en passant un
                  dernier coup d’oeil à sa boutique. Il s’engagea enfin à grandes enjambées
                  sur ce chemin qu’il avait pris si souvent déjà. Seulement, cette fois, il ne
                  ferait pas demi-tour. Cette fois, il s’en allait pour de bon. Il était un
                  aventurier. Comme pour le saluer, un vol d’oies sauvages dessina très haut
                  dans le ciel un triangle parfait. Elles allaient vers le sud, comme Tomek.
                  « J’arrive ! » leur lança-t-il, et sa poitrine se gonfla de bonheur.
                  En ces temps anciens, on avait de la géographie une idée assez vague.
                  On se doutait bien que la terre était ronde, mais beaucoup de gens n’en
                  étaient finalement pas si convaincus. « Si la terre est ronde, disaient-ils, estce
                  que ceux qui sont en dessous ont donc la tête en bas ? Et s’ils ne tombent
                  pas, est-ce parce qu’ils sont collés par leurs semelles ? » Il n’y avait ni
                  cartes précises comme aujourd’hui, ni panneaux indicateurs. On se dirigeait
                  en observant le soleil, la lune, les étoiles… Et on se perdait assez souvent, il
                  faut bien le reconnaître.<br/>
                  Tomek avait résolu d’aller toujours vers le sud, là où se trouvait l’océan,
                  d’après Icham. Une fois là-bas, pensait-il, il serait bien temps de choisir la
                  droite ou la gauche pour tâcher de trouver la rivière Qjar. Pendant une
                  bonne partie de la journée, il marcha dans des paysages qui lui étaient
                  familiers, de collines en plaines, s’arrêtant seulement pour manger un peu
                  de son pain, boire à sa gourde ou grappiller quelques fruits dans les arbres.
                  Mais au fur et à mesure que le soir venait, il lui sembla que l’horizon
                  s’élargissait et qu’il était barré au loin par une sorte d’interminable trait noir
                  et horizontal. Quand il fut à quelques centaines de mètres, il vit que c’était
                  une forêt, la plus grande qu’il eût jamais vue. L’idée de la traverser ne lui
                  plaisait qu’à moitié, mais la contourner représenterait certainement
                  plusieurs journées de marche, plusieurs semaines, qui sait ? À chaque jour
                  suffit sa peine, se dit finalement Tomek, qui commençait à ressentir la
                  fatigue. Il revint donc un peu en arrière, là où il avait remarqué un arbre
                  isolé qui formait une sorte de parapluie, et dont les branches atteignaient
                  presque le sol. Il se glissa dessous et s’enroula dans sa couverture. Dans un
                  demi-sommeil, il pensa encore qu’il serait bon pour lui de trouver un
                  compagnon de route, que les aventuriers en avaient souvent un, et qu’il se
                  sentirait moins seul ainsi. Mais sa fatigue était si grande qu’il s’endormit
                  avant même d’avoir eu le temps d’en éprouver du chagrin.<br/>
                  <h2 className='just'>La forêt de l'oubli</h2>
                    Quand Tomek se réveilla, il lui fallut quelques secondes pour réaliser
                    qu’il n’était pas dans son lit. Mais en voyant le feuillage qui tombait en
                    cloche autour de lui, tout lui revint d’un coup : son départ au petit jour, sa
                    longue marche dans la campagne, l’arbre isolé. Il était donc vraiment parti.
                    Ce n’était pas un rêve.<br/>
                    Un minuscule oiseau jaune et bleu, niché dans les feuilles, se mit à
                    siffloter tout près de lui et cela faisait : « Debout Tomek ! Debout Tomek ! »
                    Il ne put s’empêcher de rire. Il ressentait le même bonheur que le matin
                    précédent lorsqu’il avait quitté le village, le même sentiment de liberté, la
                    même allégresse. Si c’est cela voyager, se dit-il, alors je veux bien faire
                    trois fois le tour du monde !<br/>
                    Il allait sortir de sa cachette quand il perçut des bruits étranges à
                    l’extérieur. Cela ressemblait à du papier qu’on froisse ou peut-être à des
                    brindilles qu’on entasse. Puis plusieurs claquements secs, comme si
                    quelqu’un avait cassé des petites branches. Tomek, immobile, tendit
                    l’oreille. Au bout d’un moment, on souffla à plusieurs reprises. Pas de
                    doute, on allumait un feu. Tomek hésita encore à sortir. Et si cette personne
                    était dangereuse ? Si elle l’attaquait ? D’un autre côté, attendre qu’elle parte
                    risquait d’être très long car on ne fait pas du feu pour s’en aller dès qu’il a
                    pris. Il en était là de ses réflexions quand la voix se fit entendre.
                    Apparemment, c’était une femme. Elle chantonnait à voix basse :<br/>
                    Mon âââne, mon âââne,<br/>
                    A bien mal à sa patte…<br/>
                    Sans doute ne connaissait-elle pas la suite de la chanson car elle ne
                    faisait que reprendre cette première phrase. Elle s’affairait, on entendait
                    maintenant des bruits de casseroles, badaglang, et d’eau qui coulait dedans.
                    Et toujours la chanson : « Mon âne, mon âne… » Voilà quelqu’un de bonne
                    humeur, pensa Tomek. Il se dit aussi qu’une personne qui chantait « Mon
                    âne, mon âne a bien mal à sa patte » ne pouvait pas être très méchante et il
                    pointa le nez hors de sa cachette.<br/>
                    C’était une femme, en effet. Drôlement accoutrée peut-être mais c’était
                    une femme. Plutôt petite de taille mais très ronde. Elle portait les uns sur les
                    autres une quantité de vêtements qui n’allaient pas ensemble. Par couches,
                    pourrait-on dire : une couche de bas de laine rapiécés, une couche de jupes,
                    une couche de pull-overs… Elle ne risquait pas d’avoir froid. Pour parfaire
                    le tableau, elle était coiffée d’un bonnet qui lui couvrait les deux oreilles et
                    chaussée de croquenots d’une taille impressionnante.<br/>
                    — Tiens, tiens ! La faim sort le loup du bois ! Tu aimes le café ?<br/>
                    — Oui, bonjour, madame… répondit Tomek qui n’en avait jamais bu.<br/>
                    La femme éclata de rire en le voyant si timide.<br/>
                    — Oh, pour le madame ! Appelle-moi Marie, va, ça suffira bien ! Et tiretoi
                    une pierre vers le feu si tu veux t’asseoir.<br/>
                    En contournant l’arbre à la recherche d’une pierre, Tomek vit qu’il y
                    avait là un âne qui broutait, et une carriole dont les deux bras pointaient
                    vers le ciel.<br/>
                    — C’est votre âne ? demanda-t-il en revenant.<br/>
                    — C’est Cadichon. Il est très intelligent. Un peu têtu mais très
                    intelligent. Et vaillant surtout. Hein, Cadichon ?<br/>
                    L’âne se redressa, inclina curieusement la tête et regarda sa maîtresse à
                    travers une rangée de poils qui lui tombaient sur les yeux. Puis il reprit son
                    repas.<br/>
                    — Il est borgne, ajouta la grosse femme. Les ours…<br/>
                    — Les ours ? fit Tomek en s’asseyant sur une pierre plate qu’il avait
                    rapportée.<br/>
                    — Eh oui, les ours. La forêt en est infestée.<br/>
                    — Ah bon… dit Tomek, et il regarda au loin l’immense barre noire,
                    silencieuse et immobile.<br/>
                    Il se rendit compte qu’il l’avait presque oubliée.<br/>
                    — Alors on ne peut pas la traverser ?<br/>
                    La grosse femme, qui était en train de tailler une tartine dans une
                    énorme miche de pain de seigle, arrêta net son geste.<br/>
                    — Tu veux traverser la forêt ?<br/>
                    — Oui, fit Tomek, et il eut l’impression d’avoir dit une énormité.
                    Pour se corriger, il ajouta donc aussitôt :<br/>
                    — Ou bien, si ça n’est pas possible, je ferai le tour…<br/>
                    — Tu feras le tour ? reprit la grosse femme, et elle partit d’un rire si gai
                    et si naturel que Tomek se mit à rire aussi.<br/>
                    Ils en rirent aux larmes tous les deux, surtout que Tomek, pour en
                    rajouter, répétait de temps en temps : « Je ferai le tour… » et la grosse
                    femme riait de plus belle en reprenant, comme si c’était une chose tout à
                    fait ordinaire : « Bien sûr, tu feras le tour ! »<br/>
                    Quand ils furent un peu calmés, Marie alla vers la carriole et en rapporta
                    dans un panier une livre de beurre, deux pots de confiture, l’un de fraises,
                    l’autre de mûres, un gros morceau de fromage de brebis, du lait de vache
                    dans un petit bidon et une boîte de sucre. Entre-temps, le café était prêt et
                    tout chaud dans la casserole. Elle en versa à Tomek dans un gobelet, poussa
                    vers lui le panier de nourriture et l’invita à se servir sans façon. Ils
                    mangèrent en silence et de bon appétit. Puis Marie roula une cigarette et
                    commença à la fumer, ce qui étonna bien Tomek qui n’avait jamais vu une
                    femme faire cela.<br/>
                    — Comment t’appelles-tu, au fait ? demanda enfin Marie en soufflant la
                    fumée.<br/>
                    — Tomek, je m’appelle Tomek.<br/>
                    — Eh bien, Tomek, tu dois savoir que pour contourner cette forêt, pour
                    en « faire le tour » – et ils faillirent se remettre à rire –, pour en faire le tour,
                    il faut sans doute plus de deux ans.<br/>
                    — Deux ans ! répéta Tomek, stupéfait.<br/>
                    — Oui, cette forêt est la mère de toutes les forêts, c’est la plus ancienne
                    et la plus grande. En tout cas la plus longue. Tu sais comment elle
                    s’appelle ?<br/>
                    — Non, répondit Tomek.<br/>
                    — Elle s’appelle… Cadichon !<br/>
                    Tomek crut un instant que la forêt s’appelait Cadichon, et il trouva que
                    le nom était bien mal choisi pour une forêt aussi redoutable, mais non,
                    Marie s’était simplement interrompue pour appeler son âne.<br/>
                    — Cadichon ! Veux-tu un morceau de fromage pour ton dessert ?<br/>
                    L’âne remua la queue, ce qui voulait dire oui sans doute car Marie se
                    leva pour le lui apporter.<br/>
                    — Elle s’appelle la Forêt de l’Oubli. Et tu sais pourquoi ?<br/>
                    — Non, répondit Tomek, en se disant qu’il ne savait décidément pas
                    grand-chose.<br/>
                    — Elle s’appelle la Forêt de l’Oubli parce qu’on oublie immédiatement
                    ceux qui y entrent…<br/>
                    — Vous voulez dire…<br/>
                    — Tu peux me dire « tu », Tomek, je ne suis pas la reine d’Angleterre.<br/>
                    — Tu veux dire qu’ils ne reviennent plus et qu’on finit par les oublier ?<br/>
                    — Non. Pas du tout. Je veux dire qu’on les oublie dès qu’ils y entrent.<br/>
                    Comme s’ils n’existaient plus, comme s’ils n’avaient jamais existé. La forêt
                    les avale tout entiers, et avec eux le souvenir qu’on en a. Ils sortent à la fois
                    de notre vue et de notre mémoire. Tu comprends ?<br/>
                    — Pas tout à fait…<br/>
                    — Bon. Je vais te donner un exemple. Tes parents pensent sans doute à
                    toi en ce moment, ils se demandent où tu es, ce que tu…<br/>
                    Tomek l’interrompit :<br/>
                    — Je n’ai plus de parents. Je suis orphelin.<br/>
                    — Bien, alors dis-moi le nom de quelqu’un qui te connaît très bien et
                    qui t’aime beaucoup.<br/>
                    Tomek n’eut pas à hésiter :<br/>
                    — Icham. C’est mon meilleur ami.<br/>
                    — Parfait. Cette personne pense donc certainement à toi en ce moment,
                    elle se demande si tu vas bien, ce que tu fais, quand tu vas revenir, non ?<br/>
                    — Si, certainement… répondit Tomek, et son coeur se serra.<br/>
                    — Eh bien, dès que tu auras mis un pied dans cette forêt, Écham…<br/>
                    — I… cham, la corrigea Tomek.<br/>
                    — Icham n’aura plus le moindre souvenir de toi. Pour lui, tu n’auras
                    jamais existé, et si on lui demande des nouvelles de Tomek, ce qui est
                    d’ailleurs impossible puisque personne ne peut demander des nouvelles de
                    quelqu’un qui n’existe plus, mais admettons qu’on puisse le faire et donc
                    qu’on lui demande des nouvelles de Tomek, eh bien, il répondra : « Des
                    nouvelles de qui ? » Et cela aussi longtemps que tu resteras dans la forêt. À
                    l’inverse, dès que tu en sortiras, si tu en sors, tout sera comme avant et ton
                    ami Icham pourra se demander : « Tiens, et ce bandit de Tomek, qu’est-ce
                    qu’il peut bien fabriquer à l’heure qu’il est ? »<br/>
                    — Et… et si je n’en sors pas ? demanda faiblement Tomek.<br/>
                    — Si tu n’en sors pas, alors tu seras oublié pour l’éternité. Ton nom ne
                    dira rien à personne. Ce sera comme si tu n’avais pas vécu.<br/>
                    Jamais Tomek n’aurait imaginé qu’une chose aussi horrible puisse
                    exister. Il termina en silence sa tartine de beurre et son gobelet de café,
                    tandis que Marie finissait sa cigarette, et tout à coup il eut une idée folle.
                    — Mais alors, Marie, si tu entrais tout de suite dans la forêt, d’un mètre
                    seulement, tu n’existerais plus pour moi ?<br/>
                    — Exactement, Tomek. Ça t’amuserait d’essayer ?<br/>
                    Le mot « amuser » ne convenait pas vraiment. Cela lui faisait même un
                    peu peur, mais il accepta tout de même et tous les deux se hâtèrent de
                    ranger ce qui restait du petit déjeuner et d’éteindre le feu. Puis Marie attela
                    la carriole à Cadichon comme à un vrai petit cheval. Ils sautèrent dedans et
                    elle lança :<br/>
                    — Hue, Cadichon !<br/>
                    L’âne se mit à trotter en direction de la forêt et ils l’atteignirent en
                    quelques minutes. Tomek se demandait de plus en plus s’il avait vraiment
                    envie de faire cette drôle d’expérience, mais déjà Marie le poussait hors de
                    la carriole.<br/>
                    — Voilà, je vais m’avancer de quelques mètres dans la forêt avec
                    Cadichon. J’y resterai trois minutes environ puis je ressortirai. J’espère
                    seulement que tu n’auras pas l’idée d’entrer à ton tour dans la forêt, car on
                    n’en aurait pas fini de se chercher. Ou plutôt de ne pas se chercher,
                    justement ! Quel âge as-tu, Tomek ?<br/>
                    — J’ai treize ans.<br/>
                    — Alors ça va. Aucun enfant de treize n’oserait entrer tout seul dans
                    cette forêt. À tout à l’heure, Tomek ! Hue, Cadichon !<br/>
                    L’âne se mit en marche, tirant la carriole, Marie fit un dernier signe du
                    bras et elle disparut entre les troncs noirs de la Forêt de l’Oubli.
                    Tomek recula d’une dizaine de pas pour mieux voir l’impressionnant
                    mur d’arbres qui se dressait devant lui. C’était une variété de sapins très
                    sombres et très touffus, hauts de quatre-vingts mètres au moins. Sans même
                    entrer dans la forêt, on en sentait la fraîcheur. Il doit faire bien noir làdessous,
                    se dit Tomek avec inquiétude. Il était peut-être plus raisonnable de
                    contourner cette forêt, d’en faire le tour. À cette pensée, il eut curieusement
                    envie de rire, et pourtant ce n’était pas drôle. Perdre plusieurs jours ou
                    même plusieurs semaines n’avait rien de réjouissant… Si seulement il avait
                    eu avec lui un compagnon de voyage, évidemment, il aurait vu les choses
                    d’une autre manière. À deux, on s’encourage, on s’entraîne, on peut rire
                    ensemble, se porter secours s’il le faut. Or, depuis son départ, il n’avait
                    rencontré personne. Et il avait fini par dormir sous cet arbre là-bas, tout
                    seul, enroulé dans sa couverture. Sa couverture ! Il avait oublié sa
                    couverture !<br/>
                    Il courut à toutes jambes vers l’arbre et plongea sous les branches. Ouf !
                    Elle était encore là. Il se promit d’être plus vigilant désormais. Un
                    aventurier ne doit pas perdre ses affaires, surtout quand il en a si peu. Ce
                    n’est qu’en sortant de sa cachette qu’il vit les restes d’un feu tout près de
                    l’arbre. Il aurait pourtant juré qu’il n’y avait rien la veille quand il était
                    arrivé là. Et personne n’était venu depuis. Voilà qui était bien étrange.
                    Il roula la couverture sur ses épaules et fit quelques pas en direction de
                    la forêt. Après tout, elle n’était peut-être pas aussi grande que cela. En
                    partant tout de suite et en marchant d’un bon pas, il en serait sorti avant
                    midi peut-être, au plus tard avant la nuit. Et en cas de mauvaise rencontre, il
                    avait son couteau à ours dans sa poche.<br/>
                    Avant d’entrer dans la forêt, il eut une dernière hésitation car il lui vint à
                    l’esprit qu’il n’avait rien mangé au petit déjeuner et qu’il aurait sans doute
                    besoin de toutes ses forces. Or, il constata avec surprise qu’il n’avait pas
                    faim et qu’il se sentait même tout à fait rassasié. Allons ! se dit-il, et il
                    s’avança avec détermination vers la forêt.<br/>
                    Il allait y pénétrer quand il entendit des branches craquer tout près de là.
                    Était-ce un animal ? Un être humain ? Le bruit se rapprochait. Tomek recula
                    vivement et se coucha dans les herbes hautes pour voir ce qui allait surgir
                    de l’obscurité. Ce qu’il vit, ce furent d’abord deux oreilles d’âne, puis une
                    tête d’âne, puis un âne tout entier, enfin une carriole tirée par l’âne et sur la
                    carriole une grosse femme souriante. Rassuré, il se redressa.<br/>
                    — Alors, Tomek ! La mémoire te revient ? lui lança joyeusement Marie.<br/>
                    Tomek se précipita vers la carriole. Marie, qui en était descendue, lui
                    tendit les bras. Tomek n’osa pas s’y jeter parce qu’ils ne se connaissaient
                    pas encore assez bien. Il se contenta de lui prendre les mains et de les serrer.
                    C’est ainsi qu’ils devinrent amis.<br/>
                </p>

              </div>
            </Col>
            <Col sm={6}>
        <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 75 }}>
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
              onClick={()=>window.location.href = "chapitre-2"}
              size={40}
            />
            <ChildButton
              icon={<ChevronRightIcon style={{ fontSize: 20 }} />}
              background="grey"
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
