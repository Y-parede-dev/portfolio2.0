import backFooter from '../../assets/backDesign/footer.svg'
import { Links } from '../widget/Links'
import { Contact } from './Contact'
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content content-cust">
                <Contact />
                <img src={backFooter} alt="fond footer" className="footer-img" />
                <div className='meta-footer'>
                    <p className='designer'>Travail avec l'excellente maquette de <a href='https://www.linkedin.com/in/akhiltj/' target='_blank' rel='noreferrer' > Akhil T J </a></p>
                    <Links/>
                    <p>Tout droits réservé ©️ Magin code 2022</p>
                </div>
            </div>
        </footer>
    )
}