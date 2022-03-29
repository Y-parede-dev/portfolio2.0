import plantapik from'../assets/images/TEST/plantapik.png'
import magin from'../assets/images/TEST/magin.png'
import therapies from'../assets/images/TEST/therapies.png'
import portfolio from'../assets/images/TEST/portFolio.png'
import { Project} from '../libs/MaginJS'

const Plantapik= new Project(1,'plantapik',`https://plantapik.com`,plantapik,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ", ['html', 'css', 'smarty (php)', 'prestashop']
)

const Magin=new Project(
    2,'magin-code',`https://magin-code.fr`,magin, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ", ['html', 'css', 'js','react', 'node']
)
const Therapies=new Project(
    3,'therapies-breves',`https://therapiesbrevessnathalie.com`,therapies, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ", ['html', 'css', 'js','react', 'firebase']
)
const PortFolio=new Project(
    4,'PortFolio',`https://therapiesbrevessnathalie.com`,portfolio, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ", ['html', 'css', 'js','react', 'firebase']
)
export const ProjectArr = [Plantapik, Magin, Therapies, PortFolio]