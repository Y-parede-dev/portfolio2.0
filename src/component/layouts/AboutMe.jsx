import developpeurImg from "../../assets/images/TEST/dev.docx"
import circlePink from "../../assets/images/TEST/circle.svg"
import { useEffect, useState } from "react"
import { slideTo } from "../../config/GSAP.config"
import cv from "../../assets/download/CV.pdf"
export const AboutMe = (props) => {
    const [seize, setSeize]= useState(0)
    useEffect(()=>{
        setSeize(document.querySelector('#t').offsetWidth)
        slideTo(".about-txt", 'left',seize)
        
    },[seize])
    useEffect(()=>{
        slideTo('.image-design-back',"top", .5)
    },[])
    useEffect(()=>{
        slideTo(".image-about-developpeur", 'bottom', .35)
    },[])
    return(
        <div className="About-container container">
            <div className="about-content content-cust">
                <div className="image-content">
                    <img src={circlePink} className="image-design-back img-article-circle" alt="circles" />
                    <img src={developpeurImg} className="image-about-developpeur img-all" alt="développeur" />
                </div>
                <div className="about-txt content-art">
                    <h2 className="about-title title-art">À propos de moi</h2>
                    <p id='t' className="about-text txt-art">Un développeur web curieux, passionné, cherchant à tirer parti de solides compétences en développement en mettant l'accent sur la collaboration, la communication et la passion.</p>
                    <button className="about-btn"><a title="Cliquer pour télécharger mon CV au format .DOCX" href={cv} download>télécharger CV</a></button>
                </div>
            </div>
            <img alt='Fond' className="img-about-up" src={props.backgroundImg} />
        </div>
    )
}