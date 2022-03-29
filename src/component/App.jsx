import{ Header } from './layouts/Header'
import { AboutMe } from "./layouts/AboutMe"
import backgroundImg  from '../assets/backDesign/backHeader.svg'
import { Skills } from './layouts/Skills'
import { Works } from './layouts/Works'
import { Footer } from './layouts/Footer'
import { useRef, useState, useEffect } from 'react'
import circlePink from "../assets/images/TEST/circle.svg"

import { gsap} from 'gsap'
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export const App =()=>{
    console.log(window.pageYOffset)
    const [hovered, setHover] = useState(false)
    const aboutRef = useRef()
    
    useEffect(()=>{
        console.log(window.screenTop.toPrecision())
    }, [])

    return(
        <div className="App">
            
            <Header
                backgroundImg={backgroundImg} 
                aboutRef={aboutRef}/>
            <AboutMe 
                className='about' id='about'
                backgroundImg={backgroundImg} 
                circlePink={circlePink}/>
            <Skills 
                backgroundImg={backgroundImg}
                circlePink={circlePink}/>
            <Works />
            <Footer />
        </div>
    )
}