import { useEffect } from "react"
import pcImg from "../../assets/images/TEST/pc.png"
import { TechnoArr } from "../Techno"
import { slideTo } from "../../config/GSAP.config"
export const Skills = (props) => {
    useEffect(()=>{
        slideTo('.skills-content-meta', "right",.1)
    },[])
    useEffect(()=>{
        slideTo('.skills-techno', "bottom",.3)
    },[])
    useEffect(()=>{
        slideTo('.container-img-skills', "bottom",.45)
    },[])
    useEffect(()=>{
        slideTo('.img-circle', "top", .5)
    },[])
    return(
        <div className="container-skills container">
            <div className="skills-content content-cust">
                <div className="container-img-skills image-content">
                    <img src={pcImg} className="img-pc img-all" alt='ordinateur'/>
                    <img src={props.circlePink} className='img-circle img-article-circle ' alt='circle design'/>
                </div>
                <div className="skills-content-meta content-art">
                    <div className="tilte-txt-skills">
                        <h2 className="title-skills title-art">Compétences</h2>
                        <p className="txt-art txt-skills">J'ai appris le développement Web avec HTML5, Css3 et Javascript. Ensuite, je me suis formé sur React Js car il est le "Framework" le plus adapter à ma façon de travailler.</p>
                    </div>
                    <div className="skills-techno">
                        <ul className="skills-list">
                        {TechnoArr.map((e)=>(
                            <li key={`${e.id}`} className={`skills-list-items ${e.className}`}>
                                <e.logo alt={`logo ${e.className}`} className={`logo logo-${e.className}`}/>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <img src={props.backgroundImg} alt="fond" className="back-img-skills img-article" />
        </div>
    )
}