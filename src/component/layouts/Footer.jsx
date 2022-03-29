import backFooter from '../../assets/backDesign/footer.svg'
export const Footer = (props) => {
    return (
        <footer className='footer container'>
            <div className="footer-content content-cust">
                <img src={backFooter} alt="fond footer" className="footer-img" />
                <div className='meta-footer'>
                    <p>©️ Magin code 2022</p>
                </div>
            </div>
        </footer>
        )
}