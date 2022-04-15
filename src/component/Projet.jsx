import plantapik from'../assets/images/TEST/plantapik.webp'
import magin from'../assets/images/TEST/magin.webp'
import therapies from'../assets/images/TEST/therapies.webp'
import portfolio from'../assets/images/TEST/portFolio.webp'
import { Project} from '../libs/MaginJS'
const Plantapik = new Project(
    1,
    'plantapik',
    `https://plantapik.com`,
    plantapik,
    "Plantapik est m'a première réalisation après avoir terminé la formation de développeur web d'OpenClassRooms, travail avec le CMS Prestashop.",
    ['html', 'css', 'smarty (php)', 'prestashop'],
    false,
    true
)

const Magin = new Project(
    2,
    'magin-code',
    `https://magin-code-old.netlify.app/`,
    magin, 
    "L'ancienne version de mon portfolio, je continue à l'héberger sur netlify, dans un but éducatif.", 
    ['html', 'css', 'js','react', 'node']
    ,false,
    true
)
const Therapies = new Project(
    3,
    'therapies-breves',
    `https://therapiesbrevessnathalie.com`,
    therapies, 
    "Thérapies Brèves Colomiers est une de mes dernières réalisations, j'ai moi-même créer la maquette du site.", 
    ['html', 'css', 'js','react', 'firebase'],
    false,
    true
)
const PortFolio = new Project(
    4,
    'PortFolio',
    `https://magin-code.fr`,
    portfolio, 
    "Le portfolio que vous êtes en train de parcourir, c'est actuellement ma dernière réalisation.", 
    ['html', 'css', 'js','react'],
    true,
    true,
    'https://github.com/Y-parede-dev/portfolio2.0'
)
export const ProjectArr = [Plantapik, Magin, Therapies, PortFolio]