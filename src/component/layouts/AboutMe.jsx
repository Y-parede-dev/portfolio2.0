import developpeurImg from "../../assets/images/TEST/dev.png"
import circlePink from "../../assets/images/TEST/circle.svg"
import { useEffect } from "react"
import { slideTo } from "../../config/GSAP.config"
export const AboutMe = (props) => {

    useEffect(()=>{
        slideTo(".about-txt", 'left')
    },[])
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
                    <img src={developpeurImg} className="image-about-developpeur" alt="développeur" />
                </div>
                <div className="about-txt content-art">
                    <h2 className="about-title title-art">About me</h2>
                    <p className="about-text txt-art">An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</p>
                    <button className="about-btn">télécharger CV</button>

                </div>
            </div>
            <img className="img-about-up" src={props.backgroundImg} />
        </div>
    )
}