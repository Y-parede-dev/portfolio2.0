import backFooter from '../../assets/backDesign/footer.svg'
import { Contact } from './Contact'
export const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className="footer-content content-cust">
                <Contact />
                <img src={backFooter} alt="fond footer" className="footer-img" />
                <div className='meta-footer'>
                    <p>©️ Magin code 2022</p>
                </div>
            </div>
        </footer>
        )
}