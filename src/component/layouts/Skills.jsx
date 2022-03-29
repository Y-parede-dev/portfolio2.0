import { useEffect, useRef } from "react"
import pcImg from "../../assets/images/TEST/pc.png"
import tstImg from "../../assets/images/TEST/test.png"
import { TechnoArr } from "../Techno"
import { slideTo } from "../../config/GSAP.config"
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';

export const Skills = (props) => {
    const html={name:'HTML', logo: FaHtml5}
    const css = {name:'CSS', logo: FaCss3Alt}
    const js = {name:'JavaScript', logo: FaJsSquare}
    const react = {name:'ReactJs', logo: FaReact}
    const node = {name:'NodeJs', logo: FaNodeJs}
    const express={name:'ExpressJs', logo: SiExpress}
    const mySql={name:'SQL', logo: SiMysql}
    const PushQuick = (array,...props) => {
        array.push(...props)
    }
    const libLogo =  []
    PushQuick(libLogo,html, css, js, react, node, express, mySql)
    TechnoArr.map((e)=>{
        console.log(e)
    })
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
                    <img src={pcImg} className="img-pc" alt='ordinateur'/>
                    <img src={props.circlePink} className='img-circle img-article-circle' alt='circle design'/>
                </div>
                <div className="skills-content-meta content-art">
                    <div className="tilte-txt-skills">
                        <h2 className="title-skills title-art">Skills</h2>
                        <p className="txt-art txt-skills">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
                    </div>
                    <div className="skills-techno">
                        <ul className="skills-list">
                        {TechnoArr.map((e)=>(
                            <li key={`${e.id}`} className={`skills-list-items ${e.className}`}>
                                <e.logo />
                                {/* {libLogo.map((er)=>(
                                   <div  className="techno-logo" key={`techno logo ${e.id} - ${er.name}`}>
                                        {e.name === er.name ?
                                            <>
                                                <er.logo className="logo-" />

                                            </>:''
                                        }
                                   </div>     

                                ))} */}
                                {e.name}
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